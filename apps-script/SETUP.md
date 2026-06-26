# Gift list — one-time setup (~5 min)

The gift list on the FR page reads and writes a Google Sheet through a small
Apps Script. No server to host, nothing secret in the website.

## 1. Create the Sheet

1. New Google Sheet.
2. First row = headers, then one item per row:

   | Catégorie         | Article     | Détails | Pris par |
   | ----------------- | ----------- | ------- | -------- |
   | Pour le quotidien | Vêtements   |         |          |
   | Éveil & jouets    | Mobile      | x1      |          |

   - **Catégorie** (col A): section header (items are grouped by it)
   - **Article** (col B): what you need
   - **Détails** (col C): optional (size, quantity, link…)
   - **Pris par** (col D): leave empty — filled in when someone reserves

## 2. Add the script

1. In the Sheet: **Extensions → Apps Script**.
2. Delete the default code, paste the contents of `Code.gs` from this folder.
3. Save.

## 3. Deploy as a web app

1. **Deploy → New deployment**.
2. Gear icon → type **Web app**.
3. **Execute as:** Me · **Who has access:** Anyone.
4. **Deploy**, authorize when prompted, and **copy the Web app URL**
   (looks like `https://script.google.com/macros/s/…/exec`).

## 4. Turn it on

Open `script.js`, find `CONFIG.giftList`, and paste the URL:

```js
giftList: {
  url: "https://script.google.com/macros/s/XXXXX/exec",
  ...
}
```

Commit & push. The "🎁 Liste de naissance" section now appears on the FR page,
with live **"Je m'en occupe"** buttons. Until `url` is set, the whole section
stays hidden.

## Updating the list later

Just edit the Sheet — add/remove rows anytime. No redeploy needed (only redeploy
if you change `Code.gs`). To free up an item someone reserved, clear its
**Pris par** cell.
