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
      "use-light-label"
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
    const themeSwitch = document.createElement("hw-theme-switch");
    const hero = document.createElement("hw-workshop-hero");
    const brand = createPageBrand();

    copyAttributes(this, themeSwitch, ["dark-label", "light-label", "use-dark-label", "use-light-label"]);
    copyAttributes(this, hero, ["eyebrow", "title", "title-level", "button-label", "button-id", "idea", "link-href", "link-label"]);

    surface.append(
      themeSwitch,
      hero,
      brand
    );

    this.replaceChildren(surface);
  }
}

function createPageBrand() {
  const brand = document.createElement("a");
  brand.className = "page-brand";
  brand.href = "https://pebblebyte.com/";
  brand.target = "_blank";
  brand.rel = "noopener noreferrer";
  brand.setAttribute("aria-label", "PebbleByte website");

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
    if (source.hasAttribute(name)) {
      target.setAttribute(name, source.getAttribute(name));
    }
  }
}

customElements.define("hw-workshop-template", HwWorkshopTemplate);
