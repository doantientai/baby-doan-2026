/**
 * Baby gift-list backend — Google Apps Script.
 *
 * The Sheet's first tab should have a header row, then one item per row:
 *
 *   | Catégorie         | Article     | Détails | Pris par |
 *   | Pour le quotidien | Vêtements   | …       |          |
 *   | Éveil & jouets    | Mobile      | …       |          |
 *
 * Column A = category, B = item name, C = optional details,
 * D = who reserved it (leave D empty = still available).
 *
 * SHEET_ID points at the data sheet, so the script doesn't have to be
 * container-bound to it. Replace it if you ever move to another sheet.
 *
 * Deploy: Extensions → Apps Script, paste this in, then
 *   Deploy → New deployment → type "Web app"
 *   Execute as: Me   ·   Who has access: Anyone
 * (To update later: Deploy → Manage deployments → edit → New version.)
 * Copy the web-app URL into CONFIG.giftList.url in script.js.
 */

const SHEET_ID = "1LCp1eMVhhB_Lglgs2yOeinVtP8XRF6XI5lRuReqtYIU";

function sheet_() {
  return SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
}

function getItems_() {
  const values = sheet_().getDataRange().getValues();
  const items = [];
  for (let i = 1; i < values.length; i++) {
    const item = values[i][1];
    if (!item) continue;
    items.push({
      row: i + 1, // 1-based sheet row
      category: String(values[i][0] || ""),
      item: String(item),
      details: String(values[i][2] || ""),
      takenBy: String(values[i][3] || ""),
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
    const cell = sheet_().getRange(row, 4); // column D = "Pris par"
    const current = String(cell.getValue() || "").trim();
    if (current) return json_({ ok: false, takenBy: current });
    cell.setValue(name);
    return json_({ ok: true, takenBy: name });
  } finally {
    lock.releaseLock();
  }
}
