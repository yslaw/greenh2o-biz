const { chromium } = require('playwright');
const path = require('path');
const { execFileSync } = require('child_process');
// Usage: node render.js <business-card-dir> [html-file] [output-prefix]
//   e.g. node render.js . card-law-yong-sein.html law-yong-sein
(async () => {
  const dir = path.resolve(process.argv[2]);
  const html = process.argv[3] || 'card.html';
  const pre = process.argv[4] || 'card';
  const b = await chromium.launch();
  const p = await b.newPage({ deviceScaleFactor: 300 / 96 });
  await p.goto('file://' + path.join(dir, html));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForSelector('body[data-fitted]'); await p.waitForTimeout(300);
  const cards = await p.$$('.card');
  await cards[0].screenshot({ path: path.join(dir, pre + '-front.png') });
  await cards[1].screenshot({ path: path.join(dir, pre + '-back.png') });
  await p.pdf({ path: path.join(dir, pre + '-print.pdf'), preferCSSPageSize: true, printBackground: true });
  await b.close();
  // Chrome leaves a sub-point unpainted sliver on the right/bottom; trim it off
  execFileSync('python3', ['-c', `
import pypdf, sys
from pypdf.generic import RectangleObject
f = sys.argv[1]; r = pypdf.PdfReader(f); w = pypdf.PdfWriter()
for p in r.pages:
    box = RectangleObject([0, 0.3, 254.7, 153]); p.mediabox = box; p.cropbox = box; p.trimbox = box; w.add_page(p)
w.write(f)
`, path.join(dir, pre + '-print.pdf')]);
  // Front-over-back collage
  execFileSync('python3', ['-c', `
import sys
from PIL import Image
d, pre = sys.argv[1], sys.argv[2]
a = Image.open(f'{d}/{pre}-front.png').convert('RGB'); b = Image.open(f'{d}/{pre}-back.png').convert('RGB')
out = Image.new('RGB', (max(a.width, b.width), a.height + 40 + b.height), (255, 255, 255))
out.paste(a, (0, 0)); out.paste(b, (0, a.height + 40)); out.save(f'{d}/{pre}-collage.png', dpi=(300, 300))
`, dir, pre]);
})();
