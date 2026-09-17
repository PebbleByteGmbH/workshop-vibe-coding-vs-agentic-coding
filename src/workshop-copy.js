(function () {
  window.HwWorkshopCopy = {
    en: {
      meta: {
        htmlLang: "en",
        appTitle: "Hello Workshop",
        slidesTitle: "Agentic Coding for Creative Teams",
        slidesDay2Title: "Agentic Coding for Creative Teams - Day 2"
      },
      brand: {
        ariaLabel: "PebbleByte website"
      },
      theme: {
        darkLabel: "Dark",
        lightLabel: "Light",
        useDarkLabel: "Use dark theme",
        useLightLabel: "Use light theme"
      },
      localeSwitch: {
        ariaLabel: "Change language",
        enLabel: "EN",
        deLabel: "DE"
      },
      app: {
        page: {
          eyebrow: "Agentic Coding",
          title: "Hello Workshop",
          buttonLabel: "Tap for a tiny idea",
          idea: "Pick one real workflow annoyance and turn it into a small local app.",
          linkHref: "workshop-slides.html",
          linkLabel: "Seminar slides day 1",
          secondaryLinkHref: "workshop-slides-day-2.html",
          secondaryLinkLabel: "Seminar slides day 2"
        },
        ideas: [
          "Build a local campaign tracker: tasks, channels, owners, deadlines, and notes in IndexedDB.",
          "Make an Excel cleanup helper: paste messy rows, tag issues, and save cleanup rules locally.",
          "Create a design feedback board: store screens, comments, status, and decisions offline.",
          "Build a meeting action tracker: capture decisions, owners, due dates, and follow-ups.",
          "Make a tiny content calendar: plan posts, channels, copy drafts, and approval status.",
          "Create a customer quote library: save useful phrases, tags, sources, and reuse notes.",
          "Build a local asset checklist: track files, formats, usage rights, and missing exports.",
          "Make a budget sanity checker: enter planned vs actual costs and flag weird numbers.",
          "Create a research notes database: save observations, links, tags, and next steps.",
          "Build a handoff checklist: store recurring project steps and mark what is done."
        ]
      },
      slidesPage: {
        bylineAriaLabel: "{byline} on LinkedIn",
        exportPdfLabel: "Export PDF",
        fallbackLogoAlt: "{name} logo",
        keyIdeaLabel: "Key idea"
      },
      slides: [
        {
          title: "Agentic Coding\nfor Creative Teams",
          subtitle: "From chatbots to agents in creative workflows",
          cover: true,
          blocks: [],
          notes: "Keep this simple. The goal is to reduce fear and curiosity gap."
        },
        {
          title: "Lukas Aichbauer",
          subtitle: "About me",
          image: {
            src: "assets/lukas-aichbauer.webp",
            alt: "Lukas Aichbauer"
          },
          blocks: [
            {
              type: "profile",
              lines: [
                "Co-Founder @ PebbleByte GmbH",
                "Lecturer @ Technikum Wien"
              ],
              contacts: [
                {
                  type: "email",
                  label: "lukas@pebblebyte.com",
                  href: "mailto:lukas@pebblebyte.com"
                },
                {
                  type: "linkedin",
                  label: "/in/aichbauer",
                  href: "https://www.linkedin.com/in/aichbauer"
                }
              ]
            }
          ]
        },
        {
          title: "Who Are You?",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Work Field",
                  icon: "briefcase",
                  accent: "#5b7cfa",
                  description: "What field do you work in?"
                },
                {
                  title: "AI Experience",
                  icon: "brain",
                  accent: "#16b85f",
                  description: "What experience do you have with AI?"
                },
                {
                  title: "Expectations",
                  icon: "question-mark",
                  accent: "#f97316",
                  description: "What do you expect from this workshop?"
                }
              ]
            }
          ]
        },
        {
          title: "What do we use AI agents for?",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Website development",
                  icon: "world",
                  accent: "#5b7cfa",
                  description: "We build and improve the DevOpsCycle website with AI agents.",
                  links: [
                    { text: "devopscycle.com", href: "https://devopscycle.com" }
                  ]
                },
                {
                  title: "Finding sales partners",
                  icon: "search",
                  accent: "#16b85f",
                  description: "We research agencies in Austria, Germany, and Switzerland that could sell RevWize through our partner model.",
                  links: [
                    { text: "revwize.com", href: "https://revwize.com" },
                    { text: "Partner leads · Excel demo", href: "assets/showcases/revwize-partner-leads-demo.xlsx" }
                  ]
                },
                {
                  title: "Creating marketing materials",
                  icon: "pencil",
                  accent: "#f97316",
                  description: "We create cheat sheets, product information pages, and sales partner pitch decks from prompts.",
                  links: [
                    { text: "Docker cheat sheet · Image", href: "assets/showcases/ultimate-docker-cheat-sheet.webp" },
                    { text: "RevWize info pages · PDF", href: "assets/showcases/revwize-partner-info-de.pdf" },
                    { text: "Partner pitch · PDF", href: "assets/showcases/revwize-partner-pitch.pdf" }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Three Starter Ideas",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Marketing",
                  icon: "search",
                  accent: "#5b7cfa",
                  description: "Customer reviews contain strong marketing language, but are rarely analyzed systematically.",
                  metaphor: "Review mining app: collects reviews from G2, Trustpilot, App Store, Amazon, or support tickets and extracts pain points, value propositions, objections, and reusable copy."
                },
                {
                  title: "Designers",
                  icon: "pencil",
                  accent: "#16b85f",
                  description: "Checking desktop, tablet, and mobile layouts takes time.",
                  metaphor: "Responsive screenshot reviewer: enter a URL, generate breakpoint screenshots, and flag overflow, broken layouts, tiny text, or clipped buttons."
                },
                {
                  title: "Project Management",
                  icon: "clipboard-list",
                  accent: "#f97316",
                  description: "Requirements, user flows, and acceptance criteria often stay abstract and are interpreted differently by developers.",
                  metaphor: "Prototype-as-acceptance app: turns a briefing into a working browser prototype with user flows, states, edge cases, and testable acceptance criteria as an executable reference for implementation."
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
                "Welcome, introductions, and starter ideas",
                "LLMs, chatbots, agents, and agentic coding",
                "AI agent landscape and Codex setup",
                "Choosing a good first use case",
                "Exercises: inputs, steps, rules, task design, and error cases"
              ]
            }
          ]
        },
        {
          title: "LLM / Chatbot / Agent",
          subtitle: "From Brain to Action",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Large Language Model (LLM)",
                  icons: [
                    { emoji: "🧠" }
                  ],
                  accent: "#5b7cfa",
                  description: "Computer program",
                  metaphor: "Metaphor: Brain"
                },
                {
                  title: "Chatbot",
                  icons: [
                    { emoji: "👀" },
                    { emoji: "👂" },
                    { emoji: "👄" }
                  ],
                  accent: "#16b85f",
                  description: "Conversation interface",
                  metaphor: "Metaphor: eyes, ears, mouth"
                },
                {
                  title: "Agent",
                  icons: [
                    { emoji: "🤲" },
                    { emoji: "💪" },
                    { emoji: "🦵" }
                  ],
                  accent: "#f97316",
                  description: "Uses tools and takes action",
                  metaphor: "Metaphor: hands, arms, feet"
                }
              ]
            }
          ]
        },
        {
          title: "LLM",
          subtitle: "Input -> LLM (Computer program) -> Output",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              intro: "A simple way to think about what happens inside a Large Language Model.",
              columns: [
                {
                  title: "Input",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#5b7cfa",
                      label: "Sentence start:\n\"The sky is ...\""
                    }
                  ]
                },
                {
                  title: "LLM",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "dots",
                      color: "#16b85f",
                      label: "\"blue\" -> 0.87"
                    },
                    {
                      icon: "dots",
                      color: "#16b85f",
                      label: "\"cloudy\" -> 0.09"
                    },
                    {
                      icon: "dots",
                      color: "#16b85f",
                      label: "\"green\" -> 0.04"
                    }
                  ]
                },
                {
                  title: "Output",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "\"The sky is blue.\""
                    }
                  ]
                }
              ],
              keyIdeaLabel: "High level",
              keyIdea: "It does not understand like a human. It uses patterns from many texts to predict likely next tokens. Tokens are small text pieces: word parts, whole words, or character strings."
            }
          ]
        },
        {
          title: "Chatbot",
          subtitle: "Human -> Website -> Server with LLM -> Answer",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              intro: "A chatbot is a website or app that sends your message to an LLM and shows the answer.",
              columns: [
                {
                  title: "Human",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "user",
                      color: "#5b7cfa",
                      label: "Types a question\nor task"
                    }
                  ]
                },
                {
                  title: "Website",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "world",
                      color: "#16b85f",
                      label: "Chatbot page\nor app"
                    }
                  ]
                },
                {
                  title: "Server + LLM",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "brain",
                      color: "#16b85f",
                      label: "Predicts tokens\nand builds text"
                    }
                  ]
                },
                {
                  title: "Answer",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "Computer shows\nthe answer"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "High level",
              keyIdea: "The chatbot is the interface and connection. The LLM usually runs on a server; your computer shows the conversation."
            }
          ]
        },
        {
          title: "Agent",
          subtitle: "Goal -> Agent (LLM + programs) -> Result",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              intro: "An agent gets a goal and can use tools to work through steps.",
              columns: [
                {
                  title: "Goal",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#5b7cfa",
                      label: "Task:\n\"Add two slides and check the deck.\""
                    }
                  ]
                },
                {
                  title: "Agent",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "brain",
                      color: "#16b85f",
                      label: "Talks to the LLM"
                    },
                    {
                      icon: "tool",
                      color: "#16b85f",
                      label: "Uses programs:\nPowerPoint, Google Slides, browser"
                    },
                    {
                      icon: "file",
                      color: "#16b85f",
                      label: "Reads and edits files"
                    },
                    {
                      icon: "check",
                      color: "#16b85f",
                      label: "Checks the result"
                    }
                  ]
                },
                {
                  title: "Result",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "Changed deck\nplus short summary"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "High level",
              keyIdea: "An agent does not stop at a text answer. It can plan, act, verify, and keep going until the task is done."
            }
          ]
        },
        {
          title: "From Recipe to Chef",
          subtitle: "Prompting / Vibe Coding / Agentic Coding",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              intro: "Same AI, different way of steering it: ask, improvise, or guide execution.",
              columns: [
                {
                  title: "Prompting",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#5b7cfa",
                      label: "Ask in chat\nand get an answer"
                    },
                    {
                      icon: "user",
                      color: "#5b7cfa",
                      label: "You decide what to do\nwith the response"
                    },
                    {
                      icon: "book",
                      color: "#5b7cfa",
                      label: "Metaphor:\nrecipe request"
                    }
                  ]
                },
                {
                  title: "Vibe Coding",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "code",
                      color: "#16b85f",
                      label: "Describe the app loosely\nand paste code back and forth"
                    },
                    {
                      icon: "player-play",
                      color: "#16b85f",
                      label: "Run it, see what happens,\ntweak by feel"
                    },
                    {
                      icon: "tool",
                      color: "#16b85f",
                      label: "Metaphor:\n\"Something pasta-ish\""
                    }
                  ]
                },
                {
                  title: "Agentic Coding",
                  layout: "list",
                  size: "mini",
                  variant: "inverted",
                  items: [
                    {
                      icon: "tool",
                      color: "#f97316",
                      label: "Give a goal, context,\nfiles, and constraints"
                    },
                    {
                      icon: "clipboard-list",
                      color: "#f97316",
                      label: "Agent plans, edits,\ntests, and improves"
                    },
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Metaphor:\nchef in the kitchen"
                    }
                  ]
                }
              ],
              keyIdea: "Prompting asks, Vibe Coding experiments, Agentic Coding delegates execution with context and review."
            }
          ]
        },
        {
          title: "AI Agent Landscape",
          subtitle: "Six examples across different use cases and domains",
          blocks: [
            {
              type: "agentLogos",
              items: [
                {
                  name: "Codex",
                  logo: "assets/agent-logos/codex.svg",
                  alt: "Codex logo",
                  accent: "#7cf4c4"
                },
                {
                  name: "Claude Code",
                  logo: "assets/agent-logos/claude-code.svg",
                  alt: "Claude Code logo",
                  accent: "#d97757"
                },
                {
                  name: "Qwen Code",
                  logo: "assets/agent-logos/qwen-code.svg",
                  alt: "Qwen Code logo",
                  accent: "#615ced"
                },
                {
                  name: "Mistral Vibe Code",
                  logo: "assets/agent-logos/mistral-vibe-code.svg",
                  alt: "Mistral Vibe Code logo",
                  accent: "#ff8205"
                },
                {
                  name: "Zapier Agents",
                  logo: "assets/agent-logos/zapier-agents.svg",
                  alt: "Zapier Agents logo",
                  accent: "#ff4a00"
                },
                {
                  name: "OpenClaw",
                  logo: "assets/agent-logos/openclaw.svg",
                  alt: "OpenClaw logo",
                  accent: "#16b85f"
                }
              ]
            }
          ]
        },
        {
          title: "Install Codex",
          subtitle: "Setup",
          blocks: [
            {
              type: "link",
              href: "https://openai.com/codex/",
              text: "https://openai.com/codex/"
            }
          ]
        },
        {
          title: "First Open Codex",
          subtitle: "Launch",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-en-de.png",
              alt: "Codex first open screen"
            }
          ]
        },
        {
          title: "Click Sign In",
          subtitle: "First opening",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-click-signin-en-de.png",
              alt: "Codex sign-in button"
            }
          ]
        },
        {
          title: "Continue Sign-In",
          subtitle: "First opening",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-continue-sign-in-en-de.png",
              alt: "Codex continue sign-in screen"
            }
          ]
        },
        {
          title: "Sign-In Successful",
          subtitle: "First opening",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-sign-in-successful-en-de.png",
              alt: "Codex successful sign-in screen"
            }
          ]
        },
        {
          title: "Codex Home",
          subtitle: "After first login",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/how-codex-looks-first-login-en.png",
              alt: "Codex home screen after first login"
            }
          ]
        },
        {
          title: "Create New Project",
          subtitle: "Project setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-new-project-en.png",
              alt: "Codex create new project screen"
            }
          ]
        },
        {
          title: "Name the Project",
          subtitle: "Project setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-project-name-en.png",
              alt: "Codex project name screen"
            }
          ]
        },
        {
          title: "Select a Project",
          subtitle: "Where to choose the project",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-project-codex-en.png",
              alt: "Codex project selector"
            }
          ]
        },
        {
          title: "Quick Practice Run",
          subtitle: "Before we start with your own use cases",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Mini Todo List App",
                  icon: "clipboard-list",
                  accent: "#16b85f",
                  description: "A simple task list with add, complete, delete, and empty states.",
                  metaphor: "Good for making forms, lists, state, and small data models tangible."
                },
                {
                  title: "Clone a Landing Page",
                  icon: "world",
                  accent: "#f97316",
                  description: "Rebuild a landing page from a screenshot.",
                  metaphor: "Good for practicing layout, typography, colors, spacing, and responsive details."
                }
              ]
            },
            {
              type: "link",
              size: "small",
              href: "https://excalidraw.com/#room=fae440cad3935c8cd21e,5SXK_ml_xSQCC_sP_CaovQ",
              text: "Ideas"
            }
          ]
        },
        {
          "title": "OpenAI Models at a Glance",
          "subtitle": "GPT-6 & GPT-5.6 · Everyday work & creative tasks · Checked 16 Sep 2026",
          "layout": "model-comparison",
          "blocks": [
            {
              "type": "table",
              "scrollLabel": "OpenAI models, token prices and knowledge cutoffs",
              "headers": [
                "Model",
                "Focus / typical uses",
                "Context (tokens)",
                "Max output (tokens)",
                "Reasoning effort",
                "Input (USD / 1M)",
                "Output (USD / 1M)",
                "Knowledge cutoff"
              ],
              "rows": [
                [
                  "GPT-6 Astra",
                  "Most demanding work",
                  "1.05M",
                  "128,000",
                  "low → max",
                  "$10.00",
                  "$50.00",
                  "30 Apr 2026"
                ],
                [
                  "GPT-5.6 Sol",
                  "Complex professional work",
                  "1.05M",
                  "128,000",
                  "none → max",
                  "$4.00",
                  "$20.00",
                  "16 Feb 2026"
                ],
                [
                  "GPT-5.6 Terra",
                  "Balance quality and cost",
                  "1.05M",
                  "128,000",
                  "none → max",
                  "$2.00",
                  "$12.00",
                  "16 Feb 2026"
                ],
                [
                  "GPT-5.6 Luna",
                  "Low cost at high volume",
                  "1.05M",
                  "128,000",
                  "none → max",
                  "$0.20",
                  "$1.20",
                  "16 Feb 2026"
                ]
              ]
            },
            {
              "type": "text",
              "text": "Prices in USD per 1M tokens: standard API rates for short context and uncached input. Input = material sent; output = generated tokens. Long context costs more."
            },
            {
              "type": "text",
              "text": "Context = what fits on the model’s desk at once: conversation, briefing and documents. Tokens are small text pieces; M = million. Knowledge cutoff = the model’s built-in knowledge date; newer facts need current sources."
            },
            {
              "type": "text",
              "text": "Reasoning = how much effort the model puts into working through your task. A quick rewrite needs little; comparing options against several requirements may benefit from more. More effort can mean a longer wait. none = off; low → max = little to maximum."
            },
            {
              "type": "link",
              "size": "small",
              "href": "https://developers.openai.com/api/docs/models",
              "text": "Sources: OpenAI model catalog"
            },
            {
              "type": "link",
              "size": "small",
              "href": "https://developers.openai.com/api/docs/pricing",
              "text": "OpenAI API pricing (USD / 1M tokens)"
            }
          ],
          "notes": "Selected API models; availability in the Codex model picker may differ. Context figures are API limits. Arrows abbreviate supported effort levels. GPT-6 Astra: low, medium, high, xhigh, max. GPT-5.6 Sol/Terra/Luna: none, low, medium, high, xhigh, max. Source: https://developers.openai.com/api/docs/models\nTypical uses are illustrative applications of the official model positioning: Astra for the hardest end-to-end work, Sol for complex professional work, Terra for balancing intelligence and cost, and Luna for cost-sensitive high-volume workloads. They are not exclusive capabilities or benchmark-based task rankings."
        },
        {
          "title": "How Does Reasoning Work?",
          "subtitle": "An internal working draft before the answer",
          "layout": "reasoning-info",
          "blocks": [
            {
              "type": "text",
              "text": "The model generates internal reasoning tokens: intermediate steps that are normally hidden from you."
            },
            {
              "type": "bullets",
              "label": "This lets it",
              "items": [
                "Break the task into smaller steps.",
                "Compare approaches and check intermediate results.",
                "Revise an approach and develop the answer."
              ]
            },
            {
              "type": "callout",
              "label": "Reasoning & agents",
              "text": "Reasoning is a model’s ability to work through a task. An agent uses a model and tools to act, check results and continue working."
            },
            {
              "type": "text",
              "text": "Example: reasoning helps weigh a campaign budget. An agent can also open the budget file and save the plan as a document."
            },
            {
              "type": "text",
              "text": "More reasoning = more computation for these steps. It can help with difficult tasks and take longer; correctness is not guaranteed."
            },
            {
              "type": "link",
              "size": "small",
              "href": "https://developers.openai.com/api/docs/guides/reasoning",
              "text": "Source: OpenAI — Reasoning"
            }
          ],
          "notes": "Simplified explanation of the documented mechanism. Internal reasoning tokens are not directly exposed; displayed summaries are not the complete internal process. Reasoning may also occur between tool calls. Source: https://developers.openai.com/api/docs/guides/reasoning"
        },
        {
          title: "Select a Model",
          subtitle: "Where to choose the model",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-llm-model-en.png",
              alt: "Codex model selector"
            }
          ]
        },
        {
          title: "Select Workspace",
          subtitle: "Where the agent works",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-where-agent-works-en.png",
              alt: "Codex workspace selector"
            }
          ]
        },
        {
          title: "Include Plugins",
          subtitle: "Available tools",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/include-plugins-en.png",
              alt: "Codex plugin selection"
            }
          ]
        },
        {
          title: "What Is an Automation?",
          subtitle: "Tasks on a schedule",
          layout: "automation",
          blocks: [
            {
              type: "automationFlow",
              intro: "An automation starts a predefined task automatically when its trigger occurs.",
              example: "Example: a weekly report",
              steps: [
                { icon: "🕘", label: "Schedule", value: "09:00", detail: "Every Monday", tone: "schedule" },
                { icon: "⚙️", label: "Task", value: "Summarize project updates", detail: "The agent follows your instructions", tone: "task" },
                { icon: "📋", label: "Result", value: "Weekly report", detail: "Ready for you to review", tone: "result" }
              ],
              repeat: "Repeat next Monday at 09:00",
              takeaway: "Set it up once. Run it at every scheduled time."
            }
          ],
          notes: "The time is an example, not an actual running automation. Explain the trigger, the saved instructions, and the result. The return arrow means a new run at the next scheduled time, not a task that runs continuously. Other automations can start from an event instead of a schedule."
        },
        {
          title: "Create Automations",
          subtitle: "Automation setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-automations-1-en.png",
              alt: "Codex create automations screen"
            }
          ]
        },
        {
          title: "Configure Automations",
          subtitle: "Automation setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-automations-2-en.png",
              alt: "Codex automation configuration screen"
            }
          ]
        },
        {
          title: "Find Usage",
          subtitle: "Account usage",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/where-to-find-usage-1-en.png",
              alt: "Codex usage navigation"
            }
          ]
        },
        {
          title: "Usage Details",
          subtitle: "Account usage",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/where-to-find-usage-2-en.png",
              alt: "Codex usage details"
            }
          ]
        },

        {
          title: "Which Use Cases Are Good Starting Points?",
          subtitle: "Start small, create real value",
          blocks: [
            {
              type: "table",
              revealTable: true,
              revealRows: true,
              headers: ["A good first use case is", "How to recognize it"],
              rows: [
                ["frequent", "the task comes up regularly"],
                ["time-consuming", "it noticeably absorbs attention"],
                ["easy to check", "a good result is recognizable"],
                ["low-risk", "mistakes are easy to spot and correct"],
                ["context-rich", "examples, files, and rules are available"]
              ]
            }
          ]
        },
        {
          title: "Use Case Board",
          subtitle: "Excalidraw",
          blocks: [
            {
              type: "link",
              href: "https://excalidraw.com/#room=3f7fb564ea3a699c6fd3,sDK2_w9L9RRcSUgP1PYFTA",
              text: "Find your usecase"
            }
          ]
        },
        {
          title: "Exercise 1: Define Input and Output",
          subtitle: "Duration: 5 minutes",
          blocks: [
            {
              type: "bullets",
              label: "Questions",
              items: [
                "What does the program receive?",
                "In which format?",
                "What should it create?",
                "What should the result look like?"
              ]
            },
            {
              type: "table",
              revealTable: true,
              revealRows: true,
              headers: ["Input", "Output"],
              rows: [
                ["file", "summary or report"],
                ["notes", "task list"],
                ["URL", "screenshots and issues"],
                ["CSV table", "themes and examples"]
              ]
            },
            {
              type: "callout",
              label: "Coffee shop landing page example",
              text: "Input: campaign briefing, shop photos, menu CSV, and brand notes. Output: landing page outline, section copy, offer blocks, image suggestions, and CTA variants."
            }
          ]
        },
        {
          title: "Exercise 2: Break Down the Process",
          subtitle: "Duration: 5 minutes",
          blocks: [
            {
              type: "text",
              text: "Goal: split the task into small programmable steps."
            },
            {
              type: "ordered",
              label: "General process flow",
              revealItems: true,
              items: [
                "select the input",
                "open or read the input",
                "extract the relevant information",
                "apply the rules",
                "collect problems or results",
                "create the output"
              ]
            },
            {
              type: "callout",
              label: "Coffee shop landing page example",
              text: "Read the campaign briefing, extract offer and tone, choose page sections, write section copy, insert menu and image placeholders, and export the HTML page."
            }
          ]
        },
        {
          title: "Exercise 3: Collect Rules and Examples",
          subtitle: "Duration: 5 minutes",
          blocks: [
            {
              type: "text",
              text: "Goal: make implicit knowledge visible."
            },
            {
              type: "bullets",
              label: "Collect",
              items: [
                "fixed rules",
                "good examples",
                "bad examples",
                "exceptions",
                "typical mistakes"
              ]
            },
            {
              type: "bullets",
              label: "General examples",
              items: [
                "required fields must be present",
                "forbidden words or placeholders must not appear",
                "output format must follow a known example",
                "exceptions must be listed explicitly",
                "common mistakes should be easy to detect"
              ]
            },
            {
              type: "callout",
              label: "Coffee shop landing page example",
              text: "The headline mentions the seasonal drink, the CTA says \"Reserve a table\" or \"Order ahead\", opening hours are visible above the fold, no placeholder text remains, and the original briefing is not changed."
            }
          ]
        },
        {
          title: "Summary: Basics",
          subtitle: "Important words and metaphors",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Word", "Meaning", "Metaphor"],
              rows: [
                ["LLM", "A language model that predicts likely next text pieces from input.", "🧠 Brain"],
                ["Token", "A small text piece: a word part, word, or character string.", "🧩 Text building block"],
                ["Chatbot", "An interface that sends messages to an LLM and shows answers.", "👀👂👄 Eyes, ears, mouth"],
                ["Agent", "An LLM-based system that can use tools, act, check, and continue.", "🤲💪🦵 Hands, arms, feet"],
                ["Prompting", "Asking in chat and deciding yourself what to do with the answer.", "📖 Ask for a recipe"],
                ["Vibe Coding", "Loosely describing software, trying it, and adjusting by feel.", "🍝 \"Something pasta-ish\""],
                ["Agentic Coding", "Giving goal, context, files, rules, and boundaries so an agent can implement.", "🍲 Chef in the kitchen"]
              ]
            }
          ]
        },
        {
          title: "Summary: Codex",
          subtitle: "Setup words and metaphors",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Word", "Meaning", "Metaphor"],
              rows: [
                ["Codex", "An agentic coding environment that can work with your project files.", "🧑‍🍳 Chef cook"],
                ["Project", "The place where your work is organized inside Codex.", "🏪 Restaurant"],
                ["Model", "The selected AI brain Codex uses for the task.", "🎓 Chef's brain"],
                ["Workspace", "The project folder where the agent is allowed to read and change files.", "🍳 Kitchen"],
                ["Tool", "Programs and apps the agent can use.", "🛠️ Kitchen tools"],
                ["Plugin", "A special program made for Codex.", "🧰 Special kitchen tool"],
                ["Automation", "A repeatable agent task that can run on a configured trigger.", "⏲️ Kitchen timer"],
                ["Usage", "The account area where you can see how much Codex has been used.", "💸 Salary for the cook"]
              ]
            }
          ]
        },
        {
          title: "Summary: Use Cases",
          subtitle: "Instructions and metaphors",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Word", "Meaning", "Metaphor"],
              rows: [
                ["Use Case", "A concrete task where AI can create value in a workflow.", "📋 Dish on the menu"],
                ["Input", "The material the program receives: file, notes, URL, or table.", "🥕 Ingredients"],
                ["Output", "The result the program should create: report, list, screenshots, or app.", "🍽️ Finished dish"],
                ["Rule", "A fixed condition the result must follow.", "📏 Cooking rule"],
                ["Check Criteria", "How you know the task is done well enough.", "👅 Taste test"],
                ["Error Case", "A situation where the input or result is missing, wrong, or unclear.", "❓ Missing ingredient"],
                ["Human Approval", "A decision that stays with a person, such as publishing or deleting data.", "✅ Chef signs off"]
              ]
            },
            {
              type: "table",
              headers: ["Good use case is", "How to recognize it", "Metaphor"],
              rows: [
                ["Frequent", "The task comes up regularly.", "🔁 Regular order"],
                ["Time-consuming", "It noticeably absorbs attention.", "⏳ Long prep time"],
                ["Easy to check", "A good result is recognizable.", "🔍 Quality check"],
                ["Low-risk", "Mistakes are easy to spot and correct.", "🛟 Safety net"],
                ["Context-rich", "Examples, files, and rules are available.", "🗂️ Recipe archive"]
              ]
            }
          ]
        }
      ],
      slidesDay2: [
        {
          title: "Agentic Coding\nDay 2",
          subtitle: "Projects, skills, tools, and safe boundaries",
          cover: true,
          blocks: [],
          notes: "Connect yesterday's agent basics to today's practical Codex building blocks."
        },
        {
          title: "Exercise 4: The Error Case",
          subtitle: "Duration: 5 minutes",
          blocks: [
            {
              type: "text",
              text: "Goal: look beyond the ideal path."
            },
            {
              type: "bullets",
              label: "Define at least three general error states",
              items: [
                "file is missing",
                "format is wrong",
                "input is empty",
                "URL is not reachable",
                "required columns are missing",
                "result is ambiguous",
                "multiple rules contradict each other"
              ]
            },
            {
              type: "callout",
              label: "Coffee shop landing page example",
              text: "If the menu CSV is missing prices, the program should mark the affected drinks, keep generating the page, and show a warning in the report."
            },
            {
              type: "callout",
              label: "Question",
              text: "What should the program do in this case?"
            }
          ]
        },
        {
          title: "Exercise 5: Write the First LLM Prompt",
          subtitle: "Duration: 10 minutes",
          blocks: [
            {
              type: "prompt",
              label: "Template",
              text: "Build a local application that supports [goal].\nIt uses [input] as input.\nThe program should:\n- ...\n- ...\n- ...\nFollow these rules: [rules].\nThe result should be [output].\nThe task is done when [check criteria] are met.\nThe program must not [boundaries]."
            },
            {
              type: "callout",
              label: "Coffee shop landing page",
              text: "Build a local app that turns a seasonal coffee campaign briefing into a responsive landing page preview with headline, offer, menu teaser, photos, opening hours, and CTA."
            }
          ]
        },
        {
          title: "Project / Skill / Tool",
          subtitle: "From workspace to action",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Project",
                  icons: [
                    { emoji: "🏪" }
                  ],
                  accent: "#5b7cfa",
                  description: "Workspace with context",
                  metaphor: "Metaphor: restaurant"
                },
                {
                  title: "Skill",
                  icons: [
                    { emoji: "📘" }
                  ],
                  accent: "#16b85f",
                  description: "Reusable instruction",
                  metaphor: "Metaphor: recipe card"
                },
                {
                  title: "Tool",
                  icons: [
                    { emoji: "🛠️" }
                  ],
                  accent: "#f97316",
                  description: "Can execute an action",
                  metaphor: "Metaphor: kitchen tool"
                }
              ]
            }
          ]
        },
        {
          title: "Project",
          subtitle: "What it is · Why it helps · How to use it",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "A project is a dedicated workspace that brings together the files, context, and rules for one area of work.",
              columns: [
                {
                  title: "What is it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "folder",
                      color: "#5b7cfa",
                      label: "Files, context,\nand project rules"
                    }
                  ]
                },
                {
                  title: "Why use it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#16b85f",
                      label: "Keeps the agent\non the right task"
                    },
                    {
                      icon: "lock",
                      color: "#16b85f",
                      label: "Separates projects\nand sensitive data"
                    }
                  ]
                },
                {
                  title: "How do I use it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Select the right\nproject first"
                    },
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "Add only what\nthe task needs"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Security",
              keyIdea: "Keep secrets, client data, production files, and private notes outside the project unless the task genuinely needs them."
            }
          ]
        },
        {
          title: "Create a new project",
          subtitle: "Step 1 of 3 — Start a dedicated workspace",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-new-project-en.png",
              alt: "Create a new project in Codex"
            }
          ]
        },
        {
          title: "Give the project a clear name",
          subtitle: "Step 2 of 3 — Make the context recognizable",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-project-name-en.png",
              alt: "Name a new project in Codex"
            }
          ]
        },
        {
          title: "Select the project for the task",
          subtitle: "Step 3 of 3 — Work in the right context",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-project-codex-en.png",
              alt: "Select a project in Codex"
            }
          ]
        },
        {
          title: "Give the agent only the access it needs",
          subtitle: "Start with the safest approval mode for the project",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/project-and-agent-security-1-en.png",
              alt: "Codex approval menu with Ask for approval, Approve for me, and Full access options"
            }
          ],
          notes: "Choose the narrowest approval mode that still lets the agent complete the task. Prefer Ask for approval when external files or internet access are sensitive. Use Full access only when it is truly necessary and the workspace is safe."
        },
        {
          title: "Plan Mode",
          subtitle: "Understand first · Plan second · Implement after",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "Plan Mode lets Codex gather context, ask clarifying questions, and build a stronger plan before implementation.",
              columns: [
                {
                  title: "Understand",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "search",
                      color: "#5b7cfa",
                      label: "Gathers relevant\ncontext"
                    },
                    {
                      icon: "question-mark",
                      color: "#5b7cfa",
                      label: "Asks clarifying\nquestions"
                    }
                  ]
                },
                {
                  title: "Plan",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "clipboard-list",
                      color: "#16b85f",
                      label: "Proposes clear\nimplementation steps"
                    },
                    {
                      icon: "check",
                      color: "#16b85f",
                      label: "Makes assumptions\nvisible"
                    }
                  ]
                },
                {
                  title: "Use it for",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "stack-2",
                      color: "#f97316",
                      label: "Complex or\nmulti-step tasks"
                    },
                    {
                      icon: "message",
                      color: "#f97316",
                      label: "Ambiguous\nrequirements"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Key idea",
              keyIdea: "Agree on the route before Codex changes files."
            }
          ],
          notes: "The Codex manual recommends Plan Mode for complex, ambiguous, or hard-to-describe tasks. It lets Codex gather context, ask clarifying questions, and prepare a stronger plan before implementation."
        },
        {
          title: "Turn Plan Mode on",
          subtitle: "Step 1 of 3 — Open + and choose Plan mode",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/planmode-en-1.png",
              alt: "Plan mode highlighted in the Codex add menu"
            }
          ],
          notes: "Open the add menu and choose Plan mode before sending a complex prompt. In supported Codex surfaces, /plan or Shift+Tab can also toggle Plan Mode."
        },
        {
          title: "Add files and folders",
          subtitle: "Step 1 of 3 — Open + and choose Files and folders",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/add-documents-and-folders-en-1.png",
              alt: "Files and folders highlighted in the Codex add menu"
            }
          ],
          notes: "Add only the files or folders Codex needs for the task. Avoid sharing an entire drive or unrelated client material."
        },
        {
          title: "Choose the relevant material",
          subtitle: "Step 2 of 3 — Select a file or folder",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/add-documents-and-folders-2-en-de.png",
              alt: "System file picker opened from Codex"
            }
          ],
          notes: "Select the smallest useful scope. A focused brief or project folder gives Codex better context and reduces accidental data exposure."
        },
        {
          title: "Check the attachment before sending",
          subtitle: "Step 3 of 3 — Confirm the right context is attached",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/add-documents-and-folders-3-en.png",
              alt: "A PDF attached to a Codex prompt"
            }
          ],
          notes: "Review the attachment chips before starting the task. Remove anything that is unrelated, sensitive, or no longer needed."
        },
        {
          title: "Answer clarifying questions",
          subtitle: "Step 2 of 3 — Resolve important decisions before implementation",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/planmode-clarifiying-en-2.png",
              alt: "Codex asks a multiple-choice clarifying question in Plan Mode"
            }
          ],
          notes: "Plan Mode can pause to ask targeted questions when an important requirement is unclear. Choose an option or give your own answer so Codex can build the plan around the right assumptions."
        },
        {
          title: "Implement the plan",
          subtitle: "Step 3 of 3 — Review the plan and confirm implementation",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/planmode-implement-1-en.png",
              alt: "Codex asks for confirmation to implement the completed plan"
            }
          ],
          notes: "Review the plan summary, scope, and assumptions before continuing. Choose Yes, implement this plan only when the proposed approach matches the task."
        },
        {
          title: "Skill",
          subtitle: "What it is · Why it helps · How to use it",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "A skill is a reusable playbook that teaches Codex how to perform one specific type of task.",
              columns: [
                {
                  title: "What is it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "book",
                      color: "#5b7cfa",
                      label: "Instructions,\nreferences, and checks"
                    }
                  ]
                },
                {
                  title: "Why use it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "trending-up",
                      color: "#16b85f",
                      label: "More consistent\nresults"
                    },
                    {
                      icon: "message",
                      color: "#16b85f",
                      label: "Less repeated\nprompting"
                    }
                  ]
                },
                {
                  title: "How do I use it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "clipboard-list",
                      color: "#f97316",
                      label: "Use it for a\nrepeatable task"
                    },
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Mention $skill-name\nor let Codex match it"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Security",
              keyIdea: "Read a skill before trusting it. Prefer focused skills from trusted sources and check what tools, files, or external services they expect to use."
            }
          ]
        },
        {
          title: "Create a skill with Skill Creator",
          subtitle: "Select the skill and describe the task",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-en.png",
              alt: "Select Skill Creator in Codex by entering $skill in the prompt field"
            }
          ],
          notes: "Enter $skill, select Skill Creator, and describe one focused task, its trigger, and the expected result. Review and test the generated skill before using it."
        },
        {
          title: "Describe what the skill should do",
          subtitle: "Name the skill, define its trigger, and set clear constraints",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-2-en.png",
              alt: "Example prompt for creating a local Frontend Developer skill with Skill Creator"
            }
          ],
          notes: "A useful request names the skill, explains when it should activate, and states the standards or constraints it must follow."
        },
        {
          title: "Open the generated skill",
          subtitle: "Skill Creator creates and validates the local files",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-3-en.png",
              alt: "Validated local skill result in Codex with the generated SKILL.md highlighted"
            }
          ],
          notes: "After creation, check that Codex reports the skill as valid and open the generated files for review."
        },
        {
          title: "Check the skill metadata",
          subtitle: "openai.yaml defines how the skill appears and starts",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-4-en.png",
              alt: "Generated agents/openai.yaml with the skill display name, description, and default prompt"
            }
          ],
          notes: "Review the display name, short description, and default prompt in agents/openai.yaml. They should make the skill easy to recognize and use."
        },
        {
          title: "Review the skill instructions",
          subtitle: "SKILL.md defines the trigger, workflow, and constraints",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-5-en.png",
              alt: "Generated SKILL.md with its trigger description, required stack, and workflow"
            }
          ],
          notes: "Read the complete SKILL.md before using the skill. Check that the trigger is precise and that the instructions are ordered, focused, and testable."
        },
        {
          title: "A good skill is focused and testable",
          subtitle: "Local required core, optional support",
          layout: "skill-anatomy",
          blocks: [
            {
              type: "skillAnatomy",
              treeLabel: "Folder structure",
              tree: "my-skill/\n├── SKILL.md                 required\n├── agents/\n│   └── openai.yaml          required for local skills\n├── references/\n│   └── some.md              optional deep context\n└── scripts/                 optional deterministic helpers",
              checklistLabel: "Quality check",
              items: [
                "One clearly scoped job",
                "Precise trigger description",
                "Explicit inputs and outputs",
                "Imperative, ordered steps",
                "Examples and checks only where useful"
              ]
            },
            {
              type: "callout",
              label: "Rule",
              text: "Local standard: Always include SKILL.md and agents/openai.yaml. Add references and scripts only when the workflow needs them."
            }
          ],
          notes: "For local workshop skills, agents/openai.yaml is required alongside SKILL.md. In the general Codex skill format, this metadata file is optional. Keep references separate so Codex can use progressive disclosure."
        },
        {
          title: "Tool",
          subtitle: "What it is · Why it helps · How to use it",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "A tool is a program or interface Codex can use to retrieve information or perform a task.",
              columns: [
                {
                  title: "What is it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "tool",
                      color: "#5b7cfa",
                      label: "Programs: browser,\nterminal, Excel"
                    },
                    {
                      icon: "world",
                      color: "#5b7cfa",
                      label: "Services: GitHub,\nGoogle Drive, Slack"
                    }
                  ]
                },
                {
                  title: "Why use it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "search",
                      color: "#16b85f",
                      label: "Find, read, and\ncheck information"
                    },
                    {
                      icon: "code",
                      color: "#16b85f",
                      label: "Complete tasks inside\nother programs"
                    }
                  ]
                },
                {
                  title: "How do I use it?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "tool",
                      color: "#f97316",
                      label: "Choose the tool that\nmatches the task"
                    },
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Check access and\nreview the result"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Security",
              keyIdea: "Tools make risk real. Review anything that deletes, publishes, sends messages, installs software, calls external services, or shares data."
            }
          ]
        },
        {
          title: "Install a plugin",
          subtitle: "Open Plugins -> Review access -> Install",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/include-plugins-en.png",
              alt: "Full Codex plugin directory showing the Plugins navigation item, available plugins, an Install button, and a data-access warning"
            }
          ],
          notes: "Plugins are installable bundles. Review requested access before installation. In the CLI, run /plugins, install from a configured marketplace, and start a new session."
        },
        {
          title: "Open the plugin details before installing",
          subtitle: "Choose the plugin you want to review",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-1-en.png",
              alt: "Google Calendar highlighted in the Codex plugin directory before installation"
            }
          ],
          notes: "Do not install from the directory view alone. Open the plugin detail page so you can inspect what the bundle contains and what it can access."
        },
        {
          title: "Check what the plugin includes",
          subtitle: "Review every app and skill in the bundle",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-2-en.png",
              alt: "Google Calendar plugin detail page with its included app and five skills highlighted"
            }
          ],
          notes: "A plugin can bundle apps and skills. Review each included capability rather than judging the plugin only by its name or summary."
        },
        {
          title: "Inspect the app's actions",
          subtitle: "Pay special attention to write and delete actions",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-3-en.png",
              alt: "Google Calendar app action list showing create, delete, respond, and update event actions"
            }
          ],
          notes: "Check which actions only read information and which can create, update, delete, or send data. Grant access only when those actions are necessary for your task."
        },
        {
          title: "Read the included skill before use",
          subtitle: "Check its workflow, boundaries, and expected output",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-4-en.png",
              alt: "Google Calendar skill details showing its overview, preferred deliverables, and workflow"
            }
          ],
          notes: "Read the skill instructions before trusting them. Check that the workflow is relevant, the boundaries are safe, and the expected outputs match your task."
        },
        {
          title: "Skill or plugin? Choose by the need",
          subtitle: "Process = Skill · Connected tool or information = Plugin",
          blocks: [
            {
              type: "security",
              columns: [
                {
                  label: "Skill",
                  tone: "orange",
                  items: [
                    "Teaches Codex your repeatable process",
                    "Use for consistent rules, order, tone, or format",
                    "Start with $ and select the skill",
                    "Example: create a weekly update in your team's format"
                  ]
                },
                {
                  label: "Plugin",
                  tone: "green",
                  items: [
                    "Connects Codex to other tools and information",
                    "Use for Google Drive, email, or another service",
                    "Open Plugins, review access, and install",
                    "Example: pull the latest project files from Google Drive"
                  ]
                }
              ]
            },
            {
              type: "callout",
              label: "Use both",
              text: "Combine a skill and a plugin when your process needs information from a connected tool."
            }
          ],
          notes: "Source: OpenAI Academy — Plugins and skills, https://openai.com/academy/codex-plugins-and-skills/. OpenAI Academy's rule of thumb: use a plugin for information from another tool, a skill for your process, and both when the process uses connected information."
        },
        {
          title: "Top 10 AI Safety Tips",
          subtitle: "Simple rules for everyday work",
          blocks: [
            {
              type: "security",
              columns: [
                {
                  label: "10 simple rules",
                  tone: "red",
                  items: [
                    "1. Use approved material — use your company's images instead of copying from Google",
                    "2. Share as little as possible — remove customer names, addresses, and private notes",
                    "3. Keep passwords private — never paste passwords or access codes into an AI chat",
                    "4. Open only what is needed — share one campaign folder, not the whole drive",
                    "5. Check connected apps — know what an AI tool can read, change, or send",
                    "6. Let a person make final decisions — check before sending, publishing, deleting, or spending money",
                    "7. Do not trust every instruction — a file or website may try to trick the AI into sharing information",
                    "8. Check the result — verify names, facts, prices, dates, links, sources, and brand tone",
                    "9. Try it on a copy first — preview the campaign and keep a backup before changing the original",
                    "10. Stop when something feels wrong — disconnect the tool, change exposed passwords, and tell the responsible person"
                  ]
                }
              ]
            }
          ],
          notes: "These rules are for everyday marketing work. The main idea: share less, check access, keep final decisions with a person, review AI results, and stop when something looks wrong."
        },
        {
          title: "Summary: Projects & Plan Mode",
          subtitle: "Workspace and planning words",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Word", "Meaning", "Metaphor"],
              rows: [
                ["Project", "A dedicated workspace with the files, context, and rules for one area of work.", "🏪 Restaurant"],
                ["Access mode", "Controls what the agent may do and when it must ask for approval.", "🔑 Kitchen key"],
                ["Files and folders", "The focused task material shared with Codex as context.", "🧺 Ingredient basket"],
                ["Plan Mode", "Lets Codex gather context, ask questions, and propose a plan before implementation.", "📝 Preparation plan"],
                ["Clarifying question", "Resolves an important missing decision before work starts.", "🙋 Chef asks the guest"],
                ["Implement plan", "Starts the work after the proposed approach has been reviewed.", "▶️ Start cooking"]
              ]
            }
          ]
        },
        {
          title: "Summary: Skills & Tools",
          subtitle: "Reusable processes and capabilities",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Word", "Meaning", "Metaphor"],
              rows: [
                ["Skill", "A reusable playbook that teaches Codex how to perform a focused task.", "📘 Recipe card"],
                ["SKILL.md", "The main file containing the skill's trigger, workflow, and constraints.", "📖 Recipe"],
                ["openai.yaml", "Metadata that controls how a local skill appears and starts.", "🏷️ Recipe label"],
                ["Tool", "A program or interface Codex can use to retrieve information or take action.", "🛠️ Kitchen tool"],
                ["Plugin", "An installable bundle that can provide apps, skills, and connected capabilities.", "🧰 Toolbox"],
                ["App action", "A connected operation that can read, create, update, delete, or send data.", "🔌 Connected appliance"],
                ["Skill + plugin", "A repeatable process that uses information or actions from another tool.", "📘 Recipe + pantry"]
              ]
            }
          ]
        },
        {
          title: "Summary: Safe Work",
          subtitle: "Everyday safety rules and metaphors",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Rule", "What it means", "Metaphor"],
              rows: [
                ["Use least access", "Choose the narrowest access that still allows the task.", "🔑 One kitchen key"],
                ["Share minimum context", "Add only the files and folders the task genuinely needs.", "🥕 Ingredients for one dish"],
                ["Use trusted sources", "Review skills, plugins, instructions, and requested access before use.", "✅ Approved supplier"],
                ["Keep human approval", "A person decides before sending, publishing, deleting, or spending money.", "🧑‍🍳 Head chef signs off"],
                ["Verify the result", "Check facts, names, prices, dates, links, sources, and brand tone.", "👅 Taste test"],
                ["Test on a copy", "Preview changes and keep a backup before touching the original.", "🍽️ Practice plate + spare"],
                ["Stop and report", "Disconnect the tool and tell the responsible person when something looks wrong.", "🛑 Emergency stop"]
              ]
            }
          ]
        }
      ]
    },
    de: {
      meta: {
        htmlLang: "de",
        appTitle: "Hallo Workshop",
        slidesTitle: "Agentic Coding für kreative Teams",
        slidesDay2Title: "Agentic Coding für kreative Teams - Tag 2"
      },
      brand: {
        ariaLabel: "PebbleByte Website"
      },
      theme: {
        darkLabel: "Dunkel",
        lightLabel: "Hell",
        useDarkLabel: "Dunkles Design verwenden",
        useLightLabel: "Helles Design verwenden"
      },
      localeSwitch: {
        ariaLabel: "Sprache wechseln",
        enLabel: "EN",
        deLabel: "DE"
      },
      app: {
        page: {
          eyebrow: "Agentic Coding",
          title: "Hallo Workshop",
          buttonLabel: "Tippe für eine kleine Idee",
          idea: "Nimm ein echtes Workflow-Ärgernis und mach daraus eine kleine lokale App.",
          linkHref: "workshop-slides.html",
          linkLabel: "Seminar-Folien Tag 1",
          secondaryLinkHref: "workshop-slides-day-2.html",
          secondaryLinkLabel: "Seminar-Folien Tag 2"
        },
        ideas: [
          "Baue einen lokalen Kampagnen-Tracker: Aufgaben, Kanäle, Verantwortliche, Deadlines und Notizen in IndexedDB.",
          "Mach einen Excel-Aufräumhelfer: füge chaotische Zeilen ein, markiere Probleme und speichere Regeln lokal.",
          "Erstelle ein Design-Feedback-Board: speichere Screens, Kommentare, Status und Entscheidungen offline.",
          "Baue einen Meeting-Action-Tracker: erfasse Entscheidungen, Verantwortliche, Fälligkeiten und Follow-ups.",
          "Mach einen kleinen Content-Kalender: plane Posts, Kanäle, Entwürfe und Freigabestatus.",
          "Erstelle eine Kunden-Zitatbibliothek: speichere nützliche Formulierungen, Tags, Quellen und Wiederverwendungsnotizen.",
          "Baue eine lokale Asset-Checkliste: tracke Dateien, Formate, Nutzungsrechte und fehlende Exporte.",
          "Mach einen Budget-Plausibilitätscheck: gib Plan- und Ist-Kosten ein und markiere auffällige Zahlen.",
          "Erstelle eine Forschungsnotizen-Datenbank: speichere Beobachtungen, Links, Tags und nächste Schritte.",
          "Baue eine Handoff-Checkliste: speichere wiederkehrende Projektschritte und hake Erledigtes ab."
        ]
      },
      slidesPage: {
        bylineAriaLabel: "{byline} auf LinkedIn",
        exportPdfLabel: "PDF exportieren",
        fallbackLogoAlt: "{name}-Logo",
        keyIdeaLabel: "Kernidee"
      },
      slides: [
        {
          title: "Agentic Coding\nfür kreative Teams",
          subtitle: "Von Chatbots zu Agenten im kreativen Arbeitsalltag",
          cover: true,
          blocks: [],
          notes: "Halte es einfach. Ziel ist, Angst abzubauen und die Neugierlücke zu schließen."
        },
        {
          title: "Lukas Aichbauer",
          subtitle: "Über mich",
          image: {
            src: "assets/lukas-aichbauer.webp",
            alt: "Lukas Aichbauer"
          },
          blocks: [
            {
              type: "profile",
              lines: [
                "Co-Founder @ PebbleByte GmbH",
                "Lecturer @ Technikum Wien"
              ],
              contacts: [
                {
                  type: "email",
                  label: "lukas@pebblebyte.com",
                  href: "mailto:lukas@pebblebyte.com"
                },
                {
                  type: "linkedin",
                  label: "/in/aichbauer",
                  href: "https://www.linkedin.com/in/aichbauer"
                }
              ]
            }
          ]
        },
        {
          title: "Wer seid Ihr?",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Arbeitsbereich",
                  icon: "briefcase",
                  accent: "#5b7cfa",
                  description: "In welchem Bereich arbeitet ihr?"
                },
                {
                  title: "AI-Erfahrung",
                  icon: "brain",
                  accent: "#16b85f",
                  description: "Welche Erfahrung habt ihr mit AI?"
                },
                {
                  title: "Erwartungen",
                  icon: "question-mark",
                  accent: "#f97316",
                  description: "Was erwartet ihr von diesem Workshop?"
                }
              ]
            },
            {
              type: "link",
              href: "https://excalidraw.com/#room=b865e3e0b6ae59e06db4,t2my8u5vBfupgW9RRFdYWw",
              text: "Zum Vorstellungsboard"
            }
          ]
        },
        {
          title: "Wofür nutzen wir KI-Agenten?",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Websites entwickeln",
                  icon: "world",
                  accent: "#5b7cfa",
                  description: "Wir entwickeln und verbessern die DevOpsCycle-Website mit KI-Agenten.",
                  links: [
                    { text: "devopscycle.com", href: "https://devopscycle.com" }
                  ]
                },
                {
                  title: "Vertriebspartner finden",
                  icon: "search",
                  accent: "#16b85f",
                  description: "Wir recherchieren Agenturen in Österreich, Deutschland und der Schweiz, die RevWize über unser Partnermodell verkaufen könnten.",
                  links: [
                    { text: "revwize.com", href: "https://revwize.com" },
                    { text: "Partner-Leads · Excel-Demo", href: "assets/showcases/revwize-partner-leads-demo.xlsx" }
                  ]
                },
                {
                  title: "Marketingmaterial erstellen",
                  icon: "pencil",
                  accent: "#f97316",
                  description: "Wir erstellen Cheat Sheets, Produktinfoseiten und Präsentationen für den Vertriebspartner-Pitch per Prompt.",
                  links: [
                    { text: "Docker Cheat Sheet · Bild", href: "assets/showcases/ultimate-docker-cheat-sheet.webp" },
                    { text: "RevWize-Infoseiten · PDF", href: "assets/showcases/revwize-partner-info-de.pdf" },
                    { text: "Partner-Pitch · PDF", href: "assets/showcases/revwize-partner-pitch.pdf" }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Drei Starter-Ideen",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Marketing",
                  icon: "search",
                  accent: "#5b7cfa",
                  description: "Kundenbewertungen enthalten starke Marketing-Sprache, werden aber selten systematisch analysiert.",
                  metaphor: "Review-Mining-App: sammelt Reviews aus G2, Trustpilot, App Store, Amazon oder Support-Tickets und extrahiert Pain Points, Nutzenversprechen, Einwände und wiederverwendbare Formulierungen."
                },
                {
                  title: "Designer:innen",
                  icon: "pencil",
                  accent: "#16b85f",
                  description: "Desktop-, Tablet- und Mobile-Layouts zu prüfen kostet regelmäßig Zeit und viel manuelle Aufmerksamkeit.",
                  metaphor: "Responsive-Screenshot-Reviewer: URL eingeben, Breakpoint-Screenshots erzeugen und Overflow, kaputte Layouts, winzige Schrift oder abgeschnittene Buttons markieren."
                },
                {
                  title: "Projektmanagement",
                  icon: "clipboard-list",
                  accent: "#f97316",
                  description: "Anforderungen, User Flows und Akzeptanzkriterien bleiben oft unterschiedlich interpretierbar.",
                  metaphor: "Prototype-as-Acceptance-App: macht aus einem Briefing einen Browser-Prototypen mit User Flows, Zuständen, Edge Cases und Akzeptanzkriterien als ausführbare Entwickler:innen-Referenz."
                }
              ]
            },
            {
              type: "link",
              size: "small",
              href: "https://excalidraw.com/#room=ea1db8fc739eedf79aa2,UVhiaqFZYp8kMExx7z64zA",
              text: "Small example"
            }
          ]
        },
        {
          title: "Was wir behandeln",
          subtitle: "Agenda",
          blocks: [
            {
              type: "bullets",
              reveal: false,
              items: [
                "Ankommen, Vorstellung und Starter-Ideen",
                "LLMs, Chatbots, Agenten und Agentic Coding",
                "AI-Agenten-Landschaft und Codex-Setup",
                "Einen guten ersten Use Case finden",
                "Übungen: Input, Schritte, Regeln, Auftragsdesign und Fehlerfälle"
              ]
            }
          ]
        },
        {
          title: "LLM / Chatbot / Agent",
          subtitle: "Vom Gehirn zur Handlung",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Large Language Model (LLM)",
                  icons: [
                    { emoji: "🧠" }
                  ],
                  accent: "#5b7cfa",
                  description: "Computerprogramm",
                  metaphor: "Metapher: Gehirn"
                },
                {
                  title: "Chatbot",
                  icons: [
                    { emoji: "👀" },
                    { emoji: "👂" },
                    { emoji: "👄" }
                  ],
                  accent: "#16b85f",
                  description: "Gesprächsoberfläche",
                  metaphor: "Metapher: Augen, Ohren, Mund"
                },
                {
                  title: "Agent",
                  icons: [
                    { emoji: "🤲" },
                    { emoji: "💪" },
                    { emoji: "🦵" }
                  ],
                  accent: "#f97316",
                  description: "Nutzt Tools und handelt",
                  metaphor: "Metapher: Hände, Arme, Füße"
                }
              ]
            }
          ]
        },
        {
          title: "LLM",
          subtitle: "Input -> LLM (Computerprogramm) -> Output",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              intro: "So kann man sich grob vorstellen, was in einem Large Language Model passiert.",
              columns: [
                {
                  title: "Input",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#5b7cfa",
                      label: "Satzanfang:\n\"Der Himmel ist ...\""
                    }
                  ]
                },
                {
                  title: "LLM",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "dots",
                      color: "#16b85f",
                      label: "\"blau\" -> 0,87"
                    },
                    {
                      icon: "dots",
                      color: "#16b85f",
                      label: "\"bewölkt\" -> 0,09"
                    },
                    {
                      icon: "dots",
                      color: "#16b85f",
                      label: "\"grün\" -> 0,04"
                    }
                  ]
                },
                {
                  title: "Output",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "\"Der Himmel ist blau.\""
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Ganz grob",
              keyIdea: "Es versteht nicht wie ein Mensch. Es nutzt Muster aus vielen Texten, um passende nächste Tokens vorherzusagen. Tokens sind kleine Textstücke: Wortteile, ganze Wörter oder Buchstabenketten."
            }
          ]
        },
        {
          title: "Chatbot",
          subtitle: "Mensch -> Webseite -> Server mit LLM -> Antwort",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              intro: "Ein Chatbot ist eine Webseite oder App, die deine Nachricht an ein LLM schickt und die Antwort anzeigt.",
              columns: [
                {
                  title: "Mensch",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "user",
                      color: "#5b7cfa",
                      label: "Tippt eine Frage\noder Aufgabe"
                    }
                  ]
                },
                {
                  title: "Webseite",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "world",
                      color: "#16b85f",
                      label: "Chatbot-Seite\noder App"
                    }
                  ]
                },
                {
                  title: "Server + LLM",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "brain",
                      color: "#16b85f",
                      label: "Sagt Tokens voraus\nund baut Text"
                    }
                  ]
                },
                {
                  title: "Antwort",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "Computer zeigt\ndie Antwort"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Ganz grob",
              keyIdea: "Der Chatbot ist die Oberfläche und Verbindung. Das LLM läuft meistens auf einem Server; dein Computer zeigt das Gespräch."
            }
          ]
        },
        {
          title: "Agent",
          subtitle: "Ziel -> Agent (LLM + Programme) -> Ergebnis",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              intro: "Ein Agent bekommt ein Ziel und kann Tools benutzen, um Schritte auszuführen.",
              columns: [
                {
                  title: "Ziel",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#5b7cfa",
                      label: "Aufgabe:\n\"Füge zwei Folien hinzu und prüfe das Deck.\""
                    }
                  ]
                },
                {
                  title: "Agent",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "brain",
                      color: "#16b85f",
                      label: "Spricht mit LLM"
                    },
                    {
                      icon: "tool",
                      color: "#16b85f",
                      label: "Nutzt Programme:\nPowerPoint, Google Slides, Browser"
                    },
                    {
                      icon: "file",
                      color: "#16b85f",
                      label: "Liest und ändert Dateien"
                    },
                    {
                      icon: "check",
                      color: "#16b85f",
                      label: "Prüft das Ergebnis"
                    }
                  ]
                },
                {
                  title: "Ergebnis",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "Geändertes Deck\nplus kurze Zusammenfassung"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Ganz grob",
              keyIdea: "Ein Agent hört nicht bei einer Textantwort auf. Er kann planen, handeln, prüfen und weiterarbeiten, bis die Aufgabe erledigt ist."
            }
          ]
        },
        {
          title: "Vom Rezept zum Chef",
          subtitle: "Prompting / Vibe Coding / Agentic Coding",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              intro: "Gleiche KI, aber anders gesteuert: fragen, improvisieren oder Umsetzung führen.",
              columns: [
                {
                  title: "Prompting",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#5b7cfa",
                      label: "Du fragst im Chat\nund bekommst eine Antwort"
                    },
                    {
                      icon: "user",
                      color: "#5b7cfa",
                      label: "Du entscheidest selbst,\nwas du damit machst"
                    },
                    {
                      icon: "book",
                      color: "#5b7cfa",
                      label: "Metapher:\nRezept anfragen"
                    }
                  ]
                },
                {
                  title: "Vibe Coding",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "code",
                      color: "#16b85f",
                      label: "Du beschreibst die App grob\nund kopierst Code hin und her"
                    },
                    {
                      icon: "player-play",
                      color: "#16b85f",
                      label: "Starten, anschauen,\nnach Gefühl anpassen"
                    },
                    {
                      icon: "tool",
                      color: "#16b85f",
                      label: "Metapher:\n\"Irgendwas mit Pasta\""
                    }
                  ]
                },
                {
                  title: "Agentic Coding",
                  layout: "list",
                  size: "mini",
                  variant: "inverted",
                  items: [
                    {
                      icon: "tool",
                      color: "#f97316",
                      label: "Du gibst Ziel, Kontext,\nDateien und Grenzen"
                    },
                    {
                      icon: "clipboard-list",
                      color: "#f97316",
                      label: "Agent plant, ändert,\ntestet und verbessert"
                    },
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Metapher:\nChef in der Küche"
                    }
                  ]
                }
              ],
              keyIdea: "Prompting fragt, Vibe Coding probiert, Agentic Coding lässt mit Kontext und Review ausführen."
            }
          ]
        },
        {
          title: "AI-Agenten-Landschaft",
          subtitle: "Sechs Beispiele mit unterschiedlichen Anwendungsfällen und Gebieten",
          blocks: [
            {
              type: "agentLogos",
              items: [
                {
                  name: "Codex",
                  logo: "assets/agent-logos/codex.svg",
                  alt: "Codex-Logo",
                  accent: "#7cf4c4"
                },
                {
                  name: "Claude Code",
                  logo: "assets/agent-logos/claude-code.svg",
                  alt: "Claude-Code-Logo",
                  accent: "#d97757"
                },
                {
                  name: "Qwen Code",
                  logo: "assets/agent-logos/qwen-code.svg",
                  alt: "Qwen-Code-Logo",
                  accent: "#615ced"
                },
                {
                  name: "Mistral Vibe Code",
                  logo: "assets/agent-logos/mistral-vibe-code.svg",
                  alt: "Mistral-Vibe-Code-Logo",
                  accent: "#ff8205"
                },
                {
                  name: "Zapier Agents",
                  logo: "assets/agent-logos/zapier-agents.svg",
                  alt: "Zapier-Agents-Logo",
                  accent: "#ff4a00"
                },
                {
                  name: "OpenClaw",
                  logo: "assets/agent-logos/openclaw.svg",
                  alt: "OpenClaw-Logo",
                  accent: "#16b85f"
                }
              ]
            }
          ]
        },
        {
          title: "Codex installieren",
          subtitle: "Setup",
          blocks: [
            {
              type: "link",
              href: "https://openai.com/codex/",
              text: "https://openai.com/codex/"
            }
          ]
        },
        {
          title: "Codex zuerst öffnen",
          subtitle: "Start",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-en-de.png",
              alt: "Codex Startbildschirm beim ersten Öffnen"
            }
          ]
        },
        {
          title: "Anmelden",
          subtitle: "Erstes Öffnen",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-click-signin-en-de.png",
              alt: "Codex Anmeldebutton"
            }
          ]
        },
        {
          title: "Anmeldung fortsetzen",
          subtitle: "Erstes Öffnen",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-continue-sign-in-en-de.png",
              alt: "Codex Anmeldung fortsetzen"
            }
          ]
        },
        {
          title: "Anmeldung erfolgreich",
          subtitle: "Erstes Öffnen",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/first-open-codex-sign-in-successful-en-de.png",
              alt: "Codex erfolgreiche Anmeldung"
            }
          ]
        },
        {
          title: "Codex Startseite",
          subtitle: "Nach dem ersten Login",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/how-codex-looks-first-login-de.png",
              alt: "Codex Startseite nach dem ersten Login"
            }
          ]
        },
        {
          title: "Neues Projekt erstellen",
          subtitle: "Projekt-Setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-new-project-de.png",
              alt: "Codex neues Projekt erstellen"
            }
          ]
        },
        {
          title: "Projekt benennen",
          subtitle: "Projekt-Setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-project-name-de.png",
              alt: "Codex Projekt benennen"
            }
          ]
        },
        {
          title: "Projekt auswählen",
          subtitle: "Wo das Projekt ausgewählt wird",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-project-codex-de.png",
              alt: "Codex Projektauswahl"
            }
          ]
        },
        {
          title: "Kleiner Selbstversuch",
          subtitle: "Bevor wir mit eigenen Use Cases starten",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Mini Todo List App",
                  icon: "clipboard-list",
                  accent: "#16b85f",
                  description: "Eine einfache Aufgabenliste mit Hinzufügen, Abhaken, Löschen und leerem Zustand.",
                  metaphor: "Gut, um Formulare, Listen, Zustände und kleine Datenmodelle greifbar zu machen."
                },
                {
                  title: "Landing Page clonen",
                  icon: "world",
                  accent: "#f97316",
                  description: "Eine Landing Page anhand eines Screenshots nachbauen.",
                  metaphor: "Gut, um Layout, Typografie, Farben, Abstände und responsive Details zu trainieren."
                }
              ]
            },
            {
              type: "link",
              size: "small",
              href: "https://excalidraw.com/#room=fae440cad3935c8cd21e,5SXK_ml_xSQCC_sP_CaovQ",
              text: "Ideen"
            }
          ]
        },
        {
          "title": "OpenAI-Modelle im Überblick",
          "subtitle": "GPT-6 & GPT-5.6 · Berufsalltag & kreative Aufgaben · Stand: 16.09.2026",
          "layout": "model-comparison",
          "blocks": [
            {
              "type": "table",
              "scrollLabel": "OpenAI-Modelle, Tokenpreise und Wissensstände",
              "headers": [
                "Modell",
                "Fokus / typische Anwendungen",
                "Kontext (Tokens)",
                "Max. Output (Tokens)",
                "Reasoning-Aufwand",
                "Input (USD / Mio.)",
                "Output (USD / Mio.)",
                "Wissensstand"
              ],
              "rows": [
                [
                  "GPT-6 Astra",
                  "Anspruchsvollste Aufgaben",
                  "1,05 Mio.",
                  "128.000",
                  "low → max",
                  "$10,00",
                  "$50,00",
                  "30.04.2026"
                ],
                [
                  "GPT-5.6 Sol",
                  "Komplexe professionelle Arbeit",
                  "1,05 Mio.",
                  "128.000",
                  "none → max",
                  "$4,00",
                  "$20,00",
                  "16.02.2026"
                ],
                [
                  "GPT-5.6 Terra",
                  "Balance aus Qualität und Kosten",
                  "1,05 Mio.",
                  "128.000",
                  "none → max",
                  "$2,00",
                  "$12,00",
                  "16.02.2026"
                ],
                [
                  "GPT-5.6 Luna",
                  "Günstig bei hohem Volumen",
                  "1,05 Mio.",
                  "128.000",
                  "none → max",
                  "$0,20",
                  "$1,20",
                  "16.02.2026"
                ]
              ]
            },
            {
              "type": "text",
              "text": "Preise in USD pro 1 Mio. Tokens: API-Standardtarif bei kurzem Kontext und ungecachtem Input. Input = gesendetes Material; Output = erzeugte Tokens. Langer Kontext kostet mehr."
            },
            {
              "type": "text",
              "text": "Kontext = was gleichzeitig auf den Schreibtisch des Modells passt: Gespräch, Briefing und Dokumente. Tokens sind kleine Textbausteine; Mio. = Millionen. Wissensstand = Stichtag des eingebauten Modellwissens; neuere Fakten brauchen aktuelle Quellen."
            },
            {
              "type": "text",
              "text": "Reasoning = wie viel Aufwand das Modell ins Durchdenken deiner Aufgabe steckt. Kurz umformulieren braucht wenig; Optionen anhand mehrerer Anforderungen abzuwägen kann von mehr profitieren. Mehr Aufwand kann länger dauern. none = aus; low → max = wenig bis maximal."
            },
            {
              "type": "link",
              "size": "small",
              "href": "https://developers.openai.com/api/docs/models",
              "text": "Quellen: OpenAI-Modellkatalog"
            },
            {
              "type": "link",
              "size": "small",
              "href": "https://developers.openai.com/api/docs/pricing",
              "text": "OpenAI-API-Preise (USD / 1 Mio. Tokens)"
            }
          ],
          "notes": "Ausgewählte API-Modelle; die Verfügbarkeit in der Codex-Modellauswahl kann abweichen. Kontextangaben sind API-Limits. Die Pfeile kürzen die unterstützten Stufen ab. GPT-6 Astra: low, medium, high, xhigh, max. GPT-5.6 Sol/Terra/Luna: none, low, medium, high, xhigh, max. none = aus, low = gering, medium = mittel, high = hoch, xhigh = sehr hoch, max = maximal. Quelle: https://developers.openai.com/api/docs/models\nDie typischen Anwendungen sind Beispiele, abgeleitet aus der offiziellen Modellausrichtung: Astra für anspruchsvollste Aufgaben über viele Schritte, Sol für komplexe professionelle Arbeit, Terra für die Balance aus Leistungsfähigkeit und Kosten, Luna für kostensensitive Aufgaben mit hohem Volumen. Es sind keine exklusiven Fähigkeiten oder benchmarkbasierten Aufgaben-Ranglisten."
        },
        {
          "title": "Wie funktioniert Reasoning?",
          "subtitle": "Ein interner Arbeitsentwurf vor der Antwort",
          "layout": "reasoning-info",
          "blocks": [
            {
              "type": "text",
              "text": "Das Modell erzeugt interne Reasoning-Tokens: Zwischenschritte, die für dich normalerweise unsichtbar bleiben."
            },
            {
              "type": "bullets",
              "label": "Damit kann es",
              "items": [
                "Die Aufgabe in kleinere Schritte zerlegen.",
                "Lösungswege vergleichen und Zwischenergebnisse prüfen.",
                "Einen Ansatz überarbeiten und die Antwort entwickeln."
              ]
            },
            {
              "type": "callout",
              "label": "Reasoning & Agenten",
              "text": "Reasoning ist eine Fähigkeit des Modells, Aufgaben zu durchdenken. Ein Agent nutzt ein Modell und Werkzeuge, um zu handeln, Ergebnisse zu prüfen und weiterzuarbeiten."
            },
            {
              "type": "text",
              "text": "Beispiel: Reasoning hilft, ein Kampagnenbudget abzuwägen. Ein Agent kann zusätzlich die Budgetdatei öffnen und den Plan als Dokument speichern."
            },
            {
              "type": "text",
              "text": "Mehr Reasoning = mehr Rechenaufwand für diese Schritte. Das kann bei schwierigen Aufgaben helfen und länger dauern; richtige Antworten sind nicht garantiert."
            },
            {
              "type": "link",
              "size": "small",
              "href": "https://developers.openai.com/api/docs/guides/reasoning",
              "text": "Quelle: OpenAI – Reasoning"
            }
          ],
          "notes": "Vereinfachte Erklärung des dokumentierten Ablaufs. Interne Reasoning-Tokens sind nicht direkt einsehbar; angezeigte Zusammenfassungen sind nicht der vollständige interne Prozess. Reasoning kann auch zwischen Tool-Aufrufen stattfinden. Quelle: https://developers.openai.com/api/docs/guides/reasoning"
        },
        {
          title: "Modell auswählen",
          subtitle: "Wo das Modell ausgewählt wird",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-llm-model-de.png",
              alt: "Codex Modellauswahl"
            }
          ]
        },
        {
          title: "Workspace auswählen",
          subtitle: "Wo der Agent arbeitet",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-where-agent-works-de.png",
              alt: "Codex Workspace-Auswahl"
            }
          ]
        },
        {
          title: "Plugins einbinden",
          subtitle: "Verfügbare Tools",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/include-plugins-de.png",
              alt: "Codex Plugin-Auswahl"
            }
          ]
        },
        {
          title: "Was ist eine Automation?",
          subtitle: "Aufgaben nach Zeitplan",
          layout: "automation",
          blocks: [
            {
              type: "automationFlow",
              intro: "Eine Automation startet eine festgelegte Aufgabe automatisch, sobald ihr Auslöser eintritt.",
              example: "Beispiel: ein Wochenbericht",
              steps: [
                { icon: "🕘", label: "Zeitplan", value: "09:00", detail: "Jeden Montag", tone: "schedule" },
                { icon: "⚙️", label: "Aufgabe", value: "Projektstand zusammenfassen", detail: "Der Agent folgt deinen Anweisungen", tone: "task" },
                { icon: "📋", label: "Ergebnis", value: "Wochenbericht", detail: "Bereit zum Prüfen", tone: "result" }
              ],
              repeat: "Nächsten Montag um 09:00 wiederholen",
              takeaway: "Einmal einrichten. Bei jedem Termin automatisch ausführen."
            }
          ],
          notes: "Die Uhrzeit ist ein Beispiel, keine tatsächlich laufende Automation. Auslöser, gespeicherte Anweisungen und Ergebnis erklären. Der Rückpfeil bedeutet einen neuen Durchlauf zum nächsten Termin, keine dauerhaft laufende Aufgabe. Andere Automationen können statt nach Zeitplan auch durch ein Ereignis starten."
        },
        {
          title: "Automations erstellen",
          subtitle: "Automation-Setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-automations-1-de.png",
              alt: "Codex Automations erstellen"
            }
          ]
        },
        {
          title: "Automations konfigurieren",
          subtitle: "Automation-Setup",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-automations-2-de.png",
              alt: "Codex Automations konfigurieren"
            }
          ]
        },
        {
          title: "Usage finden",
          subtitle: "Account Usage",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/where-to-find-usage-1-de.png",
              alt: "Codex Usage Navigation"
            }
          ]
        },
        {
          title: "Usage Details",
          subtitle: "Account Usage",
          layout: "codex-screenshot",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/where-to-find-useage-2-de.png",
              alt: "Codex Usage Details"
            }
          ]
        },

        {
          title: "Welche Use Cases eignen sich für den Einstieg?",
          subtitle: "Klein starten, echten Nutzen erzeugen",
          blocks: [
            {
              type: "table",
              revealTable: true,
              revealRows: true,
              headers: ["Ein guter erster Use Case ist", "Woran man es erkennt"],
              rows: [
                ["häufig", "die Aufgabe kommt regelmäßig vor"],
                ["zeitaufwendig", "sie bindet spürbar Aufmerksamkeit"],
                ["klar prüfbar", "ein gutes Ergebnis ist erkennbar"],
                ["risikoarm", "Fehler lassen sich leicht entdecken und korrigieren"],
                ["kontextreich", "Beispiele, Dateien und Regeln sind vorhanden"]
              ]
            }
          ]
        },
        {
          title: "Use-Case-Board",
          subtitle: "Excalidraw",
          blocks: [
            {
              type: "link",
              href: "https://excalidraw.com/#room=3f7fb564ea3a699c6fd3,sDK2_w9L9RRcSUgP1PYFTA",
              text: "Find your usecase"
            }
          ]
        },
        {
          title: "Übung 1: Input und Output definieren",
          subtitle: "Dauer: 5 Minuten",
          blocks: [
            {
              type: "bullets",
              label: "Fragen",
              items: [
                "Was bekommt das Programm?",
                "In welchem Format?",
                "Was soll es erzeugen?",
                "Wie soll das Ergebnis aussehen?"
              ]
            },
            {
              type: "table",
              revealTable: true,
              revealRows: true,
              headers: ["Input", "Output"],
              rows: [
                ["Datei", "Zusammenfassung oder Report"],
                ["Notizen", "Aufgabenliste"],
                ["URL", "Screenshots und Fehler"],
                ["CSV-Tabelle", "Themen und Beispiele"]
              ]
            },
            {
              type: "callout",
              label: "Beispiel Coffee-Shop-Landing-Page",
              text: "Input: Kampagnen-Briefing, Shop-Fotos, Speisekarten-CSV und Brand-Notizen. Output: Landing-Page-Struktur, Sektionstexte, Angebotsblöcke, Bildvorschläge und CTA-Varianten."
            }
          ]
        },
        {
          title: "Übung 2: Den Prozess zerlegen",
          subtitle: "Dauer: 5 Minuten",
          blocks: [
            {
              type: "text",
              text: "Ziel: Die Aufgabe in kleine, programmierbare Schritte aufteilen."
            },
            {
              type: "ordered",
              label: "Allgemeiner Prozessablauf",
              revealItems: true,
              items: [
                "Input auswählen",
                "Input öffnen oder lesen",
                "relevante Informationen extrahieren",
                "Regeln anwenden",
                "Probleme oder Ergebnisse sammeln",
                "Output erstellen"
              ]
            },
            {
              type: "callout",
              label: "Beispiel Coffee-Shop-Landing-Page",
              text: "Kampagnen-Briefing lesen, Angebot und Tonalität extrahieren, Seitensektionen auswählen, Texte pro Sektion schreiben, Speisekarte und Bildplatzhalter einsetzen und HTML-Seite exportieren."
            }
          ]
        },
        {
          title: "Übung 3: Regeln und Beispiele sammeln",
          subtitle: "Dauer: 5 Minuten",
          blocks: [
            {
              type: "text",
              text: "Ziel: Implizites Wissen sichtbar machen."
            },
            {
              type: "bullets",
              label: "Sammelt",
              items: [
                "feste Regeln",
                "gute Beispiele",
                "schlechte Beispiele",
                "Ausnahmen",
                "typische Fehler"
              ]
            },
            {
              type: "bullets",
              label: "Allgemeine Beispiele",
              items: [
                "Pflichtfelder müssen vorhanden sein",
                "verbotene Wörter oder Platzhalter dürfen nicht vorkommen",
                "das Ausgabeformat folgt einem bekannten Beispiel",
                "Ausnahmen werden explizit aufgelistet",
                "typische Fehler sollen leicht erkennbar sein"
              ]
            },
            {
              type: "callout",
              label: "Beispiel Coffee-Shop-Landing-Page",
              text: "Die Headline nennt das saisonale Getränk, der CTA lautet \"Tisch reservieren\" oder \"Vorbestellen\", Öffnungszeiten sind above the fold sichtbar, kein Platzhaltertext bleibt stehen und das Original-Briefing wird nicht verändert."
            }
          ]
        },
        {
          title: "Zusammenfassung: Basics",
          subtitle: "Wichtige Wörter und Metaphern",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Wort", "Bedeutung", "Metapher"],
              rows: [
                ["LLM", "Ein Sprachmodell, das aus Input passende nächste Textstücke vorhersagt.", "🧠 Gehirn"],
                ["Token", "Ein kleines Textstück: Wortteil, ganzes Wort oder Zeichenkette.", "🧩 Text-Baustein"],
                ["Chatbot", "Eine Oberfläche, die Nachrichten an ein LLM schickt und Antworten zeigt.", "👀👂👄 Augen, Ohren, Mund"],
                ["Agent", "Ein LLM-basiertes System, das Tools nutzen, handeln, prüfen und weitermachen kann.", "🤲💪🦵 Hände, Arme, Füße"],
                ["Prompting", "Im Chat fragen und selbst entscheiden, was man mit der Antwort macht.", "📖 Rezept anfragen"],
                ["Vibe Coding", "Software grob beschreiben, ausprobieren und nach Gefühl anpassen.", "🍝 \"Irgendwas mit Pasta\""],
                ["Agentic Coding", "Ziel, Kontext, Dateien, Regeln und Grenzen geben, damit ein Agent umsetzt.", "🍲 Chef in der Küche"]
              ]
            }
          ]
        },
        {
          title: "Zusammenfassung: Codex",
          subtitle: "Setup-Wörter und Metaphern",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Wort", "Bedeutung", "Metapher"],
              rows: [
                ["Codex", "Eine Agentic-Coding-Umgebung, die mit deinen Projektdateien arbeiten kann.", "🧑‍🍳 Chefkoch"],
                ["Projekt", "Der Ort, an dem deine Arbeit in Codex organisiert ist.", "🏪 Restaurant"],
                ["Modell", "Das ausgewählte AI-Gehirn, das Codex für die Aufgabe nutzt.", "🎓 Gehirn des Chefs"],
                ["Workspace", "Der Projektordner, in dem der Agent Dateien lesen und ändern darf.", "🍳 Küche"],
                ["Tool", "Programme und Apps, die der Agent nutzen kann.", "🛠️ Küchenwerkzeuge"],
                ["Plugin", "Ein spezielles Programm, das für Codex gemacht ist.", "🧰 Spezielles Küchenwerkzeug"],
                ["Automation", "Eine wiederholbare Agenten-Aufgabe, die über einen Auslöser laufen kann.", "⏲️ Küchentimer"],
                ["Usage", "Der Account-Bereich, in dem du siehst, wie viel Codex genutzt wurde.", "💸 Gehalt für den Koch"]
              ]
            }
          ]
        },
        {
          title: "Zusammenfassung: Use Cases",
          subtitle: "Anweisungen und Metaphern",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Wort", "Bedeutung", "Metapher"],
              rows: [
                ["Use Case", "Eine konkrete Aufgabe, bei der AI im Workflow Nutzen erzeugt.", "📋 Gericht auf der Karte"],
                ["Input", "Das Material, das das Programm bekommt: Datei, Notizen, URL oder Tabelle.", "🥕 Zutaten"],
                ["Output", "Das Ergebnis, das das Programm erzeugen soll: Report, Liste, Screenshots oder App.", "🍽️ Fertiges Gericht"],
                ["Regel", "Eine feste Bedingung, die das Ergebnis erfüllen muss.", "📏 Kochregel"],
                ["Prüfkriterien", "Woran man erkennt, dass die Aufgabe gut genug erledigt ist.", "👅 Geschmackstest"],
                ["Fehlerfall", "Eine Situation, in der Input oder Ergebnis fehlt, falsch oder unklar ist.", "❓ Fehlende Zutat"],
                ["Freigabe durch Menschen", "Eine Entscheidung, die bei Menschen bleibt, z. B. veröffentlichen oder Daten löschen.", "✅ Chef:in gibt frei"]
              ]
            },
            {
              type: "table",
              headers: ["Guter Use Case ist", "Woran man es erkennt", "Metapher"],
              rows: [
                ["häufig", "die Aufgabe kommt regelmäßig vor", "🔁 Regelmäßige Bestellung"],
                ["zeitaufwendig", "sie bindet spürbar Aufmerksamkeit", "⏳ Lange Vorbereitung"],
                ["klar prüfbar", "ein gutes Ergebnis ist erkennbar", "🔍 Qualitätscheck"],
                ["risikoarm", "Fehler lassen sich leicht entdecken und korrigieren", "🛟 Sicherheitsnetz"],
                ["kontextreich", "Beispiele, Dateien und Regeln sind vorhanden", "🗂️ Rezeptarchiv"]
              ]
            }
          ]
        }
      ],
      slidesDay2: [
        {
          title: "Agentic Coding\nTag 2",
          subtitle: "Projekte, Skills, Tools und sichere Grenzen",
          cover: true,
          blocks: [],
          notes: "Verbinde die Agenten-Grundlagen von gestern mit den praktischen Codex-Bausteinen von heute."
        },
        {
          title: "Übung 4: Der Fehlerfall",
          subtitle: "Dauer: 5 Minuten",
          blocks: [
            {
              type: "text",
              text: "Ziel: Nicht nur den Idealzustand betrachten."
            },
            {
              type: "bullets",
              label: "Definiert mindestens drei allgemeine Fehlerzustände",
              items: [
                "Datei fehlt",
                "Format ist falsch",
                "Eingabe ist leer",
                "URL ist nicht erreichbar",
                "Pflichtspalten fehlen",
                "Ergebnis ist uneindeutig",
                "mehrere Regeln widersprechen sich"
              ]
            },
            {
              type: "callout",
              label: "Beispiel Coffee-Shop-Landing-Page",
              text: "Wenn in der Speisekarten-CSV Preise fehlen, soll das Programm die betroffenen Getränke markieren, die Seite weiter erzeugen und eine Warnung im Report anzeigen."
            },
            {
              type: "callout",
              label: "Frage",
              text: "Was soll das Programm in diesem Fall tun?"
            }
          ]
        },
        {
          title: "Übung 5: Den ersten LLM-Prompt schreiben",
          subtitle: "Dauer: 10 Minuten",
          blocks: [
            {
              type: "prompt",
              label: "Vorlage",
              text: "Baue eine lokale Anwendung, die [Ziel] unterstützt.\nAls Input verwendet sie [Input].\nDas Programm soll:\n- …\n- …\n- …\nBeachte folgende Regeln: [Regeln].\nDas Ergebnis soll [Output] sein.\nDie Aufgabe ist fertig, wenn [Prüfkriterien] erfüllt sind.\nDas Programm darf nicht [Grenzen]."
            },
            {
              type: "callout",
              label: "Coffee-Shop-Landing-Page",
              text: "Baue eine lokale App, die aus einem saisonalen Kaffee-Kampagnen-Briefing eine responsive Landing-Page-Vorschau mit Headline, Angebot, Menü-Teaser, Fotos, Öffnungszeiten und CTA erstellt."
            }
          ]
        },
        {
          title: "Projekt / Skill / Tool",
          subtitle: "Vom Arbeitsraum zur Handlung",
          blocks: [
            {
              type: "conceptCards",
              items: [
                {
                  title: "Projekt",
                  icons: [
                    { emoji: "🏪" }
                  ],
                  accent: "#5b7cfa",
                  description: "Arbeitsraum mit Kontext",
                  metaphor: "Metapher: Restaurant"
                },
                {
                  title: "Skill",
                  icons: [
                    { emoji: "📘" }
                  ],
                  accent: "#16b85f",
                  description: "Wiederverwendbare Anleitung",
                  metaphor: "Metapher: Rezeptkarte"
                },
                {
                  title: "Tool",
                  icons: [
                    { emoji: "🛠️" }
                  ],
                  accent: "#f97316",
                  description: "Kann etwas ausführen",
                  metaphor: "Metapher: Küchenwerkzeug"
                }
              ]
            }
          ]
        },
        {
          title: "Projekt",
          subtitle: "Was es ist · Warum es hilft · Wie du es nutzt",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "Ein Projekt ist ein eigener Arbeitsbereich, der Dateien, Kontext und Regeln für ein Vorhaben zusammenführt.",
              columns: [
                {
                  title: "Was ist es?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "folder",
                      color: "#5b7cfa",
                      label: "Dateien, Kontext\nund Projektregeln"
                    }
                  ]
                },
                {
                  title: "Warum nutzen?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "message",
                      color: "#16b85f",
                      label: "Hält den Agenten\nbei der richtigen Aufgabe"
                    },
                    {
                      icon: "lock",
                      color: "#16b85f",
                      label: "Trennt Projekte\nund sensible Daten"
                    }
                  ]
                },
                {
                  title: "Wie nutzen?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Zuerst das passende\nProjekt auswählen"
                    },
                    {
                      icon: "file",
                      color: "#f97316",
                      label: "Nur hinzufügen, was\ndie Aufgabe braucht"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Sicherheit",
              keyIdea: "Halte Secrets, Kundendaten, Produktionsdateien und private Notizen außerhalb des Projekts, außer die Aufgabe braucht sie wirklich."
            }
          ]
        },
        {
          title: "Neues Projekt erstellen",
          subtitle: "Schritt 1 von 3 — Einen eigenen Workspace starten",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-new-project-de.png",
              alt: "Ein neues Projekt in Codex erstellen"
            }
          ]
        },
        {
          title: "Projekt eindeutig benennen",
          subtitle: "Schritt 2 von 3 — Den Kontext erkennbar machen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-project-name-de.png",
              alt: "Ein neues Projekt in Codex benennen"
            }
          ]
        },
        {
          title: "Projekt für die Aufgabe auswählen",
          subtitle: "Schritt 3 von 3 — Im richtigen Kontext arbeiten",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/select-project-codex-de.png",
              alt: "Ein Projekt in Codex auswählen"
            }
          ]
        },
        {
          title: "Gib dem Agenten nur den nötigen Zugriff",
          subtitle: "Starte mit dem sichersten Freigabemodus für das Projekt",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/project-and-agent-security-1-de.png",
              alt: "Codex-Freigabemenü mit Genehmigung anfordern, Für mich genehmigen und Vollzugriff"
            }
          ],
          notes: "Wähle den engsten Freigabemodus, mit dem der Agent die Aufgabe noch erledigen kann. Nutze Genehmigung anfordern, wenn externe Dateien oder Internetzugriff sensibel sind. Vollzugriff nur verwenden, wenn er wirklich nötig und der Workspace sicher ist."
        },
        {
          title: "Planmodus",
          subtitle: "Erst verstehen · dann planen · danach umsetzen",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "Im Planmodus sammelt Codex Kontext, stellt Rückfragen und erstellt vor der Umsetzung einen besseren Plan.",
              columns: [
                {
                  title: "Verstehen",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "search",
                      color: "#5b7cfa",
                      label: "Sammelt relevanten\nKontext"
                    },
                    {
                      icon: "question-mark",
                      color: "#5b7cfa",
                      label: "Stellt klärende\nRückfragen"
                    }
                  ]
                },
                {
                  title: "Planen",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "clipboard-list",
                      color: "#16b85f",
                      label: "Schlägt klare\nUmsetzungsschritte vor"
                    },
                    {
                      icon: "check",
                      color: "#16b85f",
                      label: "Macht Annahmen\nsichtbar"
                    }
                  ]
                },
                {
                  title: "Nutzen bei",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "stack-2",
                      color: "#f97316",
                      label: "Komplexen oder\nmehrstufigen Aufgaben"
                    },
                    {
                      icon: "message",
                      color: "#f97316",
                      label: "Unklaren\nAnforderungen"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Kernidee",
              keyIdea: "Einigt euch auf den Weg, bevor Codex Dateien verändert."
            }
          ],
          notes: "Das Codex-Handbuch empfiehlt den Planmodus für komplexe, unklare oder schwer zu beschreibende Aufgaben. Codex sammelt Kontext, stellt Rückfragen und bereitet vor der Umsetzung einen besseren Plan vor."
        },
        {
          title: "Planmodus einschalten",
          subtitle: "Schritt 1 von 3 — + öffnen und Planmodus wählen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/planmode-de-1.png",
              alt: "Planmodus ist im Hinzufügen-Menü von Codex hervorgehoben"
            }
          ],
          notes: "Öffne das Hinzufügen-Menü und wähle Planmodus, bevor du einen komplexen Prompt abschickst. In unterstützten Codex-Oberflächen lässt sich der Planmodus auch mit /plan oder Umschalt+Tab ein- und ausschalten."
        },
        {
          title: "Dateien und Ordner hinzufügen",
          subtitle: "Schritt 1 von 3 — + öffnen und Dateien und Ordner wählen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/add-documents-and-folders-de-1.png",
              alt: "Dateien und Ordner ist im Hinzufügen-Menü von Codex hervorgehoben"
            }
          ],
          notes: "Füge nur die Dateien oder Ordner hinzu, die Codex für die Aufgabe braucht. Teile nicht den gesamten Drive oder unbeteiligtes Kundenmaterial."
        },
        {
          title: "Relevantes Material auswählen",
          subtitle: "Schritt 2 von 3 — Datei oder Ordner auswählen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/add-documents-and-folders-2-en-de.png",
              alt: "System-Dateiauswahl, die aus Codex geöffnet wurde"
            }
          ],
          notes: "Wähle den kleinsten sinnvollen Umfang. Ein fokussiertes Briefing oder ein Projektordner gibt Codex besseren Kontext und reduziert versehentlich geteilte Daten."
        },
        {
          title: "Anhang vor dem Senden prüfen",
          subtitle: "Schritt 3 von 3 — Den richtigen Kontext bestätigen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/add-documents-and-folders-3-de.png",
              alt: "Eine PDF-Datei ist an einen Codex-Prompt angehängt"
            }
          ],
          notes: "Prüfe die Anhänge, bevor du die Aufgabe startest. Entferne alles, was nicht dazugehört, sensibel ist oder nicht mehr gebraucht wird."
        },
        {
          title: "Klärende Rückfragen beantworten",
          subtitle: "Schritt 2 von 3 — Wichtige Entscheidungen vor der Umsetzung klären",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/planmode-clarifiying-de-2.png",
              alt: "Codex stellt im Planmodus eine klärende Multiple-Choice-Frage"
            }
          ],
          notes: "Der Planmodus kann gezielte Rückfragen stellen, wenn eine wichtige Anforderung unklar ist. Wähle eine Option oder gib eine eigene Antwort, damit Codex den Plan auf den richtigen Annahmen aufbaut."
        },
        {
          title: "Plan umsetzen",
          subtitle: "Schritt 3 von 3 — Plan prüfen und Umsetzung bestätigen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/planmode-implement-1-de.png",
              alt: "Codex bittet um Bestätigung, den fertigen Plan zu implementieren"
            }
          ],
          notes: "Prüfe Zusammenfassung, Umfang und Annahmen des Plans, bevor du fortfährst. Wähle Ja, diesen Plan implementieren nur, wenn der vorgeschlagene Weg zur Aufgabe passt."
        },
        {
          title: "Skill",
          subtitle: "Was es ist · Warum es hilft · Wie du es nutzt",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "Ein Skill ist eine wiederverwendbare Arbeitsanleitung, die Codex eine bestimmte Art von Aufgabe beibringt.",
              columns: [
                {
                  title: "Was ist es?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "book",
                      color: "#5b7cfa",
                      label: "Anweisungen,\nReferenzen und Checks"
                    }
                  ]
                },
                {
                  title: "Warum nutzen?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "trending-up",
                      color: "#16b85f",
                      label: "Konsistentere\nErgebnisse"
                    },
                    {
                      icon: "message",
                      color: "#16b85f",
                      label: "Weniger wiederholte\nPrompts"
                    }
                  ]
                },
                {
                  title: "Wie nutzen?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "clipboard-list",
                      color: "#f97316",
                      label: "Für wiederkehrende\nAufgaben einsetzen"
                    },
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "$skill-name nennen\noder Codex wählen lassen"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Sicherheit",
              keyIdea: "Lies einen Skill, bevor du ihm vertraust. Nutze fokussierte Skills aus vertrauenswürdigen Quellen und prüfe, welche Tools, Dateien oder externen Dienste sie erwarten."
            }
          ]
        },
        {
          title: "Skill mit Skill Creator erstellen",
          subtitle: "Skill auswählen und Aufgabe beschreiben",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-de.png",
              alt: "Skill Creator in Codex auswählen, indem $skill in das Prompt-Feld eingegeben wird"
            }
          ],
          notes: "Gib $skill ein, wähle Skill Creator und beschreibe eine fokussierte Aufgabe, ihren Trigger und das erwartete Ergebnis. Prüfe und teste den erzeugten Skill vor der Nutzung."
        },
        {
          title: "Beschreibe, was der Skill tun soll",
          subtitle: "Name, Trigger und klare Grenzen festlegen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-2-de.png",
              alt: "Beispiel-Prompt zum Erstellen eines lokalen Frontend-Entwickler-Skills mit Skill Creator"
            }
          ],
          notes: "Ein guter Auftrag nennt den Skill, erklärt, wann er aktiv werden soll, und beschreibt die Standards oder Grenzen, die er einhalten muss."
        },
        {
          title: "Öffne den erstellten Skill",
          subtitle: "Skill Creator erstellt und validiert die lokalen Dateien",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-3-de.png",
              alt: "Validiertes Ergebnis eines lokalen Skills in Codex mit hervorgehobener SKILL.md"
            }
          ],
          notes: "Prüfe nach der Erstellung, ob Codex den Skill als gültig meldet, und öffne anschließend die erzeugten Dateien."
        },
        {
          title: "Prüfe die Skill-Metadaten",
          subtitle: "openai.yaml steuert Darstellung und Start des Skills",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-4-de.png",
              alt: "Erzeugte agents/openai.yaml mit Anzeigename, Kurzbeschreibung und Standard-Prompt"
            }
          ],
          notes: "Prüfe Anzeigename, Kurzbeschreibung und Standard-Prompt in agents/openai.yaml. Der Skill soll leicht erkennbar und nutzbar sein."
        },
        {
          title: "Prüfe die Skill-Anweisungen",
          subtitle: "SKILL.md definiert Trigger, Workflow und Grenzen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/create-skill-5-de.png",
              alt: "Erzeugte SKILL.md mit Trigger-Beschreibung, Vorgaben und Workflow"
            }
          ],
          notes: "Lies die vollständige SKILL.md vor der Nutzung. Prüfe, ob der Trigger präzise und die Anweisungen geordnet, fokussiert und testbar sind."
        },
        {
          title: "Ein guter Skill ist fokussiert und testbar",
          subtitle: "Lokaler Pflichtkern, optionale Unterstützung",
          layout: "skill-anatomy",
          blocks: [
            {
              type: "skillAnatomy",
              treeLabel: "Ordnerstruktur",
              tree: "my-skill/\n├── SKILL.md                 Pflicht\n├── agents/\n│   └── openai.yaml          Pflicht für lokale Skills\n├── references/\n│   └── some.md              optional: Detailkontext\n└── scripts/                 optional: deterministische Helfer",
              checklistLabel: "Qualitätscheck",
              items: [
                "Eine klar abgegrenzte Aufgabe",
                "Präzise Trigger-Beschreibung",
                "Explizite Ein- und Ausgaben",
                "Imperative, geordnete Schritte",
                "Beispiele und Checks nur, wenn nützlich"
              ]
            },
            {
              type: "callout",
              label: "Regel",
              text: "Lokaler Standard: SKILL.md und agents/openai.yaml gehören immer dazu. Referenzen und Skripte ergänzt du nur, wenn der Workflow sie braucht."
            }
          ],
          notes: "Für lokale Workshop-Skills ist agents/openai.yaml neben SKILL.md verpflichtend. Im allgemeinen Codex-Skill-Format ist diese Metadatendatei optional. Separate Referenzen unterstützen Progressive Disclosure."
        },
        {
          title: "Tool",
          subtitle: "Was es ist · Warum es hilft · Wie du es nutzt",
          layout: "agent-flow",
          blocks: [
            {
              type: "agentFlow",
              equalHeight: true,
              equalColumns: true,
              showArrows: false,
              intro: "Ein Tool ist ein Programm oder eine Schnittstelle, die Codex nutzen kann, um Informationen abzurufen oder eine Aufgabe auszuführen.",
              columns: [
                {
                  title: "Was ist es?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "tool",
                      color: "#5b7cfa",
                      label: "Programme: Browser,\nTerminal, Excel"
                    },
                    {
                      icon: "world",
                      color: "#5b7cfa",
                      label: "Dienste: GitHub,\nGoogle Drive, Slack"
                    }
                  ]
                },
                {
                  title: "Warum nutzen?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "search",
                      color: "#16b85f",
                      label: "Informationen suchen,\nlesen und prüfen"
                    },
                    {
                      icon: "code",
                      color: "#16b85f",
                      label: "Aufgaben direkt in\nanderen Programmen erledigen"
                    }
                  ]
                },
                {
                  title: "Wie nutzen?",
                  layout: "list",
                  size: "mini",
                  items: [
                    {
                      icon: "tool",
                      color: "#f97316",
                      label: "Passendes Tool für\ndie Aufgabe auswählen"
                    },
                    {
                      icon: "check",
                      color: "#f97316",
                      label: "Zugriff prüfen und\nErgebnis kontrollieren"
                    }
                  ]
                }
              ],
              keyIdeaLabel: "Sicherheit",
              keyIdea: "Tools machen Risiko real. Prüfe alles, was löscht, veröffentlicht, Nachrichten sendet, Software installiert, externe Dienste nutzt oder Daten teilt."
            }
          ]
        },
        {
          title: "Plugin installieren",
          subtitle: "Plugins öffnen -> Zugriffe prüfen -> Installieren",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/include-plugins-de.png",
              alt: "Vollständiges Codex Plugin-Verzeichnis mit Plugin-Navigation, verfügbaren Plugins, Installieren-Schaltfläche und Datenzugriffshinweis"
            }
          ],
          notes: "Plugins sind installierbare Pakete. Prüfe die angeforderten Zugriffe vor der Installation. In der CLI: /plugins ausführen, aus einem konfigurierten Marketplace installieren und eine neue Session starten."
        },
        {
          title: "Öffne vor der Installation die Plugin-Details",
          subtitle: "Wähle das Plugin aus, das du prüfen möchtest",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-1-de.png",
              alt: "Google Calendar ist vor der Installation im Codex Plugin-Verzeichnis hervorgehoben"
            }
          ],
          notes: "Installiere nicht allein aus der Verzeichnisansicht. Öffne die Plugin-Details, damit du den Inhalt des Pakets und seine Zugriffe prüfen kannst."
        },
        {
          title: "Prüfe den Inhalt des Plugins",
          subtitle: "Kontrolliere jede enthaltene App und jeden Skill",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-2-de.png",
              alt: "Google-Calendar-Plugin mit hervorgehobener App und fünf enthaltenen Skills"
            }
          ],
          notes: "Ein Plugin kann Apps und Skills bündeln. Prüfe jede enthaltene Fähigkeit und verlasse dich nicht nur auf den Namen oder die Kurzbeschreibung des Plugins."
        },
        {
          title: "Prüfe die Aktionen der App",
          subtitle: "Achte besonders auf Schreib- und Löschaktionen",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-3-de.png",
              alt: "Aktionsliste der Google-Calendar-App mit Erstellen, Löschen, Antworten und Aktualisieren von Terminen"
            }
          ],
          notes: "Prüfe, welche Aktionen nur Informationen lesen und welche Daten erstellen, ändern, löschen oder senden können. Erlaube nur Zugriffe, die deine Aufgabe wirklich benötigt."
        },
        {
          title: "Lies den enthaltenen Skill vor der Nutzung",
          subtitle: "Prüfe Workflow, Grenzen und erwartetes Ergebnis",
          layout: "codex-screenshot-full",
          blocks: [
            {
              type: "screenshot",
              src: "assets/codex-pictures/check-plugin-access-skills-4-de.png",
              alt: "Details des Google-Calendar-Skills mit Übersicht, bevorzugten Ergebnissen und Workflow"
            }
          ],
          notes: "Lies die Skill-Anweisungen, bevor du ihnen vertraust. Prüfe, ob der Workflow relevant, die Grenzen sicher und die erwarteten Ergebnisse für deine Aufgabe geeignet sind."
        },
        {
          title: "Skill oder Plugin? Der Bedarf entscheidet",
          subtitle: "Prozess = Skill · Verbundenes Tool oder Information = Plugin",
          blocks: [
            {
              type: "security",
              columns: [
                {
                  label: "Skill",
                  tone: "orange",
                  items: [
                    "Bringt Codex euren wiederholbaren Prozess bei",
                    "Nutzen für konsistente Regeln, Reihenfolge, Ton oder Format",
                    "$ drücken und den Skill auswählen",
                    "Beispiel: Wochenupdate im Format eures Teams erstellen"
                  ]
                },
                {
                  label: "Plugin",
                  tone: "green",
                  items: [
                    "Verbindet Codex mit anderen Tools und Informationen",
                    "Nutzen für Google Drive, E-Mail oder einen anderen Dienst",
                    "Plugins öffnen, Zugriff prüfen und installieren",
                    "Beispiel: aktuelle Projektdateien aus Google Drive abrufen"
                  ]
                }
              ]
            },
            {
              type: "callout",
              label: "Beides nutzen",
              text: "Kombiniere Skill und Plugin, wenn dein Prozess Informationen aus einem verbundenen Tool braucht."
            }
          ],
          notes: "Quelle: OpenAI Academy — Plugins and skills, https://openai.com/academy/codex-plugins-and-skills/. Die Faustregel: Plugin für Informationen aus einem anderen Tool, Skill für den eigenen Prozess und beides, wenn der Prozess verbundene Informationen nutzt."
        },
        {
          title: "Top 10 AI-Sicherheitstipps",
          subtitle: "Einfache Regeln für den Arbeitsalltag",
          blocks: [
            {
              type: "security",
              columns: [
                {
                  label: "10 einfache Regeln",
                  tone: "red",
                  items: [
                    "1. Nur freigegebenes Material nutzen — Firmenbilder statt kopierter Google-Bilder verwenden",
                    "2. So wenig wie möglich teilen — Kundennamen, Adressen und private Notizen entfernen",
                    "3. Passwörter geheim halten — Passwörter oder Zugangscodes nie in einen AI-Chat kopieren",
                    "4. Nur Nötiges öffnen — einen Kampagnenordner statt des ganzen Drives freigeben",
                    "5. Verbundene Apps prüfen — wissen, was ein AI-Tool lesen, ändern oder senden darf",
                    "6. Letzte Entscheidungen bei Menschen lassen — vor Senden, Veröffentlichen, Löschen oder Geldausgeben prüfen",
                    "7. Nicht jeder Anweisung vertrauen — eine Datei oder Website kann die AI zum Teilen von Informationen verleiten",
                    "8. Ergebnis kontrollieren — Namen, Fakten, Preise, Daten, Links, Quellen und Markenton prüfen",
                    "9. Zuerst mit einer Kopie testen — Kampagne in der Vorschau prüfen und das Original sichern",
                    "10. Stoppen, wenn etwas komisch wirkt — Tool trennen, offengelegte Passwörter ändern und verantwortliche Person informieren"
                  ]
                }
              ]
            }
          ],
          notes: "Diese Regeln gelten für den Marketing-Alltag. Die Kernidee: weniger teilen, Zugriffe prüfen, letzte Entscheidungen bei Menschen lassen, AI-Ergebnisse kontrollieren und bei Auffälligkeiten stoppen."
        },
        {
          title: "Zusammenfassung: Projekte & Planmodus",
          subtitle: "Wörter rund um Workspace und Planung",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Wort", "Bedeutung", "Metapher"],
              rows: [
                ["Projekt", "Ein eigener Workspace mit Dateien, Kontext und Regeln für einen Arbeitsbereich.", "🏪 Restaurant"],
                ["Zugriffsmodus", "Steuert, was der Agent tun darf und wann er eine Freigabe braucht.", "🔑 Küchenschlüssel"],
                ["Dateien und Ordner", "Das fokussierte Aufgabenmaterial, das Codex als Kontext erhält.", "🧺 Zutatenkorb"],
                ["Planmodus", "Codex sammelt Kontext, stellt Rückfragen und schlägt vor der Umsetzung einen Plan vor.", "📝 Vorbereitungsplan"],
                ["Klärende Rückfrage", "Klärt eine wichtige offene Entscheidung, bevor die Arbeit startet.", "🙋 Koch fragt den Gast"],
                ["Plan umsetzen", "Startet die Arbeit, nachdem der vorgeschlagene Weg geprüft wurde.", "▶️ Kochen starten"]
              ]
            }
          ]
        },
        {
          title: "Zusammenfassung: Skills & Tools",
          subtitle: "Wiederverwendbare Prozesse und Fähigkeiten",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Wort", "Bedeutung", "Metapher"],
              rows: [
                ["Skill", "Eine wiederverwendbare Anleitung, die Codex eine fokussierte Aufgabe beibringt.", "📘 Rezeptkarte"],
                ["SKILL.md", "Die Hauptdatei mit Trigger, Workflow und Grenzen des Skills.", "📖 Rezept"],
                ["openai.yaml", "Metadaten, die Darstellung und Start eines lokalen Skills steuern.", "🏷️ Rezeptetikett"],
                ["Tool", "Ein Programm oder eine Schnittstelle, mit der Codex Informationen abruft oder handelt.", "🛠️ Küchenwerkzeug"],
                ["Plugin", "Ein installierbares Paket mit Apps, Skills und verbundenen Fähigkeiten.", "🧰 Werkzeugkiste"],
                ["App-Aktion", "Eine verbundene Aktion, die Daten lesen, erstellen, ändern, löschen oder senden kann.", "🔌 Verbundenes Küchengerät"],
                ["Skill + Plugin", "Ein wiederholbarer Prozess, der Informationen oder Aktionen aus einem anderen Tool nutzt.", "📘 Rezept + Vorratskammer"]
              ]
            }
          ]
        },
        {
          title: "Zusammenfassung: Sicher arbeiten",
          subtitle: "Sicherheitsregeln und Metaphern für den Alltag",
          layout: "summary",
          blocks: [
            {
              type: "table",
              headers: ["Regel", "Bedeutung", "Metapher"],
              rows: [
                ["Wenigster Zugriff", "Wähle den engsten Zugriff, mit dem die Aufgabe noch möglich ist.", "🔑 Ein Küchenschlüssel"],
                ["Minimaler Kontext", "Füge nur Dateien und Ordner hinzu, die die Aufgabe wirklich braucht.", "🥕 Zutaten für ein Gericht"],
                ["Vertrauenswürdige Quellen", "Prüfe Skills, Plugins, Anweisungen und angeforderte Zugriffe vor der Nutzung.", "✅ Freigegebener Lieferant"],
                ["Freigabe durch Menschen", "Ein Mensch entscheidet vor Senden, Veröffentlichen, Löschen oder Geldausgeben.", "🧑‍🍳 Küchenchef gibt frei"],
                ["Ergebnis prüfen", "Kontrolliere Fakten, Namen, Preise, Daten, Links, Quellen und Markenton.", "👅 Geschmackstest"],
                ["Mit einer Kopie testen", "Prüfe Änderungen in der Vorschau und sichere das Original.", "🍽️ Probeteller + Reserve"],
                ["Stoppen und melden", "Trenne das Tool und informiere die verantwortliche Person, wenn etwas auffällig ist.", "🛑 Not-Aus"]
              ]
            }
          ]
        }
      ]
    }
  };
})();
