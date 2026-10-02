(function () {
  const copy = window.HwWorkshopCopy;

  if (!copy?.en || !copy?.de) return;

  Object.assign(copy.en.meta, {
    webinarTitle: "Hello Webinar",
    webinarDevopsCultureTitle: "DevOps Culture",
    webinarContainersTitle: "Webinar Slides: Containers",
    webinarCiCdTitle: "Webinar Slides: CI/CD"
  });

  copy.en.webinar = {
    page: {
      eyebrow: "DevOps Culture + Containers + CI/CD",
      title: "Hello Webinar",
      buttonLabel: "Tap for a tiny idea",
      idea: "Turn one recurring handoff problem into a small team experiment.",
      linkHref: "webinar-slides-devops-culture.html",
      linkLabel: "DevOps Culture",
      secondaryLinkHref: "webinar-slides-containers.html",
      secondaryLinkLabel: "Webinar slides Containers",
      tertiaryLinkHref: "webinar-slides-ci-cd.html",
      tertiaryLinkLabel: "Webinar slides CI/CD"
    },
    ideas: [
      "Turn one recurring handoff problem into a small team experiment.",
      "Write a clear team agreement for who owns a deployment and how to ask for help.",
      "Map one slow feedback loop and remove a single waiting step.",
      "Package a small static app in a container and document the command that runs it.",
      "Add a health check to a container and define what healthy means for the app.",
      "Reduce a container image by removing one unnecessary dependency or build layer.",
      "Build a pipeline that checks formatting or links before a change is merged.",
      "Add one clear failure message to a CI job so the next action is obvious.",
      "Measure the slowest pipeline step before deciding what to optimize."
    ]
  };

  copy.en.slideSets = {
    ...(copy.en.slideSets || {}),
    devopsCulture: createEnglishDevopsCultureSlides(),
    containers: [createCover("Containers")],
    ciCd: [createCover("CI/CD")]
  };

  Object.assign(copy.de.meta, {
    webinarTitle: "Hello Webinar",
    webinarDevopsCultureTitle: "DevOps-Kultur",
    webinarContainersTitle: "Webinar-Folien: Containers",
    webinarCiCdTitle: "Webinar-Folien: CI/CD"
  });

  copy.de.webinar = {
    page: {
      eyebrow: "DevOps Culture + Containers + CI/CD",
      title: "Hello Webinar",
      buttonLabel: "Tippe für eine kleine Idee",
      idea: "Mach aus einem wiederkehrenden Übergabeproblem ein kleines Team-Experiment.",
      linkHref: "webinar-slides-devops-culture.html",
      linkLabel: "DevOps-Kultur",
      secondaryLinkHref: "webinar-slides-containers.html",
      secondaryLinkLabel: "Webinar-Folien Containers",
      tertiaryLinkHref: "webinar-slides-ci-cd.html",
      tertiaryLinkLabel: "Webinar-Folien CI/CD"
    },
    ideas: [
      "Mach aus einem wiederkehrenden Übergabeproblem ein kleines Team-Experiment.",
      "Haltet klar fest, wer ein Deployment verantwortet und wie das Team Hilfe anfordert.",
      "Zeichne eine langsame Feedbackschleife auf und entferne einen einzelnen Warteschritt.",
      "Verpacke eine kleine statische App in einem Container und dokumentiere den Startbefehl.",
      "Ergänze einen Healthcheck und definiere, was gesund für die Anwendung bedeutet.",
      "Verkleinere ein Container-Image, indem du eine unnötige Abhängigkeit oder Build-Schicht entfernst.",
      "Baue eine Pipeline, die Formatierung oder Links vor dem Merge prüft.",
      "Ergänze eine klare Fehlermeldung in einem CI-Job, damit der nächste Schritt eindeutig ist.",
      "Miss den langsamsten Pipeline-Schritt, bevor du entscheidest, was optimiert werden soll."
    ]
  };

  copy.de.slideSets = {
    ...(copy.de.slideSets || {}),
    devopsCulture: createGermanDevopsCultureSlides(),
    containers: [createCover("Containers")],
    ciCd: [createCover("CI/CD")]
  };

  function createEnglishDevopsCultureSlides() {
    return [
      {
        "title": "DevOps\nCulture",
        "blocks": [
          {
            "type": "emojiOnly",
            "reveal": false,
            "items": [
              "user",
              "repeat",
              "code"
            ]
          }
        ],
        "composition": "cover",
        "palette": "white",
        "subtitle": "Why culture still matters when everyone uses automation and AI",
        "cover": true
      },
      {
        "title": "The problem",
        "blocks": [
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Software teams are faster than before",
                "icon": "trending-up"
              },
              {
                "title": "Tools are better than before",
                "icon": "tool"
              },
              {
                "title": "AI helps developers and ops daily",
                "icon": "robot"
              }
            ]
          },
          {
            "type": "text",
            "text": "But releases still fail because teams do not work well together",
            "variant": "takeaway"
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "The core idea",
        "blocks": [
          {
            "type": "callout",
            "label": "DevOps is not a toolchain.",
            "text": "DevOps is how teams work together to deliver and operate software.",
            "wide": true,
            "icon": "repeat"
          }
        ],
        "composition": "statement",
        "palette": "white"
      },
      {
        "title": "The old model",
        "blocks": [
          {
            "type": "processFlow",
            "label": "“Throw it over the wall”",
            "columns": 5,
            "revealItems": true,
            "steps": [
              {
                "label": "Developers build",
                "icon": "code"
              },
              {
                "label": "Operations deploys",
                "icon": "plug"
              },
              {
                "label": "Security reviews late",
                "icon": "lock"
              },
              {
                "label": "QA catches problems at the end",
                "icon": "search"
              },
              {
                "label": "Customers feel the delay",
                "icon": "clock"
              }
            ]
          }
        ],
        "composition": "flow",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "What goes wrong",
        "blocks": [
          {
            "type": "conceptCards",
            "columns": 5,
            "items": [
              {
                "title": "Handoffs create waiting time",
                "icon": "clock"
              },
              {
                "title": "Teams optimize locally",
                "icon": "target"
              },
              {
                "title": "Nobody owns the full outcome",
                "icon": "user"
              },
              {
                "title": "Failures become blame games",
                "icon": "octagon"
              },
              {
                "title": "Knowledge stays in silos",
                "icon": "book"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "DevOps culture fixes the system",
        "blocks": [
          {
            "type": "conceptCards",
            "columns": 5,
            "items": [
              {
                "title": "Shared responsibility",
                "icon": "user"
              },
              {
                "title": "Open communication",
                "icon": "message"
              },
              {
                "title": "Fast feedback",
                "icon": "refresh"
              },
              {
                "title": "Automation",
                "icon": "settings"
              },
              {
                "title": "Continuous improvement",
                "icon": "trending-up"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Culture before tools",
        "blocks": [
          {
            "type": "callout",
            "label": "Better tools help.",
            "text": "But tools do not remove silos by themselves.",
            "wide": true,
            "icon": "repeat"
          },
          {
            "type": "text",
            "text": "Example:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "You can have Kubernetes, CI/CD and AI",
                "icon": "stack-2"
              },
              {
                "title": "And still have slow releases",
                "icon": "clock"
              },
              {
                "title": "If teams do not trust each other",
                "icon": "user"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Pillar 1: Collaboration",
        "blocks": [
          {
            "type": "text",
            "text": "Dev and Ops work together from the beginning",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "“We finished coding, now you deploy it.”"
            ],
            "label": "Not:",
            "icon": "octagon"
          },
          {
            "type": "bullets",
            "items": [
              "“How do we build, run, monitor and improve this together?”"
            ],
            "label": "Instead:",
            "icon": "check"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Pillar 2: Shared responsibility",
        "blocks": [
          {
            "type": "text",
            "text": "You build it, you help run it",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "This creates:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 4,
            "items": [
              {
                "title": "Better deployment decisions",
                "icon": "plug"
              },
              {
                "title": "Better logging and monitoring",
                "icon": "eye"
              },
              {
                "title": "More realistic architecture",
                "icon": "stack-2"
              },
              {
                "title": "Stronger ownership of production",
                "icon": "user"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Pillar 3: Blameless learning",
        "blocks": [
          {
            "type": "text",
            "text": "Incidents are learning opportunities",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "What happened?",
              "Why did the system allow it?",
              "What signal was missing?",
              "What can we improve?"
            ],
            "label": "Ask:",
            "icon": "repeat"
          },
          {
            "type": "bullets",
            "items": [
              "Who caused this?"
            ],
            "label": "Do not ask first:",
            "icon": "octagon"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Pillar 4: Automation",
        "blocks": [
          {
            "type": "text",
            "text": "Automation reduces fear",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "Builds",
              "Tests",
              "Deployments",
              "Infrastructure",
              "Rollbacks",
              "Monitoring checks"
            ],
            "label": "Automate:",
            "icon": "settings"
          },
          {
            "type": "bullets",
            "items": [
              "Fewer manual mistakes",
              "Faster feedback",
              "More repeatable work"
            ],
            "label": "Goal:",
            "icon": "target"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Pillar 5: Fast feedback",
        "blocks": [
          {
            "type": "text",
            "text": "Feedback must arrive while it is still useful",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Sources of feedback:",
            "variant": "label"
          },
          {
            "type": "columns",
            "items": [
              "CI tests",
              "Code reviews",
              "Monitoring",
              "Logs",
              "User behavior",
              "Support tickets",
              "Incident reviews"
            ],
            "revealItems": true
          }
        ],
        "composition": "standard",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Why AI makes culture more important",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Code",
              "Scripts",
              "Configs",
              "Tests",
              "Documentation",
              "Debugging ideas"
            ],
            "label": "AI can generate:",
            "icon": "robot"
          },
          {
            "type": "bullets",
            "items": [
              "Ownership",
              "Trust",
              "Shared context",
              "Good judgment",
              "Team communication"
            ],
            "label": "But AI cannot replace:",
            "icon": "user"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "The new risk",
        "blocks": [
          {
            "type": "text",
            "text": "AI makes bad team habits faster",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "If the culture is weak:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 2,
            "items": [
              {
                "title": "More code gets shipped without understanding",
                "icon": "code"
              },
              {
                "title": "More generated scripts enter production",
                "icon": "file"
              },
              {
                "title": "More hidden complexity appears",
                "icon": "stack-2"
              },
              {
                "title": "More teams say “not my problem”",
                "icon": "hand-stop"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "The right AI + DevOps mindset",
        "blocks": [
          {
            "type": "text",
            "text": "AI should improve flow, not remove responsibility",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "Explain incidents faster",
              "Draft runbooks",
              "Generate test cases",
              "Summarize logs",
              "Improve documentation",
              "Support code review"
            ],
            "label": "Good use:",
            "icon": "check"
          },
          {
            "type": "bullets",
            "items": [
              "Blindly accept generated code",
              "Skip understanding",
              "Replace communication",
              "Automate broken processes"
            ],
            "label": "Bad use:",
            "icon": "octagon"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "DevOps is about flow",
        "blocks": [
          {
            "type": "text",
            "text": "Work should move smoothly from idea to production",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Improve flow by reducing:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Handoffs",
                "icon": "user"
              },
              {
                "title": "Queues",
                "icon": "clock"
              },
              {
                "title": "Manual approvals",
                "icon": "hand-stop"
              },
              {
                "title": "Unclear ownership",
                "icon": "question-mark"
              },
              {
                "title": "Rework",
                "icon": "refresh"
              },
              {
                "title": "Big-bang releases",
                "icon": "stack-2"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "DevOps is about feedback",
        "blocks": [
          {
            "type": "text",
            "text": "Production teaches the team",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "A healthy team sees:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 4,
            "items": [
              {
                "title": "What users do",
                "icon": "eye"
              },
              {
                "title": "Where systems fail",
                "icon": "octagon"
              },
              {
                "title": "What changes create risk",
                "icon": "trending-up"
              },
              {
                "title": "Which assumptions were wrong",
                "icon": "question-mark"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "DevOps is about learning",
        "blocks": [
          {
            "type": "text",
            "text": "The team improves the system and itself",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Practices:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Retrospectives",
                "icon": "refresh"
              },
              {
                "title": "Post-incident reviews",
                "icon": "search"
              },
              {
                "title": "Pairing across roles",
                "icon": "user"
              },
              {
                "title": "Internal demos",
                "icon": "player-play"
              },
              {
                "title": "Shared dashboards",
                "icon": "chart-bar"
              },
              {
                "title": "Small experiments",
                "icon": "puzzle"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "What does not work",
        "blocks": [
          {
            "type": "text",
            "text": "Cargo-cult DevOps",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "“We hired a DevOps person”",
              "“We created a DevOps team”",
              "“We bought a tool”",
              "“We have pipelines, but releases are still painful”",
              "“Ops still gets blamed when production breaks”"
            ],
            "label": "Signs:",
            "reveal": false,
            "revealItems": true
          }
        ],
        "composition": "agenda",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "What works in practice",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "One product team",
              "One painful deployment process",
              "One shared dashboard",
              "One automated test stage",
              "One blameless incident review",
              "One measurable improvement"
            ],
            "label": "Start small:",
            "reveal": false,
            "revealItems": true
          }
        ],
        "composition": "agenda",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Practical checklist",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Do we own the full lifecycle?",
              "Can we deploy safely?",
              "Do we learn from failures?",
              "Do dev, ops, QA and security talk early?",
              "Do our tools support collaboration?",
              "Do we understand what AI-generated work changes?"
            ],
            "label": "Ask your team:",
            "reveal": false,
            "revealItems": true
          }
        ],
        "composition": "agenda",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Key takeaway",
        "blocks": [
          {
            "type": "text",
            "text": "DevOps culture is not less important today. It is more important.",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Because with AI and automation:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Teams move faster",
                "icon": "user"
              },
              {
                "title": "Systems change faster",
                "icon": "refresh"
              },
              {
                "title": "Mistakes scale faster",
                "icon": "trending-up"
              }
            ]
          },
          {
            "type": "text",
            "text": "The answer is not more tools alone. The answer is better culture, better feedback and shared ownership.",
            "variant": "takeaway"
          },
          {
            "type": "bullets",
            "items": [
              "Octopus Deploy — DevOps Culture",
              "Martin Fowler — Dev Ops Culture",
              "Atlassian — DevOps-Kultur"
            ],
            "label": "Sources:",
            "variant": "sources"
          }
        ],
        "composition": "culture-finale",
        "palette": "white",
        "density": "compact"
      }
    ];
  }

  function createGermanDevopsCultureSlides() {
    return [
      {
        "title": "DevOps-\nKultur",
        "blocks": [
          {
            "type": "emojiOnly",
            "reveal": false,
            "items": [
              "user",
              "repeat",
              "code"
            ]
          }
        ],
        "composition": "cover",
        "palette": "white",
        "subtitle": "Warum Kultur weiterhin wichtig ist, wenn alle Automatisierung und KI nutzen",
        "cover": true
      },
      {
        "title": "Das Problem",
        "blocks": [
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Softwareteams sind schneller als früher",
                "icon": "trending-up"
              },
              {
                "title": "Die Tools sind besser als früher",
                "icon": "tool"
              },
              {
                "title": "KI hilft Entwicklung und Betrieb täglich",
                "icon": "robot"
              }
            ]
          },
          {
            "type": "text",
            "text": "Aber Releases scheitern weiterhin, weil Teams nicht gut zusammenarbeiten",
            "variant": "takeaway"
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Die Kernidee",
        "blocks": [
          {
            "type": "callout",
            "label": "DevOps ist keine Toolchain.",
            "text": "DevOps beschreibt, wie Teams zusammenarbeiten, um Software auszuliefern und zu betreiben.",
            "wide": true,
            "icon": "repeat"
          }
        ],
        "composition": "statement",
        "palette": "white"
      },
      {
        "title": "Das alte Modell",
        "blocks": [
          {
            "type": "processFlow",
            "label": "„Über die Mauer werfen“",
            "columns": 5,
            "revealItems": true,
            "steps": [
              {
                "label": "Die Entwicklung baut",
                "icon": "code"
              },
              {
                "label": "Der Betrieb stellt bereit",
                "icon": "plug"
              },
              {
                "label": "Security prüft spät",
                "icon": "lock"
              },
              {
                "label": "QA findet Probleme erst am Ende",
                "icon": "search"
              },
              {
                "label": "Kunden spüren die Verzögerung",
                "icon": "clock"
              }
            ]
          }
        ],
        "composition": "flow",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Was schiefläuft",
        "blocks": [
          {
            "type": "conceptCards",
            "columns": 5,
            "items": [
              {
                "title": "Übergaben erzeugen Wartezeiten",
                "icon": "clock"
              },
              {
                "title": "Teams optimieren nur ihren eigenen Bereich",
                "icon": "target"
              },
              {
                "title": "Niemand übernimmt Verantwortung für das Gesamtergebnis",
                "icon": "user"
              },
              {
                "title": "Bei Fehlern beginnen die Schuldzuweisungen",
                "icon": "octagon"
              },
              {
                "title": "Wissen bleibt in Silos",
                "icon": "book"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "DevOps-Kultur verbessert das System",
        "blocks": [
          {
            "type": "conceptCards",
            "columns": 5,
            "items": [
              {
                "title": "Gemeinsame Verantwortung",
                "icon": "user"
              },
              {
                "title": "Offene Kommunikation",
                "icon": "message"
              },
              {
                "title": "Schnelles Feedback",
                "icon": "refresh"
              },
              {
                "title": "Automatisierung",
                "icon": "settings"
              },
              {
                "title": "Kontinuierliche Verbesserung",
                "icon": "trending-up"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Kultur vor Tools",
        "blocks": [
          {
            "type": "callout",
            "label": "Bessere Tools helfen.",
            "text": "Aber Tools allein lösen keine Silos auf.",
            "wide": true,
            "icon": "repeat"
          },
          {
            "type": "text",
            "text": "Beispiel:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Ihr könnt Kubernetes, CI/CD und KI haben",
                "icon": "stack-2"
              },
              {
                "title": "Und trotzdem langsame Releases",
                "icon": "clock"
              },
              {
                "title": "Wenn die Teams einander nicht vertrauen",
                "icon": "user"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Säule 1: Zusammenarbeit",
        "blocks": [
          {
            "type": "text",
            "text": "Entwicklung und Betrieb arbeiten von Anfang an zusammen",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "„Wir sind mit dem Code fertig, jetzt stellt ihr ihn bereit.“"
            ],
            "label": "Nicht:",
            "icon": "octagon"
          },
          {
            "type": "bullets",
            "items": [
              "„Wie bauen, betreiben, überwachen und verbessern wir das gemeinsam?“"
            ],
            "label": "Sondern:",
            "icon": "check"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Säule 2: Gemeinsame Verantwortung",
        "blocks": [
          {
            "type": "text",
            "text": "Wer es baut, hilft auch beim Betrieb",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Das schafft:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 4,
            "items": [
              {
                "title": "Bessere Entscheidungen beim Deployment",
                "icon": "plug"
              },
              {
                "title": "Besseres Logging und Monitoring",
                "icon": "eye"
              },
              {
                "title": "Realistischere Architektur",
                "icon": "stack-2"
              },
              {
                "title": "Mehr Verantwortung für den Produktivbetrieb",
                "icon": "user"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Säule 3: Lernen ohne Schuldzuweisungen",
        "blocks": [
          {
            "type": "text",
            "text": "Vorfälle sind Gelegenheiten zum Lernen",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "Was ist passiert?",
              "Warum hat das System es zugelassen?",
              "Welches Signal hat gefehlt?",
              "Was können wir verbessern?"
            ],
            "label": "Fragt:",
            "icon": "repeat"
          },
          {
            "type": "bullets",
            "items": [
              "Wer hat das verursacht?"
            ],
            "label": "Fragt nicht zuerst:",
            "icon": "octagon"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Säule 4: Automatisierung",
        "blocks": [
          {
            "type": "text",
            "text": "Automatisierung reduziert Angst",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "Builds",
              "Tests",
              "Deployments",
              "Infrastruktur",
              "Rollbacks",
              "Monitoring-Checks"
            ],
            "label": "Automatisiert:",
            "icon": "settings"
          },
          {
            "type": "bullets",
            "items": [
              "Weniger manuelle Fehler",
              "Schnelleres Feedback",
              "Besser wiederholbare Arbeit"
            ],
            "label": "Ziel:",
            "icon": "target"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Säule 5: Schnelles Feedback",
        "blocks": [
          {
            "type": "text",
            "text": "Feedback muss ankommen, solange es noch nützlich ist",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Feedbackquellen:",
            "variant": "label"
          },
          {
            "type": "columns",
            "items": [
              "CI-Tests",
              "Code-Reviews",
              "Monitoring",
              "Logs",
              "Nutzerverhalten",
              "Support-Tickets",
              "Reviews nach Vorfällen"
            ],
            "revealItems": true
          }
        ],
        "composition": "standard",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Warum KI Kultur noch wichtiger macht",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Code",
              "Skripte",
              "Konfigurationen",
              "Tests",
              "Dokumentation",
              "Ideen zur Fehlersuche"
            ],
            "label": "KI kann Folgendes erzeugen:",
            "icon": "robot"
          },
          {
            "type": "bullets",
            "items": [
              "Verantwortung",
              "Vertrauen",
              "Gemeinsamen Kontext",
              "Gutes Urteilsvermögen",
              "Kommunikation im Team"
            ],
            "label": "Aber KI kann Folgendes nicht ersetzen:",
            "icon": "user"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Das neue Risiko",
        "blocks": [
          {
            "type": "text",
            "text": "KI beschleunigt schlechte Teamgewohnheiten",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Wenn die Kultur schwach ist:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 2,
            "items": [
              {
                "title": "Mehr Code wird ausgeliefert, ohne ihn zu verstehen",
                "icon": "code"
              },
              {
                "title": "Mehr generierte Skripte gelangen in die Produktion",
                "icon": "file"
              },
              {
                "title": "Mehr versteckte Komplexität entsteht",
                "icon": "stack-2"
              },
              {
                "title": "Mehr Teams sagen „nicht mein Problem“",
                "icon": "hand-stop"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Die richtige Haltung zu KI + DevOps",
        "blocks": [
          {
            "type": "text",
            "text": "KI soll den Arbeitsfluss verbessern, nicht Verantwortung abschaffen",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "Vorfälle schneller erklären",
              "Runbooks entwerfen",
              "Testfälle generieren",
              "Logs zusammenfassen",
              "Dokumentation verbessern",
              "Code-Reviews unterstützen"
            ],
            "label": "Guter Einsatz:",
            "icon": "check"
          },
          {
            "type": "bullets",
            "items": [
              "Generierten Code blind übernehmen",
              "Auf Verständnis verzichten",
              "Kommunikation ersetzen",
              "Fehlerhafte Prozesse automatisieren"
            ],
            "label": "Schlechter Einsatz:",
            "icon": "octagon"
          }
        ],
        "composition": "exercise-columns",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Bei DevOps geht es um den Arbeitsfluss",
        "blocks": [
          {
            "type": "text",
            "text": "Arbeit soll reibungslos von der Idee in die Produktion gelangen",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Verbessert den Arbeitsfluss durch weniger:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Übergaben",
                "icon": "user"
              },
              {
                "title": "Warteschlangen",
                "icon": "clock"
              },
              {
                "title": "Manuelle Freigaben",
                "icon": "hand-stop"
              },
              {
                "title": "Unklare Verantwortlichkeiten",
                "icon": "question-mark"
              },
              {
                "title": "Nacharbeit",
                "icon": "refresh"
              },
              {
                "title": "Big-Bang-Releases",
                "icon": "stack-2"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Bei DevOps geht es um Feedback",
        "blocks": [
          {
            "type": "text",
            "text": "Das Team lernt aus dem Produktivbetrieb",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Ein gut funktionierendes Team sieht:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 4,
            "items": [
              {
                "title": "Was Nutzer tun",
                "icon": "eye"
              },
              {
                "title": "Wo Systeme versagen",
                "icon": "octagon"
              },
              {
                "title": "Welche Änderungen Risiken erzeugen",
                "icon": "trending-up"
              },
              {
                "title": "Welche Annahmen falsch waren",
                "icon": "question-mark"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Bei DevOps geht es ums Lernen",
        "blocks": [
          {
            "type": "text",
            "text": "Das Team verbessert das System und sich selbst",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Praktiken:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Retrospektiven",
                "icon": "refresh"
              },
              {
                "title": "Reviews nach Vorfällen",
                "icon": "search"
              },
              {
                "title": "Pairing über Rollengrenzen hinweg",
                "icon": "user"
              },
              {
                "title": "Interne Demos",
                "icon": "player-play"
              },
              {
                "title": "Gemeinsame Dashboards",
                "icon": "chart-bar"
              },
              {
                "title": "Kleine Experimente",
                "icon": "puzzle"
              }
            ]
          }
        ],
        "composition": "concepts",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Was nicht funktioniert",
        "blocks": [
          {
            "type": "text",
            "text": "Cargo-Cult-DevOps",
            "variant": "lead"
          },
          {
            "type": "bullets",
            "items": [
              "„Wir haben jemanden für DevOps eingestellt“",
              "„Wir haben ein DevOps-Team gegründet“",
              "„Wir haben ein Tool gekauft“",
              "„Wir haben Pipelines, aber Releases tun immer noch weh“",
              "„Ops bekommt weiterhin die Schuld, wenn die Produktion ausfällt“"
            ],
            "label": "Anzeichen:",
            "reveal": false,
            "revealItems": true
          }
        ],
        "composition": "agenda",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Was in der Praxis funktioniert",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Ein Produktteam",
              "Ein schmerzhafter Deployment-Prozess",
              "Ein gemeinsames Dashboard",
              "Eine automatisierte Teststufe",
              "Ein Review nach einem Vorfall ohne Schuldzuweisungen",
              "Eine messbare Verbesserung"
            ],
            "label": "Fangt klein an:",
            "reveal": false,
            "revealItems": true
          }
        ],
        "composition": "agenda",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Praktische Checkliste",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Übernehmen wir Verantwortung für den gesamten Lebenszyklus?",
              "Können wir sicher deployen?",
              "Lernen wir aus Fehlern?",
              "Sprechen Entwicklung, Betrieb, QA und Security frühzeitig miteinander?",
              "Unterstützen unsere Tools die Zusammenarbeit?",
              "Verstehen wir, was KI-generierte Arbeit verändert?"
            ],
            "label": "Fragt euer Team:",
            "reveal": false,
            "revealItems": true
          }
        ],
        "composition": "agenda",
        "palette": "white",
        "density": "compact"
      },
      {
        "title": "Die wichtigste Erkenntnis",
        "blocks": [
          {
            "type": "text",
            "text": "DevOps-Kultur ist heute nicht weniger wichtig. Sie ist wichtiger.",
            "variant": "lead"
          },
          {
            "type": "text",
            "text": "Denn mit KI und Automatisierung:",
            "variant": "label"
          },
          {
            "type": "conceptCards",
            "columns": 3,
            "items": [
              {
                "title": "Teams bewegen sich schneller",
                "icon": "user"
              },
              {
                "title": "Systeme verändern sich schneller",
                "icon": "refresh"
              },
              {
                "title": "Fehler wirken sich schneller in größerem Maßstab aus",
                "icon": "trending-up"
              }
            ]
          },
          {
            "type": "text",
            "text": "Die Antwort sind nicht mehr Tools allein. Die Antwort sind eine bessere Kultur, besseres Feedback und gemeinsame Verantwortung.",
            "variant": "takeaway"
          },
          {
            "type": "bullets",
            "items": [
              "Octopus Deploy — DevOps Culture",
              "Martin Fowler — Dev Ops Culture",
              "Atlassian — DevOps-Kultur"
            ],
            "label": "Quellen:",
            "variant": "sources"
          }
        ],
        "composition": "culture-finale",
        "palette": "white",
        "density": "compact"
      }
    ];
  }

  function createCover(title) {
    return {
      title,
      subtitle: "Webinar",
      cover: true,
      blocks: [],
      composition: "cover",
      palette: "yellow"
    };
  }
})();
