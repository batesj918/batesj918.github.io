# Justin F. Bates — Portfolio

Static site, no build step. Plain HTML/CSS/vanilla JS.

## Folder structure

```
Portfolio Site/
  index.html
  css/style.css
  js/script.js          (nav, scroll reveal, project galleries + lightbox)
  assets/
    Justin-Bates-Resume.pdf
    shots/              (project screenshots, see below)
  README.md
```

## Screenshots (assets/shots)

Refreshed 30 Sep 2026 from the live sites.

- Plastic Reset: `plasticreset-home / -quiz / -score / -shop / -guide / -news .jpg`
- TrackSprites: `tracksprites-collection / -map / -codes / -trade / -leaderboard / -mobile .jpg`
  (player names on the leaderboard shot are blurred on purpose)
- Also used: `noego-workbook.png` (No Ego Club).

`assets/Justin-Bates-Resume.pdf` is the Product Owner resume (PDF of Resumes/Resume - Justin Bates PO.docx, 30 Sep 2026).

Galleries: each case study with `data-gallery` has a main shot plus thumbnail buttons. A thumbnail's
`data-src`, `data-url`, `data-caption` and `data-alt` control what the main frame swaps to. To add a
shot, drop the image in `assets/shots/` and copy one of the `<button class="gallery-thumb">` lines.

## Brand notes

- It's **Plastic Reset**, not "The Plastic Reset" (the brand dropped the "The").
- The tracker's brand is **TrackSprites** and it's live at **tracksprites.com**.

## Content sources

The case studies are based on the live apps (theplasticreset.com, tracksprites.com), the Replit
source for each project, Canva brand assets (Plastic Reset, No Ego Club), and the Trading Bot's
development history. Give the copy an edit pass for tone before publishing.

## Deploy — GitHub Pages

1. Push this folder's contents to a GitHub repo root.
2. Settings → Pages → Source → Deploy from a branch → `main`, `/ (root)`.
3. Live at `https://<username>.github.io/<repo-name>/`.

## Deploy — Vercel

Import the repo at vercel.com → Framework preset **Other** → no build command, output = root.
