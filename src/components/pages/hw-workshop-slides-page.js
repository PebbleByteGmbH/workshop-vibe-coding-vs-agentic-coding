class HwWorkshopSlidesPage extends HTMLElement {
  static get observedAttributes() {
    return [
      "dark-label",
      "light-label",
      "use-dark-label",
      "use-light-label",
      "locale",
      "locale-aria-label",
      "locale-en-label",
      "locale-de-label",
      "export-pdf-label",
      "cheat-sheet-label",
      "cheat-sheet-href",
      "slide-count",
      "slide-set"
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const surface = document.createElement("hw-surface");
    const controls = document.createElement("hw-settings-menu");
    const themeSwitch = document.createElement("hw-theme-switch");
    const localeSwitch = document.createElement("hw-locale-switch");
    const exportPdfButton = document.createElement("hw-button");
    const deck = document.createElement("hw-workshop-slides-deck");

    controls.className = "page-controls";
    controls.setAttribute("label", this.getAttribute("locale") === "de" ? "Einstellungen" : "Settings");
    copyAttributes(this, themeSwitch, ["dark-label", "light-label", "use-dark-label", "use-light-label"]);
    copyAttributes(this, localeSwitch, [["locale", "locale"], ["locale-aria-label", "aria-label"], ["locale-en-label", "en-label"], ["locale-de-label", "de-label"]]);
    copyAttributes(this, exportPdfButton, [["export-pdf-label", "label"]]);
    copyAttributes(this, deck, ["locale", "slide-count", "slide-set"]);
    exportPdfButton.setAttribute("variant", "compact");
    exportPdfButton.setAttribute("data-action", "export-pdf");
    const cheatSheetLink = document.createElement("a");
    cheatSheetLink.className = "hw-sheet-menu-link";
    cheatSheetLink.textContent = this.getAttribute("cheat-sheet-label") || "Cheat Sheets";
    cheatSheetLink.href = this.getAttribute("cheat-sheet-href") || "workshop-cheat-sheets.html";
    controls.append(themeSwitch, localeSwitch, exportPdfButton, cheatSheetLink);

    surface.append(
      controls,
      deck
    );

    this.replaceChildren(surface);
  }
}

function copyAttributes(source, target, names) {
  for (const name of names) {
    const sourceName = Array.isArray(name) ? name[0] : name;
    const targetName = Array.isArray(name) ? name[1] : name;

    if (source.hasAttribute(sourceName)) {
      target.setAttribute(targetName, source.getAttribute(sourceName));
    }
  }
}

customElements.define("hw-workshop-slides-page", HwWorkshopSlidesPage);
