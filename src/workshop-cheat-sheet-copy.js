(function () {
  // Only definitions are condensed. Terms and metaphors come from the summary
  // slides, so the online sheet and its PDF share the same source of truth.
  const copy = {
    de: {
      title: "Cheat Sheets", home: "Startseite", slides: "Folien öffnen",
      download: "PDF herunterladen", day: "Tag", navigation: "Workshop-Tag",
      format: "Eine Seite zum Nachschlagen · A4", metaphor: "Metapher",
      subtitles: ["Basics, Codex & gute Use Cases", "Projekte, Skills & sicher arbeiten"],
      footers: ["Ziel + Kontext + Regeln + Prüfkriterien", "Planen. Umsetzen. Prüfen. Freigeben."],
      sections: [
        [
          { title: "Basics", definitions: [
            "Sprachmodell, das passende nächste Textstücke vorhersagt.",
            "Ein Textstück: Wortteil, Wort oder Zeichenkette.",
            "Oberfläche für Nachrichten an ein LLM und seine Antworten.",
            "LLM-System, das Tools nutzt, handelt, prüft und weitermacht.",
            "Im Chat fragen; selbst entscheiden, was mit der Antwort passiert.",
            "Software grob beschreiben, testen und nach Gefühl anpassen.",
            "Ziel, Kontext, Dateien, Regeln und Grenzen für die Umsetzung geben."
          ] },
          { title: "Codex", definitions: [
            "Agentic-Coding-Umgebung für die Arbeit mit Projektdateien.",
            "Organisiert deine Arbeit in Codex.",
            "Das ausgewählte AI-Gehirn für die Aufgabe.",
            "Projektordner, in dem der Agent Dateien lesen und ändern darf.",
            "Programme und Apps, die der Agent nutzen kann.",
            "Ein spezielles Programm für Codex.",
            "Wiederholbare Agenten-Aufgabe mit einem Auslöser.",
            "Account-Bereich, der deine Codex-Nutzung zeigt."
          ] },
          { title: "Use Cases", definitions: [
            "Konkrete Aufgabe, bei der AI im Workflow Nutzen erzeugt.",
            "Material für die Aufgabe: Datei, Notizen, URL oder Tabelle.",
            "Gewünschtes Ergebnis: Report, Liste, Screenshots oder App.",
            "Feste Bedingung, die das Ergebnis erfüllen muss.",
            "Woran du erkennst, dass die Aufgabe gut genug erledigt ist.",
            "Input oder Ergebnis fehlt, ist falsch oder unklar.",
            "Entscheidung bleibt beim Menschen, z. B. Veröffentlichen oder Löschen."
          ] },
          { title: "Gute Use Cases wählen", definitions: [
            "Die Aufgabe kommt regelmäßig vor.",
            "Sie bindet spürbar Aufmerksamkeit.",
            "Ein gutes Ergebnis ist erkennbar.",
            "Fehler sind leicht zu entdecken und zu korrigieren.",
            "Beispiele, Dateien und Regeln sind vorhanden."
          ] }
        ],
        [
          { title: "Projekte & Planmodus", definitions: [
            "Eigener Workspace mit Dateien, Kontext und Regeln für einen Arbeitsbereich.",
            "Legt fest, was der Agent darf und wann er eine Freigabe braucht.",
            "Fokussiertes Aufgabenmaterial als Kontext für Codex.",
            "Kontext sammeln, Rückfragen stellen und vor der Umsetzung einen Plan vorschlagen.",
            "Wichtige offene Entscheidung vor dem Arbeitsstart klären.",
            "Arbeit starten, nachdem der vorgeschlagene Weg geprüft wurde."
          ] },
          { title: "Skills & Tools", definitions: [
            "Wiederverwendbare Anleitung für eine fokussierte Aufgabe.",
            "Hauptdatei mit Trigger, Workflow und Grenzen des Skills.",
            "Metadaten für Darstellung und Start eines lokalen Skills.",
            "Programm oder Schnittstelle zum Abrufen von Informationen oder Handeln.",
            "Installierbares Paket mit Apps, Skills und verbundenen Fähigkeiten.",
            "Wiederholbarer Prozess mit Informationen oder Aktionen aus einem anderen Tool."
          ] },
          { title: "Sicher arbeiten", definitions: [
            "Den engsten Zugriff wählen, der für die Aufgabe reicht.",
            "Nur wirklich benötigte Dateien und Ordner hinzufügen.",
            "Skills, Plugins, Anweisungen und Zugriffe vor der Nutzung prüfen.",
            "Vor Senden, Veröffentlichen, Löschen oder Geldausgeben entscheidet ein Mensch.",
            "Fakten, Namen, Preise, Daten, Links, Quellen und Markenton kontrollieren.",
            "Änderungen in der Vorschau prüfen und das Original sichern.",
            "Bei Auffälligkeiten Tool trennen und die verantwortliche Person informieren."
          ] }
        ]
      ]
    },
    en: {
      title: "Cheat Sheets", home: "Home", slides: "Open slides",
      download: "Download PDF", day: "Day", navigation: "Workshop day",
      format: "One page to keep close · A4", metaphor: "Metaphor",
      subtitles: ["Basics, Codex & good use cases", "Projects, skills & safe work"],
      footers: ["Goal + context + rules + check criteria", "Plan. Implement. Check. Approve."],
      sections: [
        [
          { title: "Basics", definitions: [
            "A language model that predicts likely next text pieces.",
            "A piece of text: part of a word, a word, or a character string.",
            "An interface for messages to an LLM and its answers.",
            "An LLM-based system that uses tools, acts, checks, and continues.",
            "Ask in chat; decide yourself what to do with the answer.",
            "Describe software loosely, try it, and adjust by feel.",
            "Give a goal, context, files, rules, and boundaries for implementation."
          ] },
          { title: "Codex", definitions: [
            "An agentic coding environment for working with project files.",
            "Organizes your work inside Codex.",
            "The selected AI brain for the task.",
            "Project folder where the agent may read and change files.",
            "Programs and apps the agent can use.",
            "A special program made for Codex.",
            "A repeatable agent task with a configured trigger.",
            "Account area showing how much Codex you have used."
          ] },
          { title: "Use cases", definitions: [
            "A concrete task where AI creates value in a workflow.",
            "Task material: a file, notes, URL, or table.",
            "Desired result: a report, list, screenshots, or app.",
            "A fixed condition the result must meet.",
            "How you recognize that the task is done well enough.",
            "Input or output is missing, wrong, or unclear.",
            "A decision kept with a person, such as publishing or deleting data."
          ] },
          { title: "Choose a good use case", definitions: [
            "The task comes up regularly.",
            "It noticeably absorbs attention.",
            "A good result is recognizable.",
            "Mistakes are easy to spot and correct.",
            "Examples, files, and rules are available."
          ] }
        ],
        [
          { title: "Projects & Plan Mode", definitions: [
            "Dedicated workspace with files, context, and rules for one area of work.",
            "Sets what the agent may do and when it needs approval.",
            "Focused task material shared with Codex as context.",
            "Gather context, ask questions, and propose a plan before implementation.",
            "Resolve an important missing decision before work starts.",
            "Start work after reviewing the proposed approach."
          ] },
          { title: "Skills & tools", definitions: [
            "A reusable playbook for a focused task.",
            "Main file with the skill's trigger, workflow, and constraints.",
            "Metadata for how a local skill appears and starts.",
            "Program or interface for retrieving information or taking action.",
            "Installable bundle of apps, skills, and connected capabilities.",
            "Repeatable process using information or actions from another tool."
          ] },
          { title: "Safe work", definitions: [
            "Choose the narrowest access that still allows the task.",
            "Add only the files and folders the task needs.",
            "Review skills, plugins, instructions, and requested access before use.",
            "A person decides before sending, publishing, deleting, or spending money.",
            "Check facts, names, prices, dates, links, sources, and brand tone.",
            "Preview changes and keep a backup of the original.",
            "Disconnect the tool and tell the responsible person if something looks wrong."
          ] }
        ]
      ]
    }
  };

  function getSheet(locale, day) {
    const language = window.HwI18n.normalizeLocale(locale);
    const selectedDay = String(day) === "2" ? 2 : 1;
    const labels = copy[language];
    const slides = window.HwI18n.getCopy(language)[selectedDay === 2 ? "slidesDay2" : "slides"];
    const summaries = slides.filter(slide => slide.layout === "summary");
    return {
      locale: language, day: selectedDay, labels,
      sections: summaries.map((slide, index) => ({
        title: labels.sections[selectedDay - 1][index].title,
        entries: slide.blocks.filter(block => block.type === "table").flatMap(block => block.rows).map((row, rowIndex) => ({
          term: row[0],
          definition: labels.sections[selectedDay - 1][index].definitions[rowIndex] || row[1],
          metaphor: typeof row[2] === "string" ? row[2].replace(/^[^\p{L}\p{N}]+/u, "") : row[2].text,
          emoji: typeof row[2] === "string" ? row[2].split(/\s/u)[0] : row[2].emojis.join("")
        }))
      }))
    };
  }

  window.HwCheatSheets = { getSheet };
})();
