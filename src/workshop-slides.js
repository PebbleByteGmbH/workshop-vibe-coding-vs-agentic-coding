const locale = window.HwI18n.getLocale();
const copy = window.HwI18n.getCopy(locale);
const slidesPage = document.querySelector("hw-workshop-slides-page");
const pageName = slidesPage?.getAttribute("slide-set") === "day2" ? "slidesDay2" : "slides";
const isPrintPdf = isPrintPdfRequest();

window.HwI18n.applyDocument(pageName, locale);
applySlidesPageCopy(slidesPage, copy, locale);
document.documentElement.classList.toggle("hw-print-pdf", isPrintPdf);

if (isPrintPdf) {
  useLightTheme();
} else {
  initializeThemeSwitch();
  initializePdfExport();
}

initializeSlides(isPrintPdf);

function initializeThemeSwitch() {
  const page = document.body;
  const themeSwitch = document.querySelector("hw-theme-switch");

  if (!themeSwitch) return;

  themeSwitch.addEventListener("click", () => {
    const darkMode = page.classList.toggle("theme-dark");
    page.classList.toggle("theme-light", !darkMode);
    themeSwitch.setChecked(darkMode);
  });
}

function applySlidesPageCopy(element, pageCopy, currentLocale) {
  element.setAttribute("dark-label", pageCopy.theme.darkLabel);
  element.setAttribute("light-label", pageCopy.theme.lightLabel);
  element.setAttribute("use-dark-label", pageCopy.theme.useDarkLabel);
  element.setAttribute("use-light-label", pageCopy.theme.useLightLabel);
  element.setAttribute("locale", currentLocale);
  element.setAttribute("locale-aria-label", pageCopy.localeSwitch.ariaLabel);
  element.setAttribute("locale-en-label", pageCopy.localeSwitch.enLabel);
  element.setAttribute("locale-de-label", pageCopy.localeSwitch.deLabel);
  element.setAttribute("export-pdf-label", pageCopy.slidesPage.exportPdfLabel);
  element.setAttribute("cheat-sheet-label", pageCopy.slidesPage.cheatSheetLabel);
  const day = element.getAttribute("slide-set") === "day2" ? 2 : 1;
  element.setAttribute("cheat-sheet-href", window.HwI18n.localizeHref(`workshop-cheat-sheets.html?day=${day}`, currentLocale));
}

function initializePdfExport() {
  const exportButton = document.querySelector('[data-action="export-pdf"]');

  if (!exportButton) return;

  exportButton.addEventListener("click", () => {
    const printUrl = new URL(window.location.href);
    printUrl.searchParams.set("print-pdf", "");
    printUrl.hash = "";

    const printWindow = window.open(printUrl.href, "_blank");

    if (!printWindow) {
      window.location.assign(printUrl.href);
    }
  });
}

function useLightTheme() {
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");
}

function initializeSlides(printPdf) {
  if (!window.Reveal) return;

  const revealOptions = {
    controls: !printPdf,
    progress: !printPdf,
    hash: true,
    center: false,
    // Keep one scrollable slide at a time on phones, using our responsive layout.
    scrollActivationWidth: null,
    width: printPdf || !useResponsiveSlides() ? 1280 : "100%",
    height: printPdf || !useResponsiveSlides() ? 720 : "100%",
    margin: 0,
    minScale: printPdf || useResponsiveSlides() ? 1 : 0.2,
    maxScale: printPdf || useResponsiveSlides() ? 1 : 3,
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,
    transition: printPdf || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "slide"
  };

  if (printPdf) {
    revealOptions.view = "print";
  }

  Reveal.on("slidechanged", updateLocaleLinks);
  Reveal.on("fragmentshown", updateLocaleLinks);
  Reveal.on("fragmenthidden", updateLocaleLinks);
  if (printPdf) {
    // Print pages are created asynchronously after Reveal initializes.
    // Wait for them before adding the grid and opening the print dialog.
    Reveal.on("pdf-ready", preparePdfExport);
  }
  Reveal.initialize(revealOptions).then(() => {
    updateLocaleLinks();
  });
  if (!printPdf) {
    window.matchMedia("(max-width: 1000px)").addEventListener("change", () => {
      const responsive = useResponsiveSlides();
      Reveal.configure({ width: responsive ? "100%" : 1280, height: responsive ? "100%" : 720,
        minScale: responsive ? 1 : 0.2, maxScale: responsive ? 1 : 3 });
      Reveal.layout();
    });
  }
}

function useResponsiveSlides() {
  return window.matchMedia("(max-width: 1000px)").matches;
}

function updateLocaleLinks() {
  // Reveal updates the URL after its slide event. Use its current indices so a
  // language switch cannot pick up the previous slide's hash.
  const { h = 0, v = 0, f } = window.Reveal?.getIndices() || {};
  document.querySelectorAll("hw-locale-switch a[hreflang]").forEach((link) => {
    const url = new URL(window.HwI18n.localeUrl(link.hreflang), window.location.href);
    url.hash = Number.isFinite(f) && f >= 0 ? `/${h}/${v}/${f}` : `/${h}`;
    link.href = url.href;
  });
}

async function preparePdfExport() {
  installA4PageStyle();
  await waitForFonts();
  await waitForImages();
  await waitForAnimationFrames(2);
  installA4PageStyle();
  installPdfGrids();
  await waitForAnimationFrames(2);

  window.addEventListener("beforeprint", installA4PageStyle, { once: true });
  window.addEventListener("afterprint", finishPdfExport, { once: true });
  window.print();
}

function installPdfGrids() {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const createSvgElement = (name, attributes) => {
    const element = document.createElementNS(svgNamespace, name);
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    return element;
  };

  document.querySelectorAll(".pdf-page").forEach((page, index) => {
    page.querySelectorAll(":scope > .hw-deck-pdf-grid").forEach((grid) => grid.remove());
    const style = getComputedStyle(page);
    const spacing = style.getPropertyValue("--grid-size").trim();
    const lineWidth = style.getPropertyValue("--grid-line-size").trim();
    const patternId = `hw-deck-pdf-grid-pattern-${index}`;
    const grid = createSvgElement("svg", {
      class: "hw-deck-pdf-grid", "aria-hidden": "true", focusable: "false"
    });
    const definitions = createSvgElement("defs", {});
    const pattern = createSvgElement("pattern", {
      id: patternId, patternUnits: "userSpaceOnUse", width: spacing, height: spacing
    });
    pattern.append(
      createSvgElement("rect", { width: lineWidth, height: spacing }),
      createSvgElement("rect", { width: spacing, height: lineWidth })
    );
    definitions.append(pattern);
    grid.append(definitions, createSvgElement("rect", {
      width: "100%", height: "100%", fill: `url(#${patternId})`
    }));
    page.prepend(grid);
  });
}

function installA4PageStyle() {
  const styleId = "hw-pdf-a4-page-size";
  let pageStyle = document.getElementById(styleId);

  if (!pageStyle) {
    pageStyle = document.createElement("style");
    pageStyle.id = styleId;
    pageStyle.media = "print";
    pageStyle.textContent = "@page { size: 297mm 210mm; margin: 0; }";
  } else {
    pageStyle.remove();
  }

  document.head.append(pageStyle);
}

function waitForFonts() {
  return document.fonts?.ready || Promise.resolve();
}

function waitForImages() {
  const imagePromises = Array.from(document.images, (image) => {
    if (typeof image.decode === "function") {
      return image.decode().catch(() => undefined);
    }

    if (image.complete) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  });

  return Promise.all(imagePromises);
}

function waitForAnimationFrames(count) {
  return new Promise((resolve) => {
    function nextFrame(remaining) {
      if (remaining <= 0) {
        resolve();
        return;
      }

      window.requestAnimationFrame(() => nextFrame(remaining - 1));
    }

    nextFrame(count);
  });
}

function finishPdfExport() {
  window.setTimeout(() => {
    if (window.opener && !window.opener.closed) {
      window.close();
    }

    if (!window.closed) {
      const slidesUrl = new URL(window.location.href);
      slidesUrl.searchParams.delete("print-pdf");
      window.location.replace(slidesUrl.href);
    }
  }, 100);
}

function isPrintPdfRequest() {
  const params = new URLSearchParams(window.location.search);

  return params.has("print-pdf") || /[?&]print-pdf(?:[=&]|$)/.test(window.location.hash);
}
