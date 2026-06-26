/**
 * Baby gift-list backend — Google Apps Script.
 *
 * The Sheet's first tab should have a header row, then one item per row:
 *
 *   | Catégorie         | Article   | Détails | Pris par | Plusieurs |
 *   | Pour le quotidien | Vêtements | …       |          | oui       |
 *   | Pour le quotidien | Poussette | …       |          |           |
 *
 * Column A = category, B = item name, C = optional details,
 * D = who reserved it (leave D empty = still available),
 * E = "Plusieurs": put any text (e.g. "oui") for items several people can
 *     share — those collect a list of names instead of locking to one person.
 *
 * This script is bound to its own Sheet (created via Extensions → Apps Script),
 * so it just reads that Sheet's first tab — no sheet ID needed.
 *
 * Deploy: Extensions → Apps Script, paste this in, then
 *   Deploy → New deployment → type "Web app"
 *   Execute as: Me   ·   Who has access: Anyone
 * (To update later: Deploy → Manage deployments → edit → New version.)
 * Copy the web-app URL into CONFIG.giftList.url in script.js.
 */

function sheet_() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
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
      multi: String(values[i][4] || "").trim() !== "",
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
  if (body.action === "add") return addItem_(body);
  return reserve_(body);
}

function addItem_(body) {
  const item = String(body.item || "").trim();
  if (!item) return json_({ ok: false, error: "missing item" });
  const category = String(body.category || "").trim() || "Autres idées";
  const details = String(body.details || "").trim();
  const name = String(body.name || "").trim();
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    // [Catégorie, Article, Détails, Pris par, Plusieurs]
    sheet_().appendRow([category, item, details, name, ""]);
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function reserve_(body) {
  const row = Number(body.row);
  const name = String(body.name || "").trim();
  const mode = String(body.mode || "join").trim(); // "solo" | "join"
  if (!row || !name) return json_({ ok: false, error: "missing row/name" });

  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const sh = sheet_();
    const dCell = sh.getRange(row, 4); // column D = "Pris par"
    const eCell = sh.getRange(row, 5); // column E = "Plusieurs" (shared flag)
    const current = String(dCell.getValue() || "").trim();
    const shared = String(eCell.getValue() || "").trim() !== "";

    if (mode === "solo") {
      // Take the whole gift — only possible if untouched and not shared.
      if (shared) return json_({ ok: false, error: "shared" });
      if (current) return json_({ ok: false, takenBy: current });
      dCell.setValue(name);
      return json_({ ok: true, takenBy: name, multi: false });
    }

    // Join: mark the item shared and append the name (no duplicates).
    if (!shared) eCell.setValue("oui");
    const names = current
      ? current.split(",").map((s) => s.trim()).filter(Boolean)
      : [];
    if (!names.some((n) => n.toLowerCase() === name.toLowerCase())) {
      names.push(name);
    }
    const joined = names.join(", ");
    dCell.setValue(joined);
    return json_({ ok: true, takenBy: joined, multi: true });
  } finally {
    lock.releaseLock();
  }
}
