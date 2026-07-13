# Agentic Coding for Creative Teams

## Slide 1: Agentic Coding for Creative Teams

_From chatbots to agents in creative workflows_

Speaker notes: Keep this simple. The goal is to reduce fear and curiosity gap.

## Slide 2: Lukas Aichbauer

_About me_

Image: `assets/lukas-aichbauer.webp`

- Co-Founder @ PebbleByte GmbH
- Lecturer @ Technikum Wien
- Email: lukas@pebblebyte.com
- LinkedIn: /in/aichbauer

## Slide 3: Who Are You?

- Work Field
  - Icon: briefcase
  - What field do you work in?
- AI Experience
  - Icon: brain
  - What experience do you have with AI?
- Expectations
  - Icon: question-mark
  - What do you expect from this workshop?

## Slide 4: Three Starter Ideas

- Marketing
  - Icon: search
  - Customer reviews contain strong marketing language, but are rarely analyzed systematically.
  - Review mining app: collects reviews from G2, Trustpilot, App Store, Amazon, or support tickets and extracts pain points, value propositions, objections, and reusable copy.
- Designers
  - Icon: pencil
  - Checking desktop, tablet, and mobile layouts takes time.
  - Responsive screenshot reviewer: enter a URL, generate breakpoint screenshots, and flag overflow, broken layouts, tiny text, or clipped buttons.
- Project Management
  - Icon: clipboard-list
  - Requirements, user flows, and acceptance criteria often stay abstract and are interpreted differently by developers.
  - Prototype-as-acceptance app: turns a briefing into a working browser prototype with user flows, states, edge cases, and testable acceptance criteria as an executable reference for implementation.

## Slide 5: What We'll Cover

_Agenda_

- From chatbots to agents
- Vibe Coding vs. Agentic Coding
- Agent workflow and examples
- Codex setup and building blocks
- Security, permissions, and live demo

## Slide 6: LLM / Chatbot / Agent

_From Brain to Action_

- Large Language Model (LLM)
  - Icons: 🧠
  - Computer program
  - Metaphor: Brain
- Chatbot
  - Icons: 👀 👂 👄
  - Conversation interface
  - Metaphor: eyes, ears, mouth
- Agent
  - Icons: 🤲 💪 🦵
  - Uses tools and takes action
  - Metaphor: hands, arms, feet

## Slide 7: LLM

_Input -> LLM (Computer program) -> Output_

A simple way to think about what happens inside a Large Language Model.

| Step | What happens |
| --- | --- |
| Input | Sentence start: "The sky is ..." |
| LLM | "blue" -> 0.87; "cloudy" -> 0.09; "green" -> 0.04 |
| Output | "The sky is blue." |

High level: It does not understand like a human. It uses patterns from many texts to predict likely next tokens. Tokens are small text pieces: word parts, whole words, or character strings.

## Slide 8: Chatbot

_Human -> Website -> Server with LLM -> Answer_

A chatbot is a website or app that sends your message to an LLM and shows the answer.

| Step | What happens |
| --- | --- |
| Human | Types a question or task |
| Website | Chatbot page or app |
| Server + LLM | Predicts tokens and builds text |
| Answer | Computer shows the answer |

High level: The chatbot is the interface and connection. The LLM usually runs on a server; your computer shows the conversation.

## Slide 9: Agent

_Goal -> Agent (LLM + programs) -> Result_

An agent gets a goal and can use tools to work through steps.

| Step | What happens |
| --- | --- |
| Goal | Task: "Add two slides and check the deck." |
| Agent | Talks to the LLM; uses programs: PowerPoint, Google Slides, browser; reads and edits files; checks the result |
| Result | Changed deck plus short summary |

High level: An agent does not stop at a text answer. It can plan, act, verify, and keep going until the task is done.

## Slide 10: From Recipe to Chef

_Prompting / Vibe Coding / Agentic Coding_

Same AI, different way of steering it: ask, improvise, or guide execution.

| Step | Explanation |
| --- | --- |
| Prompting | Ask in chat and get an answer; you decide what to do with the response; metaphor: recipe request |
| Vibe Coding | Describe the app loosely and paste code back and forth; run it, see what happens, tweak by feel; metaphor: "Something pasta-ish" |
| Agentic Coding | Give a goal, context, files, and constraints; agent plans, edits, tests, and improves; metaphor: chef in the kitchen |

Key idea: Prompting asks, Vibe Coding experiments, Agentic Coding delegates execution with context and review.

## Slide 11: AI Agent Landscape

_Six examples across different use cases and domains_

- Codex
- Claude Code
- Qwen Code
- Mistral Vibe Code
- Zapier Agents
- OpenClaw

## Slide 12: Install Codex

_Setup_

Button: https://openai.com/codex/

Link: https://openai.com/codex/

## Slide 13: First Open Codex

_Launch_

Image: `assets/codex-pictures/first-open-codex-en-de.png`

## Slide 14: Click Sign In

_First opening_

Image: `assets/codex-pictures/first-open-codex-click-signin-en-de.png`

## Slide 15: Continue Sign-In

_First opening_

Image: `assets/codex-pictures/first-open-codex-continue-sign-in-en-de.png`

## Slide 16: Sign-In Successful

_First opening_

Image: `assets/codex-pictures/first-open-codex-sign-in-successful-en-de.png`

## Slide 17: Codex Home

_After first login_

Image: `assets/codex-pictures/how-codex-looks-first-login-en.png`

## Slide 18: Create New Project

_Project setup_

Image: `assets/codex-pictures/create-new-project-en.png`

## Slide 19: Name the Project

_Project setup_

Image: `assets/codex-pictures/create-project-name-en.png`

## Slide 20: Select a Project

_Where to choose the project_

Image: `assets/codex-pictures/select-project-codex-en.png`

## Slide 21: Select a Model

_Where to choose the model_

Image: `assets/codex-pictures/select-llm-model-en.png`

## Slide 22: Select Workspace

_Where the agent works_

Image: `assets/codex-pictures/select-where-agent-works-en.png`

## Slide 23: Include Plugins

_Available tools_

Image: `assets/codex-pictures/include-plugins-en.png`

## Slide 24: Create Automations

_Automation setup_

Image: `assets/codex-pictures/create-automations-1-en.png`

## Slide 25: Configure Automations

_Automation setup_

Image: `assets/codex-pictures/create-automations-2-en.png`

## Slide 26: Find Usage

_Account usage_

Image: `assets/codex-pictures/where-to-find-usage-1-en.png`

## Slide 27: Usage Details

_Account usage_

Image: `assets/codex-pictures/where-to-find-usage-2-en.png`

## Slide 28: Which Use Cases Are Good Starting Points?

_Start small, create real value_

| A good first use case is | How to recognize it |
| --- | --- |
| frequent | the task comes up regularly |
| time-consuming | it noticeably absorbs attention |
| easy to check | a good result is recognizable |
| low-risk | mistakes are easy to spot and correct |
| context-rich | examples, files, and rules are available |

## Slide 29: Use Case Board

_Excalidraw_

Button: Find your usecase

Link: https://excalidraw.com/#room=3f7fb564ea3a699c6fd3,sDK2_w9L9RRcSUgP1PYFTA

## Slide 30: Exercise 1: Define Input and Output

_Duration: 5 minutes_

Questions:

- What does the program receive?
- In which format?
- What should it create?
- What should the result look like?

| Input | Output |
| --- | --- |
| file | summary or report |
| notes | task list |
| URL | screenshots and issues |
| CSV table | themes and examples |

Coffee shop landing page example: Input: campaign briefing, shop photos, menu CSV, and brand notes. Output: landing page outline, section copy, offer blocks, image suggestions, and CTA variants.

## Slide 31: Exercise 2: Break Down the Process

_Duration: 5 minutes_

Goal: split the task into small programmable steps.

General process flow:

1. select the input
2. open or read the input
3. extract the relevant information
4. apply the rules
5. collect problems or results
6. create the output

Coffee shop landing page example: Read the campaign briefing, extract offer and tone, choose page sections, write section copy, insert menu and image placeholders, and export the HTML page.

## Slide 32: Exercise 3: Collect Rules and Examples

_Duration: 5 minutes_

Goal: make implicit knowledge visible.

Collect:

- fixed rules
- good examples
- bad examples
- exceptions
- typical mistakes

General examples:

- required fields must be present
- forbidden words or placeholders must not appear
- output format must follow a known example
- exceptions must be listed explicitly
- common mistakes should be easy to detect

Coffee shop landing page example: The headline mentions the seasonal drink, the CTA says "Reserve a table" or "Order ahead", opening hours are visible above the fold, no placeholder text remains, and the original briefing is not changed.

## Slide 33: Exercise 4: Human or Agent?

_Duration: 5 minutes_

| Agent may | Human decides |
| --- | --- |
| analyze files and inputs | publish content |
| create suggestions | make the final selection |
| mark problems | delete files or data |
| generate variants | approve budget or scope |
| run tests and checks | share sensitive information |

Coffee shop landing page example: The agent may analyze the briefing, draft hero copy, and flag missing photos. A human decides the final offer, approves the design, and publishes the page.

Guiding question: What may happen automatically, and what needs approval?

## Slide 34: Exercise 5: Write the First Codex Task

_Duration: 10 minutes_

Template:

```text
Build a local application that supports [goal].
It uses [input] as input.
The program should:
- ...
- ...
- ...
Follow these rules: [rules].
The result should be [output].
The task is done when [check criteria] are met.
The program must not [boundaries].
```

Coffee shop landing page: Build a local app that turns a seasonal coffee campaign briefing into a responsive landing page preview with headline, offer, menu teaser, photos, opening hours, and CTA.

## Slide 35: Exercise 6: The Error Case

_Duration: 5 minutes_

Goal: look beyond the ideal path.

Define at least three general error states:

- file is missing
- format is wrong
- input is empty
- URL is not reachable
- required columns are missing
- result is ambiguous
- multiple rules contradict each other

Coffee shop landing page example: If the menu CSV is missing prices, the program should mark the affected drinks, keep generating the page, and show a warning in the report.

Question: What should the program do in this case?

## Slide 36: Summary: Basics

_Important words and metaphors_

| Word | Meaning | Metaphor |
| --- | --- | --- |
| LLM | A language model that predicts likely next text pieces from input. | 🧠 Brain |
| Token | A small text piece: a word part, word, or character string. | 🧩 Text building block |
| Chatbot | An interface that sends messages to an LLM and shows answers. | 👀👂👄 Eyes, ears, mouth |
| Agent | An LLM-based system that can use tools, act, check, and continue. | 🤲💪🦵 Hands, arms, feet |
| Prompting | Asking in chat and deciding yourself what to do with the answer. | 📖 Ask for a recipe |
| Vibe Coding | Loosely describing software, trying it, and adjusting by feel. | 🍝 "Something pasta-ish" |
| Agentic Coding | Giving goal, context, files, rules, and boundaries so an agent can implement. | 🍲 Chef in the kitchen |

## Slide 37: Summary: Codex

_Setup words and metaphors_

| Word | Meaning | Metaphor |
| --- | --- | --- |
| Codex | An agentic coding environment that can work with your project files. | 🧑‍🍳 Chef cook |
| Project | The place where your work is organized inside Codex. | 🏪 Restaurant |
| Model | The selected AI brain Codex uses for the task. | 🎓 Chef's brain |
| Workspace | The project folder where the agent is allowed to read and change files. | 🍳 Kitchen |
| Tool | Programs and apps the agent can use. | 🛠️ Kitchen tools |
| Plugin | A special program made for Codex. | 🧰 Special kitchen tool |
| Automation | A repeatable agent task that can run on a configured trigger. | ⏲️ Kitchen timer |
| Usage | The account area where you can see how much Codex has been used. | 💸 Salary for the cook |

## Slide 38: Summary: Use Cases

_Instructions and metaphors_

| Word | Meaning | Metaphor |
| --- | --- | --- |
| Use Case | A concrete task where AI can create value in a workflow. | 📋 Dish on the menu |
| Input | The material the program receives: file, notes, URL, or table. | 🥕 Ingredients |
| Output | The result the program should create: report, list, screenshots, or app. | 🍽️ Finished dish |
| Rule | A fixed condition the result must follow. | 📏 Cooking rule |
| Check Criteria | How you know the task is done well enough. | 👅 Taste test |
| Error Case | A situation where the input or result is missing, wrong, or unclear. | ❓ Missing ingredient |
| Human Approval | A decision that stays with a person, such as publishing or deleting data. | ✅ Chef signs off |

| Good use case is | How to recognize it | Metaphor |
| --- | --- | --- |
| Frequent | The task comes up regularly. | 🔁 Regular order |
| Time-consuming | It noticeably absorbs attention. | ⏳ Long prep time |
| Easy to check | A good result is recognizable. | 🔍 Quality check |
| Low-risk | Mistakes are easy to spot and correct. | 🛟 Safety net |
| Context-rich | Examples, files, and rules are available. | 🗂️ Recipe archive |
