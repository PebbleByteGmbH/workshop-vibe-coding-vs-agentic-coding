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
    width: printPdf ? 1280 : "100%",
    height: printPdf ? 720 : "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,
    transition: printPdf ? "none" : "slide"
  };

  if (printPdf) {
    revealOptions.view = "print";
  }

  Reveal.initialize(revealOptions).then(() => {
    if (printPdf) {
      preparePdfExport();
    }
  });
}

async function preparePdfExport() {
  installA4PageStyle();
  await waitForFonts();
  await waitForImages();
  await waitForAnimationFrames(2);
  preparePrintLayout();
  await waitForAnimationFrames(2);

  window.addEventListener("beforeprint", preparePrintLayout, { once: true });
  window.addEventListener("afterprint", finishPdfExport, { once: true });
  window.print();
}

function preparePrintLayout() {
  installA4PageStyle();
  installPrintGrid();
  fitPrintSlides();
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

function installPrintGrid() {
  const rootStyles = window.getComputedStyle(document.documentElement);
  const slideWidth = Number.parseFloat(rootStyles.getPropertyValue("--size-pdf-slide-width")) || 1280;
  const slideHeight = Number.parseFloat(rootStyles.getPropertyValue("--size-pdf-slide-height")) || 720;
  const gridSize = Number.parseFloat(rootStyles.getPropertyValue("--grid-size-pdf")) || 24;
  const pathData = createPrintGridPath(slideWidth, slideHeight, gridSize);

  document.querySelectorAll(".pdf-page section").forEach((section) => {
    if (section.querySelector(":scope > .hw-pdf-grid")) return;

    const grid = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    grid.classList.add("hw-pdf-grid");
    grid.setAttribute("viewBox", `0 0 ${slideWidth} ${slideHeight}`);
    grid.setAttribute("preserveAspectRatio", "none");
    grid.setAttribute("aria-hidden", "true");
    grid.setAttribute("focusable", "false");

    const lines = document.createElementNS("http://www.w3.org/2000/svg", "path");
    lines.classList.add("hw-pdf-grid-lines");
    lines.setAttribute("d", pathData);
    lines.setAttribute("vector-effect", "non-scaling-stroke");

    grid.append(lines);
    section.prepend(grid);
  });
}

function createPrintGridPath(width, height, spacing) {
  const commands = [];

  for (let x = 0; x <= width; x += spacing) {
    commands.push(`M ${x} 0 V ${height}`);
  }

  for (let y = 0; y <= height; y += spacing) {
    commands.push(`M 0 ${y} H ${width}`);
  }

  return commands.join(" ");
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

function fitPrintSlides() {
  const sections = document.querySelectorAll(".pdf-page section");

  sections.forEach((section) => {
    section.style.setProperty("--hw-pdf-fit-scale", "1");

    const slideBounds = section.getBoundingClientRect();
    const contentBounds = getVisibleContentBounds(section);

    if (!contentBounds) return;

    const contentWidth = Math.max(slideBounds.right, contentBounds.right)
      - Math.min(slideBounds.left, contentBounds.left);
    const contentHeight = Math.max(slideBounds.bottom, contentBounds.bottom)
      - Math.min(slideBounds.top, contentBounds.top);
    let fitScale = Math.min(
      1,
      slideBounds.width / contentWidth,
      slideBounds.height / contentHeight
    );

    if (fitScale < 1) {
      fitScale *= 0.98;
      section.style.setProperty("--hw-pdf-fit-scale", fitScale.toFixed(6));
    }
  });
}

function getVisibleContentBounds(section) {
  const elements = Array.from(section.querySelectorAll("*"));
  let bounds = null;

  elements.forEach((element) => {
    if (element.closest("aside.notes, .hw-pdf-grid")) return;

    const styles = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    if (styles.display === "none" || styles.visibility === "hidden" || rect.width === 0 || rect.height === 0) {
      return;
    }

    const scaleX = element.offsetWidth > 0 ? rect.width / element.offsetWidth : 1;
    const scaleY = element.offsetHeight > 0 ? rect.height / element.offsetHeight : 1;
    const right = rect.left + Math.max(rect.width, element.scrollWidth * scaleX);
    const bottom = rect.top + Math.max(rect.height, element.scrollHeight * scaleY);

    if (!bounds) {
      bounds = { left: rect.left, top: rect.top, right, bottom };
      return;
    }

    bounds.left = Math.min(bounds.left, rect.left);
    bounds.top = Math.min(bounds.top, rect.top);
    bounds.right = Math.max(bounds.right, right);
    bounds.bottom = Math.max(bounds.bottom, bottom);
  });

  return bounds;
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
