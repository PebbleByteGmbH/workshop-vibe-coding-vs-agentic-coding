class HwLocaleSwitch extends HTMLElement {
  static get observedAttributes() {
    return ["locale", "aria-label", "en-label", "de-label"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const group = document.createElement("nav");
    group.className = "locale-switch";
    group.setAttribute("aria-label", this.ariaLabel);

    group.append(
      this.createLocaleLink("en", this.enLabel),
      this.createLocaleLink("de", this.deLabel)
    );

    this.replaceChildren(group);
  }

  createLocaleLink(locale, label) {
    const link = document.createElement("a");
    const active = this.locale === locale;

    link.href = window.HwI18n ? window.HwI18n.localeUrl(locale) : `?lang=${locale}`;
    link.hreflang = locale;
    link.lang = locale;
    link.textContent = label;

    if (active) {
      link.setAttribute("aria-current", "true");
    }

    return link;
  }

  get locale() {
    const locale = this.getAttribute("locale");
    return window.HwI18n ? window.HwI18n.normalizeLocale(locale) : locale || "en";
  }

  get ariaLabel() {
    return this.getAttribute("aria-label") || "Change language";
  }

  get enLabel() {
    return this.getAttribute("en-label") || "EN";
  }

  get deLabel() {
    return this.getAttribute("de-label") || "DE";
  }
}

customElements.define("hw-locale-switch", HwLocaleSwitch);
