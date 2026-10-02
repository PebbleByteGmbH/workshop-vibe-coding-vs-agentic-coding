class HwWorkshopHero extends HTMLElement {
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
      "secondary-link-href",
      "secondary-link-label",
      "tertiary-link-href",
      "tertiary-link-label",
      "cheat-sheet-href",
      "cheat-sheet-label"
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const card = document.createElement("hw-hello-card");

    for (const name of HwWorkshopHero.observedAttributes) {
      if (this.hasAttribute(name)) {
        card.setAttribute(name, this.getAttribute(name));
      }
    }

    this.replaceChildren(card);
  }
}

customElements.define("hw-workshop-hero", HwWorkshopHero);
