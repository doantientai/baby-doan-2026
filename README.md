# Baby Doan 2026 — Announcement Website 💕

> ⚠️ **No spoilers here.** This README intentionally leaves out the baby's
> name and details so it doesn't ruin the guessing game. The answer lives in
> the `CONFIG` block at the top of `script.js`.

A static, no-backend single-page site to announce the arrival of our baby —
made for colleagues to guess the name.

## What it does

Two screens:

1. **Guess the Name** — visitors type their guess. If they're stuck, they can
   reveal hints one at a time. A chronometer starts when they press play and
   stops on a correct guess; on a win, they're invited to screenshot their time
   (with the name blurred) and share it to challenge others.
2. **Reveal** — locked until the name is guessed; then shows the photo, the key
   facts, and the meaning of each name.

There are also standalone, spoiler-containing pages that explain the name in
three languages (`anna.fr.html`, `anna.en.html`, `anna.vn.html`) — meant to be
shared with family directly, not from the game.

## Files

- `index.html` — the guessing game
- `anna.fr.html` / `anna.en.html` / `anna.vn.html` — standalone name pages (FR/EN/VN)
- `styles.css` — all styling
- `script.js` — game logic, timer, reveal. **All editable content (name, hints,
  facts, name meanings, photo path) lives in the `CONFIG` block at the top.**
- `photos/` — the baby photo

## Editing content

Open `script.js` and edit the `CONFIG` object at the top. No build step required.

## Running locally

It's pure static HTML/CSS/JS. Just open `index.html` in a browser, or serve the
folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying (GitHub Pages)

In the repo settings → **Pages**, set the source to **Deploy from a branch**,
branch `main`, folder `/ (root)`. The site will be served at
`https://<user>.github.io/baby-doan-2026/`.
