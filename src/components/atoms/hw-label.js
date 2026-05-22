class HwLabel extends HTMLElement {
  static get observedAttributes() {
    return ["text"];
  }

  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "text");
    }

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

customElements.define("hw-label", HwLabel);
