const { chromium } = require('playwright');
const path = require('path');
const { execFileSync } = require('child_process');
// Usage: node render.js <path-to-business-card-dir>
(async () => {
  const dir = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ deviceScaleFactor: 300 / 96 });
  await p.goto('file://' + path.join(dir, 'card.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForSelector('body[data-fitted]'); await p.waitForTimeout(300);
  const cards = await p.$$('.card');
  await cards[0].screenshot({ path: path.join(dir, 'card-front.png') });
  await cards[1].screenshot({ path: path.join(dir, 'card-back.png') });
  await p.pdf({ path: path.join(dir, 'card-print.pdf'), preferCSSPageSize: true, printBackground: true });
  await b.close();
  // Chrome leaves a sub-point unpainted sliver on the right/bottom; trim it off
  execFileSync('python3', ['-c', `
import pypdf, sys
from pypdf.generic import RectangleObject
f = sys.argv[1]; r = pypdf.PdfReader(f); w = pypdf.PdfWriter()
for p in r.pages:
    box = RectangleObject([0, 0.3, 254.7, 153]); p.mediabox = box; p.cropbox = box; p.trimbox = box; w.add_page(p)
w.write(f)
`, path.join(dir, 'card-print.pdf')]);
})();
