// SparxX — Register Your Interest Form Backend
// Paste into Google Apps Script (script.google.com → new project)
//
// DEPLOY STEPS:
// 1. Open Google Sheet → Extensions → Apps Script
// 2. Paste this file (replace existing code)
// 3. Deploy → New Deployment → Type: Web App
//    Execute as: Me | Who has access: Anyone
// 4. Copy the Web App URL → paste into index.html SCRIPT_URL

var SHEET_NAME   = 'Enquiries';
var NOTIFY_EMAIL = 'lawyongsein@gmail.com';

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet();
    sheet.appendRow([
      new Date(),
      d.firstName || '',
      d.lastName  || '',
      d.email     || '',
      d.phone     || '',
      d.company   || '',
      d.country   || '',
      d.series    || '',
      d.notes     || ''
    ]);
  } catch (err) {
    return fail('Sheet write failed: ' + err.message);
  }

  try {
    var d2 = JSON.parse(e.postData.contents);
    if (NOTIFY_EMAIL) notify(d2);
  } catch (err) {
    // Row is already saved; surface the email failure but don't lose the enquiry.
    return fail('Saved, but email notification failed: ' + err.message);
  }

  return ok();
}

function doGet() { return ok(); }

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s  = ss.getSheetByName(SHEET_NAME);
  if (!s) {
    s = ss.insertSheet(SHEET_NAME);
    s.appendRow(['Timestamp','First Name','Last Name','Email','Phone','Company','Country','Nucleus Model','Notes']);
    var h = s.getRange(1, 1, 1, 9);
    h.setBackground('#0a1628').setFontColor('#fff').setFontWeight('bold');
    s.setFrozenRows(1);
    [160,120,120,220,140,180,140,160,300].forEach(function(w,i){ s.setColumnWidth(i+1,w); });
  }
  return s;
}

function notify(d) {
  var name = d.firstName + ' ' + d.lastName;
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: 'New SparxX Enquiry — ' + name + (d.company ? ' (' + d.company + ')' : '') + (d.country ? ' · ' + d.country : ''),
    body: [
      'New enquiry from the SparxX website.',
      '',
      'Name:    ' + name,
      'Email:   ' + d.email,
      'Phone:   ' + (d.phone   || '—'),
      'Company: ' + (d.company || '—'),
      'Country: ' + (d.country || '—'),
      'Model:   ' + (d.series  || '—'),
      'Notes:   ' + (d.notes   || '—'),
      '',
      'View sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
    ].join('\n')
  });
}

function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function fail(message) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'error', message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
