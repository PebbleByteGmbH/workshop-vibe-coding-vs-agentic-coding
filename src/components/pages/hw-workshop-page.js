class HwWorkshopPage extends HTMLElement {
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
    const template = document.createElement("hw-workshop-template");

    for (const name of HwWorkshopPage.observedAttributes) {
      if (this.hasAttribute(name)) {
        template.setAttribute(name, this.getAttribute(name));
      }
    }

    this.replaceChildren(template);
  }
}

customElements.define("hw-workshop-page", HwWorkshopPage);
