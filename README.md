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

Refreshed 30 Sep 2026.

- Francis: `francis-architecture.jpg` and `etsy-studio-pipeline.jpg` (diagrams), plus
  `francis-ui.jpg` (the local dashboard rendered with sample data, since the real one only runs on localhost)
- Crafted by Francisco (Etsy): `etsy-banner / -custom-number / -reel-happy / -sunrise-ridge / -beanie / -coffee-denial .jpg`
- Plastic Reset: `plasticreset-home / -quiz / -score / -shop / -guide / -news .jpg`
- TrackSprites: `tracksprites-collection / -map / -codes / -trade / -leaderboard / -mobile .jpg`
  (player names on the leaderboard shot are blurred on purpose)
- No Ego Club: `noego-ego-controls / -you-are-not / -ego-vs-soul / -ebook .jpg` (Canva exports) + `noego-workbook.png`

Each case study also has a collapsible **Full feature breakdown** (`<details class="project-features">`).
Add a bullet to the right `<div class="feature-group">` to extend it.

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

## Live site

https://batesj918.github.io, served from the public repo `batesj918/batesj918.github.io` (branch `main`, root).
To update it, upload changed files to the same paths in the repo. Pages rebuilds in about a minute.

## Deploy — GitHub Pages

1. Push this folder's contents to a GitHub repo root.
2. Settings → Pages → Source → Deploy from a branch → `main`, `/ (root)`.
3. Live at `https://<username>.github.io/<repo-name>/`.

## Deploy — Vercel

Import the repo at vercel.com → Framework preset **Other** → no build command, output = root.
