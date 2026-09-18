class HwSettingsMenu extends HTMLElement {
  connectedCallback() {
    if (this.trigger) return;

    const panel = document.createElement("div");
    panel.className = "settings-panel";
    panel.append(...this.childNodes);
    panel.id = `settings-panel-${++HwSettingsMenu.nextId}`;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "settings-trigger";
    trigger.setAttribute("aria-label", this.getAttribute("label") || "Settings");
    trigger.setAttribute("aria-controls", panel.id);
    trigger.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9.5 3-.5 2a8 8 0 0 0-2 1.2l-2-.6-2 3.4L4.5 10a8 8 0 0 0 0 2.4L3 14l2 3.4 2-.6A8 8 0 0 0 9 18l.5 2h4l.5-2a8 8 0 0 0 2-1.2l2 .6 2-3.4-1.5-1.6a8 8 0 0 0 0-2.4L20 9l-2-3.4-2 .6A8 8 0 0 0 14 5l-.5-2Z"/><circle cx="11.5" cy="11.5" r="3"/></svg>';
    this.trigger = trigger;
    this.panel = panel;
    this.append(trigger, panel);
    this.setOpen(false);

    trigger.addEventListener("click", () => this.setOpen(panel.hidden));
    this.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") this.setOpen(true);
    });
    this.addEventListener("pointerleave", () => {
      if (!this.contains(document.activeElement)) this.setOpen(false);
    });
    this.addEventListener("focusout", () => queueMicrotask(() => {
      if (!this.contains(document.activeElement)) this.setOpen(false);
    }));
    this.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.setOpen(false);
        trigger.focus();
      }
      if (event.key === "ArrowDown" && event.target === trigger) {
        event.preventDefault();
        event.stopPropagation();
        this.setOpen(true);
        panel.querySelector("button, a")?.focus();
      }
    });
    this.outsideClick = (event) => {
      if (!this.contains(event.target)) this.setOpen(false);
    };
    document.addEventListener("pointerdown", this.outsideClick);
  }

  disconnectedCallback() {
    document.removeEventListener("pointerdown", this.outsideClick);
  }

  setOpen(open) {
    this.panel.hidden = !open;
    this.trigger.setAttribute("aria-expanded", String(open));
  }
}

HwSettingsMenu.nextId = 0;
customElements.define("hw-settings-menu", HwSettingsMenu);
