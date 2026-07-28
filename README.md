# victoriaroberts.co.nz — static site

Plain static HTML. No build step, no dependencies to install. Point CloudCannon
at this folder as the site root and it will serve as-is.

## Pages

| File | URL |
| --- | --- |
| `index.html` | `/` — portfolio home |
| `papercut-partner-portal.html` | `/papercut-partner-portal/` |
| `twitchcon.html` | `/twitchcon/` |
| `te-tautiaki-hoiho.html` | `/te-tautiaki-hoiho/` |
| `cv.html` | `/cv/` — CV, print/PDF ready |

## Structure

- `assets/` — images, doodle icons, the doodle library SVG
- `support.js` — page runtime, required by every page
- `image-slot.js` — image placeholder component (portfolio only)
- `doc-page.js` — paged-document component (CV only)

## Notes before going live

- **Some case-study imagery is hotlinked** from `cc-dam.imgix.net` (CloudCannon's
  CDN). Those images load from the network rather than this repo. If you'd rather
  self-host them, download and drop them in `assets/`, then update the `src`
  attributes.
- **`assets/` carries unused files** copied across wholesale — `.png`/`.jpg`
  duplicates of the same image, and older screenshots. Worth pruning before
  launch to keep the repo light.
- **Replace `assets/vic-photo.png`** when a portrait is available; it is
  referenced once, in the About section of `index.html`.
