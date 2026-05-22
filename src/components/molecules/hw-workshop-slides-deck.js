const seminarSlides = [
  {
    title: "Vibe Coding vs.\nAgentic Coding",
    subtitle: "How AI agents turn prompts into real work",
    byline: "by Lukas Aichbauer",
    bylineHref: "https://www.linkedin.com/in/aichbauer",
    image: {
      src: "assets/lukas-aichbauer.webp",
      alt: "Lukas Aichbauer"
    },
    cover: true,
    blocks: [],
    notes: "Keep this simple. The goal is to reduce fear and curiosity gap."
  },
  {
    title: "From Answers to Actions",
    subtitle: "The Core Shift",
    blocks: [
      {
        type: "callout",
        label: "Today's promise",
        variant: "inverted",
        wide: true,
        text: "You do not need to become a programmer to understand, use, and safely guide AI agents."
      },
      {
        type: "callout",
        label: "Key idea",
        wide: true,
        text: "AI is moving from answering questions to doing structured work with tools."
      }
    ]
  },
  {
    title: "Three starter ideas",
    subtitle: "Role + AI use case",
    blocks: [
      {
        type: "conceptCards",
        items: [
          {
            title: "Marketing people",
            icon: "message",
            accent: "#5b7cfa",
            description: "Competitor tracking is manual and easy to miss.",
            metaphor: "Competitor landing-page watcher: save competitor URLs, detect copy, pricing, and CTA changes, then show a scheduled scrape diff view."
          },
          {
            title: "Designers",
            icon: "pencil",
            accent: "#16b85f",
            description: "Checking desktop, tablet, and mobile layouts takes time.",
            metaphor: "Responsive screenshot reviewer: enter a URL, generate breakpoint screenshots, and flag overflow, broken layouts, tiny text, or clipped buttons."
          },
          {
            title: "Tax advisors",
            icon: "clipboard-list",
            accent: "#f97316",
            description: "Reviewing bookkeeping exports is slow and repetitive.",
            metaphor: "Anomaly checker: import a ledger and use deterministic rules to flag duplicates, negative balances, and uncategorized items."
          }
        ]
      }
    ]
  },
  {
    title: "What We'll Cover",
    subtitle: "Agenda",
    blocks: [
      {
        type: "bullets",
        reveal: false,
        items: [
          "From chatbots to agents",
          "Vibe Coding vs. Agentic Coding",
          "Agent workflow and examples",
          "Codex setup and building blocks",
          "Security, permissions, and live demo"
        ]
      }
    ]
  },
  {
    title: "Let's map the room",
    subtitle: "Who Is in the Room?",
    blocks: [
      {
        type: "text",
        text: "Your role + one repeated task AI could help draft"
      },
      {
        type: "link",
        href: "https://webwhiteboard.com/",
        text: "https://webwhiteboard.com/"
      }
    ],
    notes: "Use this to make the session practical. Do not start with technology. Start with their jobs."
  },
  {
    title: "LLM",
    blocks: [
      {
        type: "emojiOnly",
        items: ["🧠"]
      }
    ]
  },
  {
    title: "Chatbot",
    blocks: [
      {
        type: "emojiOnly",
        items: ["👀 👂 👄"]
      }
    ]
  },
  {
    title: "Agent",
    blocks: [
      {
        type: "emojiOnly",
        items: ["🤲 💪 🦵"]
      }
    ]
  },
  {
    title: "LLM / Chatbot / Agent",
    subtitle: "The Shift: From Brain to Body",
    blocks: [
      {
        type: "comparison",
        revealItems: true,
        items: [
          {
            label: "LLM (Large Language Model)",
            text: "Brain"
          },
          {
            label: "Chatbot",
            text: "Eyes, Ears, Mouth"
          },
          {
            label: "Agent",
            text: "Arms, Hands and Feet"
          }
        ]
      },
      {
        type: "callout",
        label: "Key idea",
        variant: "inverted",
        wide: true,
        text: "The shift is not smarter text. The shift is AI connected to action."
      }
    ]
  },
  {
    title: "Vibe Coding / Agentic Coding",
    subtitle: "From Recipe to Chef",
    blocks: [
      {
        type: "comparison",
        cardStyle: "inverted",
        revealItems: true,
        items: [
          {
            label: "Vibe Coding",
            text: "Cooking by Vibe\n\"Something pasta-ish\""
          },
          {
            label: "Agentic Coding",
            text: "Chef in the Kitchen\nPlans, cooks, tastes, improves"
          }
        ]
      },
      {
        type: "callout",
        label: "Key idea",
        wide: true,
        text: "The shift is from hoping the vibe works to guiding execution with context."
      }
    ]
  },
  {
    title: "Input / Agent / Result",
    subtitle: "How an AI Agent Works",
    layout: "agent-flow",
    blocks: [
      {
        type: "agentFlow",
        intro: "An AI agent takes input, reasons, uses tools, and produces useful results.",
        columns: [
          {
            title: "Input",
            layout: "list",
            size: "compact",
            items: [
              { icon: "user", label: "User request", color: "#16b85f" },
              { icon: "world", label: "Web information", color: "#3776c8" },
              { icon: "folder", label: "Local files", color: "var(--color-brand-yellow)" },
              { icon: "apps", label: "Apps / tools", color: "#7e57c2" }
            ]
          },
          {
            title: "AI Agent",
            layout: "grid",
            items: [
              { icon: "dots", label: "Talks to\nan LLM", color: "#7e57c2" },
              { icon: "search", label: "Searches\nthe web", color: "#3776c8" },
              { icon: "folder", label: "Reads local\nfiles", color: "var(--color-brand-yellow)" },
              { icon: "stack-2", label: "Adds\ncontext", color: "#149aa3" },
              { icon: "tool", label: "Uses\ntools", color: "#7e57c2" },
              { icon: "clipboard-list", label: "Makes\na plan", color: "#f97316" },
              { icon: "player-play", label: "Takes\naction", color: "#3776c8" },
              { icon: "check", label: "Checks\nresults", color: "#2f9e44" }
            ]
          },
          {
            title: "Result",
            layout: "list",
            size: "compact",
            items: [
              { icon: "list", label: "Plan", color: "#7e57c2" },
              { icon: "file", label: "Edited files", color: "var(--color-brand-yellow)" },
              { icon: "mail", label: "Email", color: "#3776c8" },
              { icon: "database", label: "Update data", color: "#2f9e44" }
            ]
          }
        ],
        keyIdea: "The shift is not just smarter text. The shift is AI connected to action."
      }
    ]
  },
  {
    title: "What AI agents exist?",
    subtitle: "A Few Examples",
    blocks: [
      {
        type: "agentLogos",
        items: [
          {
            name: "Claude Code",
            logo: "assets/agent-logos/claude-code.svg",
            alt: "Anthropic logo for Claude Code",
            href: "https://claude.com/product/claude-code",
            accent: "#d97757"
          },
          {
            name: "Codex",
            logo: "assets/agent-logos/codex.svg",
            alt: "OpenAI logo for Codex",
            href: "https://openai.com/codex/",
            accent: "#10a37f"
          },
          {
            name: "Mistral Vibe Code",
            logo: "assets/agent-logos/mistral-vibe-code.svg",
            alt: "Mistral logo for Mistral Vibe Code",
            href: "https://mistral.ai/products/vibe",
            accent: "#ff8205"
          },
          {
            name: "Zapier Agents",
            logo: "assets/agent-logos/zapier-agents.svg",
            alt: "Zapier logo for Zapier Agents",
            href: "https://zapier.com/agents",
            accent: "#ff4a00"
          },
          {
            name: "Qwen Code",
            logo: "assets/agent-logos/qwen-code.svg",
            alt: "Qwen logo for Qwen Code",
            href: "https://github.com/QwenLM/qwen-code",
            accent: "#5b7cfa"
          },
          {
            name: "OpenClaw",
            logo: "assets/agent-logos/openclaw.svg",
            alt: "OpenClaw logo",
            href: "https://openclaw.ai/",
            logoBackground: "#ffffff",
            accent: "#e81b25"
          }
        ]
      }
    ]
  },
  {
    title: "Beginner setup: start small and safe",
    subtitle: "Installing Codex Safely",
    blocks: [
      {
        type: "ordered",
        label: "Recommended for non-programmers",
        variant: "setup",
        revealItems: true,
        items: [
          "Use Codex app first",
          "Create a test folder",
          "Open only that folder",
          "Start with simple tasks",
          "Approve changes manually"
        ]
      },
      {
        type: "link",
        href: "https://openai.com/codex/",
        text: "Download Codex"
      }
    ]
  },
  {
    title: "Project / Skill / Tool",
    subtitle: "The Three Building Blocks",
    blocks: [
      {
        type: "conceptCards",
        items: [
          {
            title: "Project",
            icon: "folder",
            accent: "#7cf4c4",
            description: "A focused workspace with files, notes, assets, and outputs for an agent.",
            metaphor: "Office / Desk for the agent"
          },
          {
            title: "Skill",
            icon: "file",
            accent: "var(--color-brand-yellow)",
            description: "One or more text files that explain a reusable way to work.",
            metaphor: "Library / Book for the agent"
          },
          {
            title: "Tool",
            icon: "apps",
            accent: "#5b7cfa",
            description: "An application the agent can use to do something.",
            metaphor: "Apps / Utilities for the agent"
          }
        ]
      },
      {
        type: "callout",
        label: "Plain version",
        variant: "inverted",
        wide: true,
        text: "Projects hold the work. Skills explain how to work. Tools let the agent act."
      }
    ]
  },
  {
    title: "Project = workspace",
    subtitle: "A Project Is Just a Folder",
    blocks: [
      {
        type: "comparison",
        revealItems: true,
        items: [
          {
            label: "Messy structure",
            tone: "red",
            text: "Desktop/\n  final_final_v7.pdf\n  random_notes.docx\n  screenshot copy 3.png\n  stuff/"
          },
          {
            label: "Useful structure",
            tone: "green",
            text: "Campaign-Q3/\n  brief/\n  source-material/\n  drafts/\n  assets/\n  reports/\n  outputs/"
          }
        ]
      },
      {
        type: "callout",
        label: "Rule",
        variant: "inverted",
        wide: true,
        text: "A project is the agent's office. Better folders create better AI results."
      }
    ]
  },
  {
    title: "Project Security",
    subtitle: "Keep the Workspace Small",
    blocks: [
      {
        type: "security",
        revealItems: true,
        columns: [
          {
            label: "Do",
            tone: "green",
            items: [
              "Use a dedicated test folder",
              "Keep source files organized",
              "Review generated outputs",
              "Share only relevant context"
            ]
          },
          {
            label: "Avoid",
            tone: "red",
            items: [
              "Full drive access",
              "Sensitive client data",
              "Passwords or API keys",
              "Production folders first"
            ]
          }
        ]
      },
      {
        type: "callout",
        label: "Safety rule",
        variant: "inverted",
        wide: true,
        text: "A project is the agent's office. Do not give it the whole building on day one."
      }
    ]
  },
  {
    title: "Skill = reusable instructions",
    subtitle: "A Skill Is One or More Text Files",
    blocks: [
      {
        type: "comparison",
        revealItems: true,
        items: [
          {
            label: "Skill folder",
            text: "campaign-writer/\n  SKILL.md\n  references.md\n  examples/\n    email-brief.md"
          },
          {
            label: "SKILL.md",
            text: "---\nname: campaign-writer\ndescription: Use when drafting campaign copy.\n---\n\n# Campaign Writer\n\n## Workflow\n1. Read the brief\n2. Draft variants\n3. Check tone\n\nSee references.md for long examples."
          }
        ]
      },
      {
        type: "callout",
        label: "Rule",
        variant: "inverted",
        wide: true,
        text: "Keep SKILL.md short enough to guide the agent. Move long examples, rules, and background into references.md."
      }
    ]
  },
  {
    title: "Skill Security",
    subtitle: "Instructions Shape Behavior",
    blocks: [
      {
        type: "security",
        revealItems: true,
        columns: [
          {
            label: "Do",
            tone: "green",
            items: [
              "Keep instructions explicit",
              "Define review steps",
              "Separate examples from rules",
              "Version important skills"
            ]
          },
          {
            label: "Watch for",
            tone: "red",
            items: [
              "Over-broad instructions",
              "Hidden assumptions",
              "Conflicting rules",
              "Outdated examples"
            ]
          }
        ]
      },
      {
        type: "callout",
        label: "Safety rule",
        variant: "inverted",
        wide: true,
        text: "A skill is reusable power. Review it like a checklist the agent will follow again."
      }
    ]
  },
  {
    title: "Tool = app access",
    subtitle: "Tools Are Applications the Agent Can Use",
    blocks: [
      {
        type: "table",
        revealRows: true,
        headers: ["Tool", "What it enables"],
        rows: [
          ["Read files", "Inspect folders, notes, documents, and source material"],
          ["Write files", "Create drafts, reports, pages, and structured outputs"],
          ["Spreadsheet access", "Analyze data and create reports"],
          ["Browser", "Research and compare information"],
          ["Design tools", "Support Figma/design workflows"],
          ["Presentation tools", "Create slides and summaries"],
          ["Code tools", "Build apps, scripts, websites"],
          ["Email/CRM tools", "Draft or update business workflows"]
        ]
      },
      {
        type: "callout",
        label: "Key message",
        variant: "inverted",
        wide: true,
        text: "Tools create power. Permissions create safety."
      }
    ]
  },
  {
    title: "Tool Security",
    subtitle: "Tools Need Permission Boundaries",
    blocks: [
      {
        type: "security",
        revealItems: true,
        columns: [
          {
            label: "Low risk",
            tone: "yellow",
            items: [
              "Read files",
              "Create drafts",
              "Summarize content",
              "Suggest changes"
            ]
          },
          {
            label: "Needs approval",
            tone: "orange",
            items: [
              "Send emails",
              "Delete files",
              "Publish content",
              "Change live data"
            ]
          },
          {
            label: "Start with",
            tone: "green",
            items: [
              "Manual approvals",
              "Limited accounts",
              "Test environments",
              "Clear audit trail"
            ]
          }
        ]
      },
      {
        type: "callout",
        label: "Safety rule",
        variant: "inverted",
        wide: true,
        text: "Tools let the agent act. Permissions decide how far that action can go."
      }
    ]
  },
  {
    title: "The Agent Vocabulary",
    subtitle: "Core Concepts",
    blocks: [
      {
        type: "table",
        revealRows: true,
        headers: ["Concept", "Simple explanation", "Analogy"],
        rows: [
          [{ icon: "brain", text: "LLM" }, "The thinking engine", "Brain"],
          [{ icon: "message", text: "Chatbot" }, "The conversation layer", "Eyes / ears / mouth"],
          [{ icon: "user", text: "Agent" }, "The worker", "Junior teammate"],
          [{ icon: "folder", text: "Project" }, "The workspace", "Office / desk"],
          [{ icon: "book", text: "Skill" }, "A repeatable workflow", "Library / book"],
          [{ icon: "apps", text: "Tool" }, "What the worker can use", "Apps"],
          [{ icon: "lock", text: "Permission" }, "Safety boundary", "Key / locks"]
        ]
      }
    ]
  },
  {
    title: "Agentic AI is useful beyond software teams",
    subtitle: "What Is Realistically Doable?",
    blocks: [
      {
        type: "conceptCards",
        items: [
          {
            title: "Marketing",
            icon: "message",
            accent: "#5b7cfa",
            description: "A/B test learnings get forgotten.",
            metaphor: "Experiment memory tool: log hypothesis, variant, metric, result, and screenshot to build a searchable library of what worked and failed."
          },
          {
            title: "Design",
            icon: "pencil",
            accent: "#16b85f",
            description: "Designs differ once developers build them.",
            metaphor: "Design implementation QA: compare Figma and live screenshots for spacing, typography, colors, alignment, and component differences, then generate a fix list."
          },
          {
            title: "Sales",
            icon: "user",
            accent: "#f97316",
            description: "Lead research slows outreach.",
            metaphor: "Lead research brief: enter a company domain to generate a summary, ICP fit, recent signals, likely pain points, and outreach angle."
          },
          {
            title: "Product",
            icon: "clipboard-list",
            accent: "var(--color-brand-yellow)",
            description: "Feature requests lack evidence.",
            metaphor: "Request evidence collector: upload feedback snippets to attach supporting quotes, customer names, revenue impact, frequency, and confidence score."
          },
          {
            title: "Operations",
            icon: "tool",
            accent: "#7cf4c4",
            description: "Incident learnings get lost.",
            metaphor: "Postmortem action extractor: paste incident notes to generate root cause, timeline, prevention tasks, owner, deadline, and follow-up reminders."
          },
          {
            title: "Software",
            icon: "code",
            accent: "#9ff2e0",
            description: "Manual workflows are hard to softwareize.",
            metaphor: "Workflow-to-app converter: describe a repeated process to generate forms, approval steps, status tracking, notifications, and a dashboard."
          }
        ]
      }
    ]
  },
  {
    title: "Security for non-coders and coders",
    subtitle: "What Matters Most",
    blocks: [
      {
        type: "security",
        revealItems: true,
        columns: [
          {
            label: "Treat agents like capable junior teammates",
            tone: "green",
            items: [
              "They can read, write, search, and act quickly",
              "They still need clear scope, review, and approval"
            ]
          },
          {
            label: "Keep private information private",
            tone: "red",
            items: [
              "If you would not publish it, do not paste it into an agent",
              "Protect customer data, HR, legal, finance, passwords, and keys"
            ]
          }
        ]
      },
      {
        type: "callout",
        label: "Safety rule",
        variant: "inverted",
        wide: true,
        text: "Start narrow: small folder, limited tools, human approval."
      }
    ]
  },
  {
    title: "Live Demo",
    layout: "live-demo",
    blocks: []
  }
];

class HwWorkshopSlidesDeck extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const reveal = document.createElement("div");
    reveal.className = "reveal";

    const slides = document.createElement("div");
    slides.className = "slides";

    slides.append(...seminarSlides.map(createSlide));
    reveal.append(slides);
    reveal.append(createSlideBrand());
    this.replaceChildren(reveal);
  }
}

function createSlideBrand() {
  const brand = document.createElement("a");
  brand.className = "slide-brand";
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

function createSlide(slide) {
  const section = document.createElement("section");
  const sectionClasses = ["seminar-slide"];

  if (slide.cover) {
    sectionClasses.push("seminar-slide-cover");
  }

  if (slide.layout) {
    sectionClasses.push(`seminar-slide-${slide.layout}`);
  }

  section.className = sectionClasses.join(" ");

  const heading = document.createElement(slide.cover ? "h1" : "h2");
  appendTextWithBreaks(heading, slide.title);

  const content = document.createElement("div");
  content.className = "slide-content";
  content.append(...slide.blocks.map(createBlock));

  if (slide.subtitle) {
    const eyebrow = document.createElement("p");
    eyebrow.className = "slide-eyebrow";
    eyebrow.textContent = slide.subtitle;
    section.append(eyebrow);
  }

  if (slide.title) {
    section.append(heading);
  }

  if (slide.byline || slide.image) {
    section.append(createCoverMeta(slide));
  }

  section.append(content);

  if (slide.notes) {
    const notes = document.createElement("aside");
    notes.className = "notes";
    notes.textContent = slide.notes;
    section.append(notes);
  }

  return section;
}

function createCoverMeta(slide) {
  const meta = document.createElement(slide.bylineHref ? "a" : "div");
  meta.className = "slide-cover-meta";
  if (slide.bylineHref) {
    meta.href = slide.bylineHref;
    meta.target = "_blank";
    meta.rel = "noopener noreferrer";
    meta.setAttribute("aria-label", `${slide.byline} on LinkedIn`);
  }

  if (slide.image) {
    const image = document.createElement("img");
    image.src = slide.image.src;
    image.alt = slide.image.alt || "";
    image.loading = "eager";
    image.decoding = "async";
    image.draggable = false;
    meta.append(image);
  }

  if (slide.byline) {
    const byline = document.createElement("p");
    byline.textContent = slide.byline;
    meta.append(byline);
  }

  return meta;
}

function createBlock(block) {
  const builders = {
    agentFlow: createAgentFlow,
    agentLogos: createAgentLogos,
    bullets: createBullets,
    callout: createCallout,
    code: createCode,
    columns: createColumns,
    comparison: createComparison,
    conceptCards: createConceptCards,
    emojiOnly: createEmojiOnly,
    link: createLink,
    ordered: createOrderedList,
    prompt: createPrompt,
    security: createSecurityColumns,
    table: createTable,
    text: createText
  };

  return builders[block.type](block);
}

function createEmojiOnly(block) {
  const list = document.createElement("div");
  list.className = "slide-emoji-row";

  list.append(...block.items.map((item) => {
    const emoji = document.createElement("div");
    emoji.className = "slide-emoji-item fragment";

    const symbols = document.createElement("span");
    symbols.textContent = item;

    emoji.append(symbols);
    return emoji;
  }));

  return list;
}

function createAgentLogos(block) {
  const grid = document.createElement("div");
  grid.className = "agent-logo-grid";

  grid.append(...block.items.map((item) => {
    const card = document.createElement(item.href ? "a" : "article");
    card.className = "agent-logo-card fragment";
    card.style.setProperty("--agent-logo-accent", item.accent);
    if (item.href) {
      card.href = item.href;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    if (item.logoBackground) {
      card.style.setProperty("--agent-logo-bg", item.logoBackground);
    }

    const mark = document.createElement("div");
    mark.className = "agent-logo-mark";

    if (item.logo) {
      const logo = document.createElement("img");
      logo.src = item.logo;
      logo.alt = item.alt || `${item.name} logo`;
      logo.loading = "lazy";
      mark.append(logo);
    } else {
      mark.textContent = item.mark;
    }

    const name = document.createElement("strong");
    name.textContent = item.name;

    card.append(mark, name);
    return card;
  }));

  return grid;
}

function createConceptCards(block) {
  const grid = document.createElement("div");
  grid.className = "concept-card-grid";

  grid.append(...block.items.map((item) => {
    const card = document.createElement("article");
    card.className = "concept-card fragment";
    card.style.setProperty("--concept-card-accent", item.accent);

    const icon = document.createElement("img");
    icon.className = "concept-card-icon";
    icon.src = `vendor/tabler-icons/outline/${item.icon}.svg`;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    const title = document.createElement("strong");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "concept-card-description";
    description.textContent = item.description;

    const metaphor = document.createElement("p");
    metaphor.className = "concept-card-metaphor";
    metaphor.textContent = item.metaphor;

    card.append(icon, title, description, metaphor);
    return card;
  }));

  return grid;
}

function createAgentFlow(block) {
  const flow = document.createElement("div");
  flow.className = "agent-flow fragment";

  const intro = document.createElement("p");
  intro.className = "agent-flow-intro";
  intro.textContent = block.intro;

  const columns = document.createElement("div");
  columns.className = "agent-flow-columns";

  block.columns.forEach((column, index) => {
    columns.append(createAgentFlowColumn(column));

    if (index < block.columns.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "agent-flow-arrow fragment";
      arrow.setAttribute("aria-hidden", "true");
      columns.append(arrow);
    }
  });

  const keyIdea = document.createElement("div");
  keyIdea.className = "slide-callout slide-callout-wide slide-callout-inverted agent-flow-key fragment";

  const label = document.createElement("strong");
  label.textContent = "Key idea";

  const text = document.createElement("p");
  text.textContent = block.keyIdea;

  keyIdea.append(label, text);
  flow.append(intro, columns, keyIdea);
  return flow;
}

function createAgentFlowColumn(column) {
  const panel = document.createElement("div");
  const panelClasses = ["agent-flow-panel", `agent-flow-panel-${column.layout}`, "fragment"];

  if (column.size) {
    panelClasses.push(`agent-flow-panel-${column.size}`);
  }

  if (column.variant === "inverted") {
    panelClasses.push("agent-flow-panel-inverted");
  }

  panel.className = panelClasses.join(" ");

  const title = document.createElement("h3");
  title.textContent = column.title;

  const items = document.createElement("div");
  items.className = "agent-flow-items";
  items.append(...column.items.map((item) => createAgentFlowItem(item, column.layout)));

  panel.append(title, items);
  return panel;
}

function createAgentFlowItem(item, layout) {
  const row = document.createElement("div");
  row.className = `agent-flow-item agent-flow-item-${layout}`;
  row.style.setProperty("--agent-flow-icon-color", item.color);

  const icon = createIcon(item.icon);
  const label = document.createElement("span");
  appendTextWithBreaks(label, item.label);

  row.append(icon, label);
  return row;
}

function createIcon(name) {
  const icon = document.createElement("img");
  icon.className = "agent-flow-icon";
  icon.src = `vendor/tabler-icons/outline/${name}.svg`;
  icon.alt = "";
  icon.loading = "eager";
  icon.decoding = "async";
  icon.draggable = false;

  return icon;
}

function appendTextWithBreaks(element, text) {
  const lines = text.split("\n");

  lines.forEach((line, index) => {
    if (index > 0) element.append(document.createElement("br"));
    element.append(document.createTextNode(line));
  });
}

function createText(block) {
  const paragraph = document.createElement("p");
  paragraph.className = "slide-text fragment";
  paragraph.textContent = block.text;
  return paragraph;
}

function createLink(block) {
  const anchor = document.createElement("a");
  anchor.className = "slide-link fragment";
  anchor.href = block.href;
  anchor.textContent = block.text;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  return anchor;
}

function createCallout(block) {
  const callout = document.createElement("div");
  const calloutClasses = ["slide-callout", "fragment"];

  if (block.wide) {
    calloutClasses.push("slide-callout-wide");
  }

  if (block.variant === "inverted") {
    calloutClasses.push("slide-callout-inverted");
  }

  callout.className = calloutClasses.join(" ");
  if (block.label === "Rule" || block.label === "Safety rule") {
    callout.dataset.tone = "green";
  }

  const label = document.createElement("strong");
  label.textContent = block.label;

  const text = document.createElement("p");
  text.textContent = block.text;

  callout.append(label, text);
  return callout;
}

function createPrompt(block) {
  const wrapper = document.createElement("div");
  wrapper.className = "slide-prompt fragment";

  const label = document.createElement("strong");
  label.textContent = block.label;

  wrapper.append(label, createCode(block));
  return wrapper;
}

function createCode(block) {
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = block.text;
  pre.append(code);
  return pre;
}

function createBullets(block) {
  const wrapper = document.createElement("div");
  wrapper.className = block.reveal === false ? "slide-list-block" : "slide-list-block fragment";

  if (block.label) {
    const label = document.createElement("strong");
    label.textContent = block.label;
    wrapper.append(label);
  }

  const list = document.createElement("ul");
  list.append(...block.items.map((item) => createListItem(item)));
  wrapper.append(list);
  return wrapper;
}

function createOrderedList(block) {
  const wrapper = document.createElement("div");
  const classes = ["slide-list-block", "fragment"];

  if (block.variant) {
    classes.push(`slide-list-block-${block.variant}`);
  }

  wrapper.className = classes.join(" ");

  const label = document.createElement("strong");
  label.textContent = block.label;

  const list = document.createElement("ol");
  list.append(...block.items.map((item) => createListItem(item, block.revealItems)));

  wrapper.append(label, list);
  return wrapper;
}

function createColumns(block) {
  const list = document.createElement("ul");
  list.className = "slide-chip-list fragment";
  list.append(...block.items.map((item) => createListItem(item)));
  return list;
}

function createComparison(block) {
  const comparison = document.createElement("div");
  comparison.className = block.revealItems ? "slide-comparison" : "slide-comparison fragment";

  comparison.append(...block.items.map((item) => {
    const card = document.createElement("div");
    const cardClasses = ["slide-mini-card"];

    if (block.cardStyle === "inverted") {
      cardClasses.push("slide-mini-card-inverted");
    }

    if (block.revealItems) {
      cardClasses.push("fragment");
    }

    card.className = cardClasses.join(" ");
    if (item.tone) {
      card.dataset.tone = item.tone;
    }

    const label = document.createElement("strong");
    label.textContent = item.label;

    card.append(label, createCode(item));
    return card;
  }));

  return comparison;
}

function createSecurityColumns(block) {
  const wrapper = document.createElement("div");
  wrapper.className = block.revealItems ? "slide-security" : "slide-security fragment";

  wrapper.append(...block.columns.map((column) => {
    const card = document.createElement("div");
    card.className = block.revealItems ? "slide-mini-card fragment" : "slide-mini-card";
    if (column.tone) {
      card.dataset.tone = column.tone;
    }

    const label = document.createElement("strong");
    label.textContent = column.label;

    const list = document.createElement("ul");
    list.append(...column.items.map((item) => createListItem(item)));

    card.append(label, list);
    return card;
  }));

  return wrapper;
}

function createTable(block) {
  const table = document.createElement("table");
  table.className = block.revealRows ? "slide-table" : "slide-table fragment";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headRow.append(...block.headers.map((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    return th;
  }));
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  tbody.append(...block.rows.map((row) => {
    const tr = document.createElement("tr");
    if (block.revealRows) {
      tr.className = "fragment";
    }

    tr.append(...row.map((cell) => {
      const td = document.createElement("td");
      appendTableCellContent(td, cell);
      return td;
    }));
    return tr;
  }));

  table.append(thead, tbody);
  return table;
}

function appendTableCellContent(cellElement, cell) {
  if (typeof cell === "string") {
    cellElement.textContent = cell;
    return;
  }

  const label = document.createElement("span");
  label.className = "slide-table-label";

  if (cell.icon) {
    const icon = document.createElement("img");
    icon.className = "slide-table-icon";
    icon.src = `vendor/tabler-icons/outline/${cell.icon}.svg`;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    icon.draggable = false;
    label.append(icon);
  }

  const text = document.createElement("span");
  text.textContent = cell.text;
  label.append(text);
  cellElement.append(label);
}

function createListItem(text, reveal = false) {
  const item = document.createElement("li");
  if (reveal) {
    item.className = "fragment";
  }

  item.textContent = text;
  return item;
}

customElements.define("hw-workshop-slides-deck", HwWorkshopSlidesDeck);
