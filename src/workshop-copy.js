(function () {
  window.HwWorkshopCopy = {
    en: {
      meta: {
        htmlLang: "en",
        appTitle: "Hello Workshop",
        slidesTitle: "Agentic Coding for Creative Teams"
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
          linkLabel: "Seminar slides"
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
          title: "Exercise 4: Human or Agent?",
          subtitle: "Duration: 5 minutes",
          blocks: [
            {
              type: "table",
              revealRows: true,
              headers: ["Agent may", "Human decides"],
              rows: [
                ["analyze files and inputs", "publish content"],
                ["create suggestions", "make the final selection"],
                ["mark problems", "delete files or data"],
                ["generate variants", "approve budget or scope"],
                ["run tests and checks", "share sensitive information"]
              ]
            },
            {
              type: "callout",
              label: "Coffee shop landing page example",
              text: "The agent may analyze the briefing, draft hero copy, and flag missing photos. A human decides the final offer, approves the design, and publishes the page."
            },
            {
              type: "callout",
              label: "Guiding question",
              text: "What may happen automatically, and what needs approval?"
            }
          ]
        },
        {
          title: "Exercise 5: Write the First Codex Task",
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
          title: "Exercise 6: The Error Case",
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
      ]
    },
    de: {
      meta: {
        htmlLang: "de",
        appTitle: "Hallo Workshop",
        slidesTitle: "Agentic Coding für kreative Teams"
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
          linkLabel: "Seminar-Folien"
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
                "Von Chatbots zu Agenten",
                "Vibe Coding vs. Agentic Coding",
                "Agenten-Workflow und Beispiele",
                "Codex-Setup und Bausteine",
                "Sicherheit, Berechtigungen und Live-Demo"
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
          title: "Übung 4: Mensch oder Agent?",
          subtitle: "Dauer: 5 Minuten",
          blocks: [
            {
              type: "table",
              revealRows: true,
              headers: ["Agent darf", "Mensch entscheidet"],
              rows: [
                ["Dateien und Inputs analysieren", "Inhalte veröffentlichen"],
                ["Vorschläge erstellen", "finale Auswahl treffen"],
                ["Probleme markieren", "Dateien oder Daten löschen"],
                ["Varianten erzeugen", "Budget oder Scope freigeben"],
                ["Tests und Checks durchführen", "sensible Informationen weitergeben"]
              ]
            },
            {
              type: "callout",
              label: "Beispiel Coffee-Shop-Landing-Page",
              text: "Der Agent darf das Briefing analysieren, Hero-Texte entwerfen und fehlende Fotos markieren. Ein Mensch entscheidet das finale Angebot, gibt das Design frei und veröffentlicht die Seite."
            },
            {
              type: "callout",
              label: "Leitfrage",
              text: "Was darf automatisch passieren und was braucht eine Freigabe?"
            }
          ]
        },
        {
          title: "Übung 5: Den ersten Codex-Auftrag schreiben",
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
          title: "Übung 6: Der Fehlerfall",
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
      ]
    }
  };
})();
