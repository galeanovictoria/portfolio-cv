/**
 * Site font registration — single place to change families, weights, or provider.
 *
 * - Used by `astro.config.mjs` (`fonts`) and layout `<SiteFonts />` (preload / Font component).
 * - `cssVariable` values must match tokens consumed in CSS (`--font-body`, `--font-headings`,
 *   `--font-serif`, `--font-mono`).
 * - Prefer `fontProviders.fontsource()` (local via @fontsource packages) over remote providers.
 * - Use a weight range string (e.g. `"100 900"`) for variable fonts instead of discrete weights.
 *
 * The four roles this site uses:
 * - Bricolage Grotesque — display headings, tight and heavy.
 * - Public Sans — UI and body sans.
 * - Newsreader — the serif used for prose, ledes, and pull quotes.
 * - IBM Plex Mono — eyebrows, meta lines, tags, captions.
 *
 * @see https://docs.astro.build/en/guides/fonts/
 */
import { fontProviders } from "astro/config";

export const siteFonts = [
  {
    name: "Public Sans",
    cssVariable: "--font-body",
    provider: fontProviders.google(),
    weights: ["100 900"],
    styles: ["normal"],
    subsets: ["latin"],
    fallbacks: ["system-ui", "sans-serif"],
  },
  {
    name: "Bricolage Grotesque",
    cssVariable: "--font-headings",
    provider: fontProviders.google(),
    weights: ["200 800"],
    styles: ["normal"],
    subsets: ["latin"],
    fallbacks: ["system-ui", "sans-serif"],
  },
  {
    name: "Newsreader",
    cssVariable: "--font-serif",
    provider: fontProviders.google(),
    weights: ["200 800"],
    styles: ["normal", "italic"],
    subsets: ["latin"],
    fallbacks: ["georgia", "serif"],
  },
  {
    name: "IBM Plex Mono",
    cssVariable: "--font-mono",
    provider: fontProviders.google(),
    weights: [400, 500, 600],
    styles: ["normal"],
    subsets: ["latin"],
    fallbacks: ["menlo", "consolas", "monospace"],
  },
];
