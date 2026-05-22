class HwButton extends HTMLElement {
  static get observedAttributes() {
    return ["label"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || this.textContent.trim() || "Button";

    this.replaceChildren();

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    this.append(button);
  }

  pop() {
    const button = this.querySelector("button");
    button.classList.remove("pop");
    window.requestAnimationFrame(() => {
      button.classList.add("pop");
    });
  }
}

customElements.define("hw-button", HwButton);
