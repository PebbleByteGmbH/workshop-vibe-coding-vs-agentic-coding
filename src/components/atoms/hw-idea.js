class HwIdea extends HTMLElement {
  static get observedAttributes() {
    return ["text"];
  }

  connectedCallback() {
    this.setAttribute("aria-live", "polite");
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute("text");

    if (text !== null) {
      this.textContent = text;
    }
  }
}

customElements.define("hw-idea", HwIdea);
