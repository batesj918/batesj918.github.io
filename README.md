# Justin F. Bates — Portfolio

Static site, no build step. Plain HTML/CSS/vanilla JS.

## Folder structure

```
Portfolio Site/
  index.html                 home: hero → project card grid → about → contact
  francis.html               one page per project (same template)
  crafted-by-francisco.html
  plastic-reset.html
  tracksprites.html
  trading-bot.html
  pt-survival-kit.html
  no-ego-club.html
  css/style.css
  js/script.js               mobile nav, project galleries, lightbox
  assets/Justin-Bates-Resume.pdf
  assets/shots/              screenshots + card covers (cover-*.jpg)
```

Each project page follows the same layout: title + one-line pitch, quick facts, image gallery,
The challenge / What I built / Results / Built with, the full feature list, then Previous/Next.
The pages are generated from one data file, so ask Claude to regenerate them rather than hand-editing seven files.

## Screenshots (assets/shots)

Refreshed 30 Sep 2026.

- Francis: `francis-architecture.jpg` and `etsy-studio-pipeline.jpg` (diagrams), plus
  `francis-ui.jpg` (the local dashboard rendered with sample data, since the real one only runs on localhost)
- Crafted by Francisco (Etsy): `etsy-banner / -custom-number / -reel-happy / -sunrise-ridge / -beanie / -coffee-denial .jpg`
- Plastic Reset: `plasticreset-home / -quiz / -score / -shop / -guide / -news .jpg`
- TrackSprites: `tracksprites-collection / -map / -codes / -trade / -leaderboard / -mobile .jpg`
  (player names on the leaderboard shot are blurred on purpose)
- No Ego Club: `noego-ego-controls / -you-are-not / -ego-vs-soul / -ebook .jpg` (Canva exports) + `noego-workbook.png`

Card covers: `cover-etsy.jpg`, `cover-noego.jpg` (collages), `cover-trading.jpg`, `cover-ptkit.jpg` (rendered illustrations).


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
