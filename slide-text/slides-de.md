# Agentic Coding für kreative Teams

## Folie 1: Agentic Coding für kreative Teams

_Von Chatbots zu Agenten im kreativen Arbeitsalltag_

Sprechernotizen: Halte es einfach. Ziel ist, Angst abzubauen und die Neugierlücke zu schließen.

## Folie 2: Lukas Aichbauer

_Über mich_

Bild: `assets/lukas-aichbauer.webp`

- Co-Founder @ PebbleByte GmbH
- Lecturer @ Technikum Wien
- E-Mail: lukas@pebblebyte.com
- LinkedIn: /in/aichbauer

## Folie 3: Wer seid Ihr?

- Arbeitsbereich
  - Icon: briefcase
  - In welchem Bereich arbeitet ihr?
- AI-Erfahrung
  - Icon: brain
  - Welche Erfahrung habt ihr mit AI?
- Erwartungen
  - Icon: question-mark
  - Was erwartet ihr von diesem Workshop?

## Folie 4: Wofür nutzen wir KI-Agenten?

**Websites entwickeln**

Wir entwickeln und verbessern die DevOpsCycle-Website mit KI-Agenten.

- [devopscycle.com](https://devopscycle.com)

**Vertriebspartner finden**

Wir recherchieren Agenturen in Österreich, Deutschland und der Schweiz, die RevWize über unser Partnermodell verkaufen könnten.

- [revwize.com](https://revwize.com)
- [Partner-Leads · Excel-Demo](../src/assets/showcases/revwize-partner-leads-demo.xlsx)

**Marketingmaterial erstellen**

Wir erstellen Cheat Sheets, Produktinfoseiten und Präsentationen für den Vertriebspartner-Pitch per Prompt.

- [Docker Cheat Sheet · Bild](../src/assets/showcases/ultimate-docker-cheat-sheet.webp)
- [RevWize-Infoseiten · PDF](../src/assets/showcases/revwize-partner-info-de.pdf)
- [Partner-Pitch · PDF](../src/assets/showcases/revwize-partner-pitch.pdf)

## Folie 5: Drei Starter-Ideen

- Marketing
  - Icon: search
  - Kundenbewertungen enthalten starke Marketing-Sprache, werden aber selten systematisch analysiert.
  - Review-Mining-App: sammelt Reviews aus G2, Trustpilot, App Store, Amazon oder Support-Tickets und extrahiert Pain Points, Nutzenversprechen, Einwände und wiederverwendbare Formulierungen.
- Designer:innen
  - Icon: pencil
  - Desktop-, Tablet- und Mobile-Layouts zu prüfen kostet regelmäßig Zeit und viel manuelle Aufmerksamkeit.
  - Responsive-Screenshot-Reviewer: URL eingeben, Breakpoint-Screenshots erzeugen und Overflow, kaputte Layouts, winzige Schrift oder abgeschnittene Buttons markieren.
- Projektmanagement
  - Icon: clipboard-list
  - Anforderungen, User Flows und Akzeptanzkriterien bleiben oft unterschiedlich interpretierbar.
  - Prototype-as-Acceptance-App: macht aus einem Briefing einen Browser-Prototypen mit User Flows, Zuständen, Edge Cases und Akzeptanzkriterien als ausführbare Entwickler:innen-Referenz.

## Folie 6: Was wir behandeln

_Agenda_

- Ankommen, Vorstellung und Starter-Ideen
- LLMs, Chatbots, Agenten und Agentic Coding
- AI-Agenten-Landschaft und Codex-Setup
- Einen guten ersten Use Case finden
- Übungen: Input, Schritte, Regeln, Auftragsdesign und Fehlerfälle

## Folie 7: LLM / Chatbot / Agent

_Vom Gehirn zur Handlung_

- Large Language Model (LLM)
  - Icons: 🧠
  - Computerprogramm
  - Metapher: Gehirn
- Chatbot
  - Icons: 👀 👂 👄
  - Gesprächsoberfläche
  - Metapher: Augen, Ohren, Mund
- Agent
  - Icons: 🤲 💪 🦵
  - Nutzt Tools und handelt
  - Metapher: Hände, Arme, Füße

## Folie 8: LLM

_Input -> LLM (Computerprogramm) -> Output_

So kann man sich grob vorstellen, was in einem Large Language Model passiert.

| Schritt | Was passiert |
| --- | --- |
| Input | Satzanfang: "Der Himmel ist ..." |
| LLM | "blau" -> 0,87; "bewölkt" -> 0,09; "grün" -> 0,04 |
| Output | "Der Himmel ist blau." |

Ganz grob: Es versteht nicht wie ein Mensch. Es nutzt Muster aus vielen Texten, um passende nächste Tokens vorherzusagen. Tokens sind kleine Textstücke: Wortteile, ganze Wörter oder Buchstabenketten.

## Folie 9: Chatbot

_Mensch -> Webseite -> Server mit LLM -> Antwort_

Ein Chatbot ist eine Webseite oder App, die deine Nachricht an ein LLM schickt und die Antwort anzeigt.

| Schritt | Was passiert |
| --- | --- |
| Mensch | Tippt eine Frage oder Aufgabe |
| Webseite | Chatbot-Seite oder App |
| Server + LLM | Sagt Tokens voraus und baut Text |
| Antwort | Computer zeigt die Antwort |

Ganz grob: Der Chatbot ist die Oberfläche und Verbindung. Das LLM läuft meistens auf einem Server; dein Computer zeigt das Gespräch.

## Folie 10: Agent

_Ziel -> Agent (LLM + Programme) -> Ergebnis_

Ein Agent bekommt ein Ziel und kann Tools benutzen, um Schritte auszuführen.

| Schritt | Was passiert |
| --- | --- |
| Ziel | Aufgabe: "Füge zwei Folien hinzu und prüfe das Deck." |
| Agent | Spricht mit LLM; nutzt Programme: PowerPoint, Google Slides, Browser; liest und ändert Dateien; prüft das Ergebnis |
| Ergebnis | Geändertes Deck plus kurze Zusammenfassung |

Ganz grob: Ein Agent hört nicht bei einer Textantwort auf. Er kann planen, handeln, prüfen und weiterarbeiten, bis die Aufgabe erledigt ist.

## Folie 11: Vom Rezept zum Chef

_Prompting / Vibe Coding / Agentic Coding_

Gleiche KI, aber anders gesteuert: fragen, improvisieren oder Umsetzung führen.

| Schritt | Erklärung |
| --- | --- |
| Prompting | Du fragst im Chat und bekommst eine Antwort; du entscheidest selbst, was du damit machst; Metapher: Rezept anfragen |
| Vibe Coding | Du beschreibst die App grob und kopierst Code hin und her; starten, anschauen, nach Gefühl anpassen; Metapher: "Irgendwas mit Pasta" |
| Agentic Coding | Du gibst Ziel, Kontext, Dateien und Grenzen; Agent plant, ändert, testet und verbessert; Metapher: Chef in der Küche |

Kernidee: Prompting fragt, Vibe Coding probiert, Agentic Coding lässt mit Kontext und Review ausführen.

## Folie 12: AI-Agenten-Landschaft

_Sechs Beispiele mit unterschiedlichen Anwendungsfällen und Gebieten_

- Codex
- Claude Code
- Qwen Code
- Mistral Vibe Code
- Zapier Agents
- OpenClaw

## Folie 13: Codex installieren

_Setup_

Button: https://openai.com/codex/

Link: https://openai.com/codex/

## Folie 14: Codex zuerst öffnen

_Start_

Bild: `assets/codex-pictures/first-open-codex-en-de.png`

## Folie 15: Anmelden

_Erstes Öffnen_

Bild: `assets/codex-pictures/first-open-codex-click-signin-en-de.png`

## Folie 16: Anmeldung fortsetzen

_Erstes Öffnen_

Bild: `assets/codex-pictures/first-open-codex-continue-sign-in-en-de.png`

## Folie 17: Anmeldung erfolgreich

_Erstes Öffnen_

Bild: `assets/codex-pictures/first-open-codex-sign-in-successful-en-de.png`

## Folie 18: Codex Startseite

_Nach dem ersten Login_

Bild: `assets/codex-pictures/how-codex-looks-first-login-de.png`

## Folie 19: Neues Projekt erstellen

_Projekt-Setup_

Bild: `assets/codex-pictures/create-new-project-de.png`

## Folie 20: Projekt benennen

_Projekt-Setup_

Bild: `assets/codex-pictures/create-project-name-de.png`

## Folie 21: Projekt auswählen

_Wo das Projekt ausgewählt wird_

Bild: `assets/codex-pictures/select-project-codex-de.png`

## Folie 22: Kleiner Selbstversuch

_Bevor wir mit eigenen Use Cases starten_

- Mini Todo List App
  - Icon: clipboard-list
  - Eine einfache Aufgabenliste mit Hinzufügen, Abhaken, Löschen und leerem Zustand.
  - Gut, um Formulare, Listen, Zustände und kleine Datenmodelle greifbar zu machen.
- Landing Page clonen
  - Icon: world
  - Eine Landing Page anhand eines Screenshots nachbauen.
  - Gut, um Layout, Typografie, Farben, Abstände und responsive Details zu trainieren.

Button: Ideen

Link: https://excalidraw.com/#room=fae440cad3935c8cd21e,5SXK_ml_xSQCC_sP_CaovQ

## Folie 23: OpenAI-Modelle im Überblick

_GPT-6 & GPT-5.6 · Berufsalltag & kreative Aufgaben · Stand: 16.09.2026_

| Modell | Fokus / typische Anwendungen | Kontext (Tokens) | Max. Output (Tokens) | Reasoning-Aufwand | Input (USD / Mio.) | Output (USD / Mio.) | Wissensstand |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | Anspruchsvollste Aufgaben | 1,05 Mio. | 128.000 | low → max | $10,00 | $50,00 | 30.04.2026 |
| GPT-5.6 Sol | Komplexe professionelle Arbeit | 1,05 Mio. | 128.000 | none → max | $4,00 | $20,00 | 16.02.2026 |
| GPT-5.6 Terra | Balance aus Qualität und Kosten | 1,05 Mio. | 128.000 | none → max | $2,00 | $12,00 | 16.02.2026 |
| GPT-5.6 Luna | Günstig bei hohem Volumen | 1,05 Mio. | 128.000 | none → max | $0,20 | $1,20 | 16.02.2026 |

Preise in USD pro 1 Mio. Tokens: API-Standardtarif bei kurzem Kontext und ungecachtem Input. Input = gesendetes Material; Output = erzeugte Tokens. Langer Kontext kostet mehr.

Kontext = was gleichzeitig auf den Schreibtisch des Modells passt: Gespräch, Briefing und Dokumente. Tokens sind kleine Textbausteine; Mio. = Millionen. Wissensstand = Stichtag des eingebauten Modellwissens; neuere Fakten brauchen aktuelle Quellen.

Reasoning = wie viel Aufwand das Modell ins Durchdenken deiner Aufgabe steckt. Kurz umformulieren braucht wenig; Optionen anhand mehrerer Anforderungen abzuwägen kann von mehr profitieren. Mehr Aufwand kann länger dauern. none = aus; low → max = wenig bis maximal.

[Quellen: OpenAI-Modellkatalog](https://developers.openai.com/api/docs/models)

[OpenAI-API-Preise (USD / 1 Mio. Tokens)](https://developers.openai.com/api/docs/pricing)

## Folie 24: Wie funktioniert Reasoning?

_Ein interner Arbeitsentwurf vor der Antwort_

Das Modell erzeugt interne Reasoning-Tokens: Zwischenschritte, die für dich normalerweise unsichtbar bleiben.

**Damit kann es**

- Die Aufgabe in kleinere Schritte zerlegen.
- Lösungswege vergleichen und Zwischenergebnisse prüfen.
- Einen Ansatz überarbeiten und die Antwort entwickeln.

**Reasoning & Agenten**

Reasoning ist eine Fähigkeit des Modells, Aufgaben zu durchdenken. Ein Agent nutzt ein Modell und Werkzeuge, um zu handeln, Ergebnisse zu prüfen und weiterzuarbeiten.

Beispiel: Reasoning hilft, ein Kampagnenbudget abzuwägen. Ein Agent kann zusätzlich die Budgetdatei öffnen und den Plan als Dokument speichern.

Mehr Reasoning = mehr Rechenaufwand für diese Schritte. Das kann bei schwierigen Aufgaben helfen und länger dauern; richtige Antworten sind nicht garantiert.

[Quelle: OpenAI – Reasoning](https://developers.openai.com/api/docs/guides/reasoning)

## Folie 25: Modell auswählen

_Wo das Modell ausgewählt wird_

Bild: `assets/codex-pictures/select-llm-model-de.png`

## Folie 26: Workspace auswählen

_Wo der Agent arbeitet_

Bild: `assets/codex-pictures/select-where-agent-works-de.png`

## Folie 27: Plugins einbinden

_Verfügbare Tools_

Bild: `assets/codex-pictures/include-plugins-de.png`

## Folie 28: Was ist eine Automation?

_Aufgaben nach Zeitplan_

Eine Automation startet eine festgelegte Aufgabe automatisch, sobald ihr Auslöser eintritt.

**Beispiel: ein Wochenbericht**

🕘 **Zeitplan**: 09:00, jeden Montag → ⚙️ **Aufgabe**: Projektstand zusammenfassen → 📋 **Ergebnis**: Wochenbericht

- Der Agent folgt deinen Anweisungen.
- Das Ergebnis ist bereit zum Prüfen.
- ⟳ Nächsten Montag um 09:00 wiederholen.

Einmal einrichten. Bei jedem Termin automatisch ausführen.

Visuell: Icons mit Verbindungspfeilen und Rückpfeil zum nächsten Termin. Zahnrad und Wiederholungssymbol drehen sich beim Aufrufen der Folie einmal.

Sprechernotizen: Die Uhrzeit ist ein Beispiel, keine tatsächlich laufende Automation. Der Rückpfeil bedeutet einen neuen Durchlauf zum nächsten Termin, keine dauerhaft laufende Aufgabe. Andere Automationen können statt nach Zeitplan auch durch ein Ereignis starten.

## Folie 29: Automations erstellen

_Automation-Setup_

Bild: `assets/codex-pictures/create-automations-1-de.png`

## Folie 30: Automations konfigurieren

_Automation-Setup_

Bild: `assets/codex-pictures/create-automations-2-de.png`

## Folie 31: Usage finden

_Account Usage_

Bild: `assets/codex-pictures/where-to-find-usage-1-de.png`

## Folie 32: Usage Details

_Account Usage_

Bild: `assets/codex-pictures/where-to-find-useage-2-de.png`

## Folie 33: Welche Use Cases eignen sich für den Einstieg?

_Klein starten, echten Nutzen erzeugen_

| Ein guter erster Use Case ist | Woran man es erkennt |
| --- | --- |
| häufig | die Aufgabe kommt regelmäßig vor |
| zeitaufwendig | sie bindet spürbar Aufmerksamkeit |
| klar prüfbar | ein gutes Ergebnis ist erkennbar |
| risikoarm | Fehler lassen sich leicht entdecken und korrigieren |
| kontextreich | Beispiele, Dateien und Regeln sind vorhanden |

## Folie 34: Use-Case-Board

_Excalidraw_

Button: Find your usecase

Link: https://excalidraw.com/#room=3f7fb564ea3a699c6fd3,sDK2_w9L9RRcSUgP1PYFTA

## Folie 35: Übung 1: Input und Output definieren

_Dauer: 5 Minuten_

Fragen:

- Was bekommt das Programm?
- In welchem Format?
- Was soll es erzeugen?
- Wie soll das Ergebnis aussehen?

| Input | Output |
| --- | --- |
| Datei | Zusammenfassung oder Report |
| Notizen | Aufgabenliste |
| URL | Screenshots und Fehler |
| CSV-Tabelle | Themen und Beispiele |

Beispiel Coffee-Shop-Landing-Page: Input: Kampagnen-Briefing, Shop-Fotos, Speisekarten-CSV und Brand-Notizen. Output: Landing-Page-Struktur, Sektionstexte, Angebotsblöcke, Bildvorschläge und CTA-Varianten.

## Folie 36: Übung 2: Den Prozess zerlegen

_Dauer: 5 Minuten_

Ziel: Die Aufgabe in kleine, programmierbare Schritte aufteilen.

Allgemeiner Prozessablauf:

1. Input auswählen
2. Input öffnen oder lesen
3. relevante Informationen extrahieren
4. Regeln anwenden
5. Probleme oder Ergebnisse sammeln
6. Output erstellen

Beispiel Coffee-Shop-Landing-Page: Kampagnen-Briefing lesen, Angebot und Tonalität extrahieren, Seitensektionen auswählen, Texte pro Sektion schreiben, Speisekarte und Bildplatzhalter einsetzen und HTML-Seite exportieren.

## Folie 37: Übung 3: Regeln und Beispiele sammeln

_Dauer: 5 Minuten_

Ziel: Implizites Wissen sichtbar machen.

Sammelt:

- feste Regeln
- gute Beispiele
- schlechte Beispiele
- Ausnahmen
- typische Fehler

Allgemeine Beispiele:

- Pflichtfelder müssen vorhanden sein
- verbotene Wörter oder Platzhalter dürfen nicht vorkommen
- das Ausgabeformat folgt einem bekannten Beispiel
- Ausnahmen werden explizit aufgelistet
- typische Fehler sollen leicht erkennbar sein

Beispiel Coffee-Shop-Landing-Page: Die Headline nennt das saisonale Getränk, der CTA lautet "Tisch reservieren" oder "Vorbestellen", Öffnungszeiten sind above the fold sichtbar, kein Platzhaltertext bleibt stehen und das Original-Briefing wird nicht verändert.

## Folie 38: Zusammenfassung: Basics

_Wichtige Wörter und Metaphern_

| Wort | Bedeutung | Metapher |
| --- | --- | --- |
| LLM | Ein Sprachmodell, das aus Input passende nächste Textstücke vorhersagt. | 🧠 Gehirn |
| Token | Ein kleines Textstück: Wortteil, ganzes Wort oder Zeichenkette. | 🧩 Text-Baustein |
| Chatbot | Eine Oberfläche, die Nachrichten an ein LLM schickt und Antworten zeigt. | 👀👂👄 Augen, Ohren, Mund |
| Agent | Ein LLM-basiertes System, das Tools nutzen, handeln, prüfen und weitermachen kann. | 🤲💪🦵 Hände, Arme, Füße |
| Prompting | Im Chat fragen und selbst entscheiden, was man mit der Antwort macht. | 📖 Rezept anfragen |
| Vibe Coding | Software grob beschreiben, ausprobieren und nach Gefühl anpassen. | 🍝 "Irgendwas mit Pasta" |
| Agentic Coding | Ziel, Kontext, Dateien, Regeln und Grenzen geben, damit ein Agent umsetzt. | 🍲 Chef in der Küche |

## Folie 39: Zusammenfassung: Codex

_Setup-Wörter und Metaphern_

| Wort | Bedeutung | Metapher |
| --- | --- | --- |
| Codex | Eine Agentic-Coding-Umgebung, die mit deinen Projektdateien arbeiten kann. | 🧑‍🍳 Chefkoch |
| Projekt | Der Ort, an dem deine Arbeit in Codex organisiert ist. | 🏪 Restaurant |
| Modell | Das ausgewählte AI-Gehirn, das Codex für die Aufgabe nutzt. | 🎓 Gehirn des Chefs |
| Workspace | Der Projektordner, in dem der Agent Dateien lesen und ändern darf. | 🍳 Küche |
| Tool | Programme und Apps, die der Agent nutzen kann. | 🛠️ Küchenwerkzeuge |
| Plugin | Ein spezielles Programm, das für Codex gemacht ist. | 🧰 Spezielles Küchenwerkzeug |
| Automation | Eine wiederholbare Agenten-Aufgabe, die über einen Auslöser laufen kann. | ⏲️ Küchentimer |
| Usage | Der Account-Bereich, in dem du siehst, wie viel Codex genutzt wurde. | 💸 Gehalt für den Koch |

## Folie 40: Zusammenfassung: Use Cases

_Anweisungen und Metaphern_

| Wort | Bedeutung | Metapher |
| --- | --- | --- |
| Use Case | Eine konkrete Aufgabe, bei der AI im Workflow Nutzen erzeugt. | 📋 Gericht auf der Karte |
| Input | Das Material, das das Programm bekommt: Datei, Notizen, URL oder Tabelle. | 🥕 Zutaten |
| Output | Das Ergebnis, das das Programm erzeugen soll: Report, Liste, Screenshots oder App. | 🍽️ Fertiges Gericht |
| Regel | Eine feste Bedingung, die das Ergebnis erfüllen muss. | 📏 Kochregel |
| Prüfkriterien | Woran man erkennt, dass die Aufgabe gut genug erledigt ist. | 👅 Geschmackstest |
| Fehlerfall | Eine Situation, in der Input oder Ergebnis fehlt, falsch oder unklar ist. | ❓ Fehlende Zutat |
| Freigabe durch Menschen | Eine Entscheidung, die bei Menschen bleibt, z. B. veröffentlichen oder Daten löschen. | ✅ Chef:in gibt frei |

| Guter Use Case ist | Woran man es erkennt | Metapher |
| --- | --- | --- |
| häufig | die Aufgabe kommt regelmäßig vor | 🔁 Regelmäßige Bestellung |
| zeitaufwendig | sie bindet spürbar Aufmerksamkeit | ⏳ Lange Vorbereitung |
| klar prüfbar | ein gutes Ergebnis ist erkennbar | 🔍 Qualitätscheck |
| risikoarm | Fehler lassen sich leicht entdecken und korrigieren | 🛟 Sicherheitsnetz |
| kontextreich | Beispiele, Dateien und Regeln sind vorhanden | 🗂️ Rezeptarchiv |
