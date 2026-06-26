/**
 * Baby gift-list backend — Google Apps Script bound to the Google Sheet.
 *
 * The Sheet's first tab should have a header row, then one item per row:
 *
 *   | Article        | Détails | Pris par |
 *   | Poussette      |         |          |
 *   | Body 3 mois    | x5      |          |
 *
 * Column A = item name, B = optional details, C = who reserved it
 * (leave C empty = still available).
 *
 * Deploy: Extensions → Apps Script, paste this in, then
 *   Deploy → New deployment → type "Web app"
 *   Execute as: Me   ·   Who has access: Anyone
 * Copy the web-app URL and paste it into CONFIG.giftList.url in script.js.
 */

function sheet_() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
}

function getItems_() {
  const values = sheet_().getDataRange().getValues();
  const items = [];
  for (let i = 1; i < values.length; i++) {
    const item = values[i][0];
    if (!item) continue;
    items.push({
      row: i + 1, // 1-based sheet row
      item: String(item),
      details: String(values[i][1] || ""),
      takenBy: String(values[i][2] || ""),
    });
  }
  return items;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet() {
  return json_({ ok: true, items: getItems_() });
}

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: "bad request" });
  }
  const row = Number(body.row);
  const name = String(body.name || "").trim();
  if (!row || !name) return json_({ ok: false, error: "missing row/name" });

  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const cell = sheet_().getRange(row, 3); // column C = "Pris par"
    const current = String(cell.getValue() || "").trim();
    if (current) return json_({ ok: false, takenBy: current });
    cell.setValue(name);
    return json_({ ok: true, takenBy: name });
  } finally {
    lock.releaseLock();
  }
}
