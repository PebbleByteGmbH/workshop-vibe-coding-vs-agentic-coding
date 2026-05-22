class HwTitle extends HTMLElement {
  static get observedAttributes() {
    return ["text", "level"];
  }

  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "heading");
    }

    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.setAttribute("aria-level", this.getAttribute("level") || "1");

    const text = this.getAttribute("text");

    if (text !== null) {
      this.textContent = text;
    }
  }
}

customElements.define("hw-title", HwTitle);
