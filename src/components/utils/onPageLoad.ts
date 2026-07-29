type InitCallback = () => void;

/**
 * Run client init on first load and on Astro page navigations.
 *
 * A client-side navigation replaces the document body, so every init has to run
 * again against the new DOM — including when the visitor returns to a URL they
 * have already been on (home → home#work → home). The `astro:after-swap` reset
 * is what makes that work: keying the guard on the URL instead would silently
 * skip the re-init and leave scripted sections inert.
 */
export function onPageLoad(init: InitCallback): void {
  let hasRunForThisDocument = false;

  const run = () => {
    if (hasRunForThisDocument) return;
    hasRunForThisDocument = true;
    init();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  document.addEventListener("astro:after-swap", () => {
    hasRunForThisDocument = false;
  });

  document.addEventListener("astro:page-load", run);
}
