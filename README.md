# Baby Doan 2026 — Announcement Website 💕

A static, no-backend single-page site to announce the arrival of **Anna** —
made for colleagues to guess her name.

## What it does

Two screens:

1. **Guess the Name** — visitors type the baby's name. If they're stuck, they
   can reveal hints one at a time. A chronometer starts on the first hint and
   stops on a correct guess; on a win, they're invited to screenshot their time
   and share it.
2. **Reveal** — locked until the name is guessed; then shows Anna's photo, the
   key facts, and a short story.

## The details (already filled in)

| Field      | Value                                  |
| ---------- | -------------------------------------- |
| Name       | **Anna**                               |
| Full name  | Anna Tâm Sophie Xuân Doan              |
| Born       | June 22, 2026 at 9:39 PM               |
| Place      | Le Chesnay-Rocquencourt, France        |
| Weight     | 2.995 kg                               |
| Height     | 49 cm                                  |

## Files

- `index.html` — markup for the three screens
- `styles.css` — all styling
- `script.js` — game logic, timer, reveal. **All editable content lives in the
  `CONFIG` block at the top.**
- `photos/anna-1.jpg` — the baby photo

## Editing content

Open `script.js` and edit the `CONFIG` object at the top — name, hints, facts,
story, and photo path are all there. No build step required.

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
