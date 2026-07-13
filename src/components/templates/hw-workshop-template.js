class HwWorkshopTemplate extends HTMLElement {
  static get observedAttributes() {
    return [
      "eyebrow",
      "title",
      "title-level",
      "button-label",
      "button-id",
      "idea",
      "link-href",
      "link-label",
      "dark-label",
      "light-label",
      "use-dark-label",
      "use-light-label",
      "locale",
      "locale-aria-label",
      "locale-en-label",
      "locale-de-label",
      "brand-aria-label"
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
    const controls = document.createElement("div");
    const themeSwitch = document.createElement("hw-theme-switch");
    const localeSwitch = document.createElement("hw-locale-switch");
    const hero = document.createElement("hw-workshop-hero");
    const brand = createPageBrand(this.getAttribute("brand-aria-label"));

    controls.className = "page-controls";

    copyAttributes(this, themeSwitch, ["dark-label", "light-label", "use-dark-label", "use-light-label"]);
    copyAttributes(this, localeSwitch, [["locale", "locale"], ["locale-aria-label", "aria-label"], ["locale-en-label", "en-label"], ["locale-de-label", "de-label"]]);
    copyAttributes(this, hero, ["eyebrow", "title", "title-level", "button-label", "button-id", "idea", "link-href", "link-label"]);
    controls.append(themeSwitch, localeSwitch);

    surface.append(
      controls,
      hero,
      brand
    );

    this.replaceChildren(surface);
  }
}

function createPageBrand(ariaLabel) {
  const brand = document.createElement("a");
  brand.className = "page-brand";
  brand.href = "https://pebblebyte.com/";
  brand.target = "_blank";
  brand.rel = "noopener noreferrer";
  brand.setAttribute("aria-label", ariaLabel || "PebbleByte website");

  const logo = document.createElement("img");
  logo.src = "assets/pebblebyte-logo-yellow-square.png";
  logo.alt = "";
  logo.setAttribute("aria-hidden", "true");
  logo.draggable = false;

  const name = document.createElement("span");
  name.textContent = "PebbleByte";

  brand.append(logo, name);
  return brand;
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

customElements.define("hw-workshop-template", HwWorkshopTemplate);
