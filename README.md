# Gruppenaufgabe: Quiz-App

## Beschreibung

Ihr entwickelt gemeinsam eine interaktive Quiz-App im Browser. Die App stellt dem Benutzer nacheinander Fragen mit jeweils mehreren Antwortmöglichkeiten. Nach dem Auswählen einer Antwort geht es automatisch zur nächsten Frage weiter – am Ende wird das Ergebnis mit der Anzahl der erreichten Punkte angezeigt.

---

## Anforderungen

### Pflichtanforderungen

1. **Fragen & Antworten** – Die App zeigt eine Frage mit mindestens drei Antwortmöglichkeiten an.
2. **Spielfluss** – Bei einer richtigen Antwort wird das Quiz fortgesetzt und zur nächsten Frage gewechselt. Falsche Antworten führen ebenfalls zur nächsten Frage (ohne die Punktzahl zu erhöhen).
3. **Punktestand** – Richtige Antworten werden gezählt und am Ende des Quiz angezeigt.
4. **Ergebnisanzeige** – Nach der letzten Frage sieht der Benutzer sein Ergebnis (z. B. „Du hast 6 von 10 Fragen richtig beantwortet.") sowie eine Möglichkeit, das Quiz neu zu starten.
5. **Responsives Design** – Die App soll auf verschiedenen Bildschirmgrößen (Desktop, Tablet, Smartphone) gut aussehen und bedienbar sein.
6. **Ansprechendes UI** – Die Benutzeroberfläche soll klar strukturiert, visuell ansprechend und intuitiv bedienbar sein.

---

## Arbeitsweise

- Kein Framework (kein React, kein Vue, kein Build-Tool)
- Die gesamte Gruppe arbeitet gemeinsam an einem Branch
- Eine Person tippt, die anderen denken mit, erklären, hinterfragen und planen
- Am nächsten Tag wird die tippende Person gewechselt
- Am Ende jedes Tages wird der aktuelle Stand gepusht
- Zu Beginn des nächsten Tages pullt die neue tippende Person den aktuellen Stand
- Ziel ist gemeinsames Problemlösen, nicht Aufgabenaufteilung

---

## Benutzeroberfläche & Responsives Design

Klar strukturierter Aufbau:
- Frage
- Antwortmöglichkeiten (Buttons oder klickbare Flächen)
- ggf. Fortschritt (z. B. „Frage 3 von 10")

Responsives Layout:
- Gut nutzbar auf Smartphone und Desktop
- Ausreichend große Buttons (touch-freundlich)

Mindestens ein bewusst eingesetztes UI-Element, z. B.:
- Karten-Layout
- Fortschrittsanzeige
- Visuelles Feedback bei Klick

---

## Bonus-Ideen

- **Multiple Choice** – mehrere richtige Antworten pro Frage
- **Joker-Funktionen** – 50:50, Frage überspringen, zweite Chance
- **Timer** – pro Frage oder für das gesamte Quiz
- **Highscore** – lokal gespeichert mit LocalStorage
- **Feedback-Zwischenschritt** – „Richtig!" / „Falsch!" vor der nächsten Frage

---

## Beispiel-Datensatz

Die Fragen werden direkt als Array im JavaScript-Code definiert:

```js
const questions = [
  {
    question: "Was ist die Hauptstadt von Australien?",
    answers: [
      { answer: "Sydney",    isCorrect: false },
      { answer: "Melbourne", isCorrect: false },
      { answer: "Canberra",  isCorrect: true  },
      { answer: "Brisbane",  isCorrect: false }
    ]
  },
  {
    question: "Welches Element hat das chemische Symbol 'O'?",
    answers: [
      { answer: "Gold",      isCorrect: false },
      { answer: "Osmium",    isCorrect: false },
      { answer: "Sauerstoff",isCorrect: true  },
      { answer: "Ozon",      isCorrect: false }
    ]
  },
  {
    question: "Wie viele Seiten hat ein Oktaeder?",
    answers: [
      { answer: "6",  isCorrect: false },
      { answer: "8",  isCorrect: true  },
      { answer: "10", isCorrect: false },
      { answer: "12", isCorrect: false }
    ]
  },
];
```

---

## Lösungsansatz

**Idee:** Die drei Bereiche der App (Start, Quiz, Ergebnis) werden als `<section>`-Elemente im HTML angelegt. Per CSS wird immer nur der aktive Bereich eingeblendet. Der Quiz-Bereich selbst wird dynamisch befüllt – eine `currentIndex`-Variable speichert, bei welcher Frage man gerade ist, und bei jeder Antwort wird der DOM direkt aktualisiert.

```html
<section id="start-screen">...</section>
<section id="quiz-screen" class="hidden">...</section>
<section id="result-screen" class="hidden">...</section>
```

```js
let currentIndex = 0;
let score = 0;

function showScreen(id) {
  // Alle Sections verstecken
  // Section mit der passenden id einblenden
}

function showQuestion(currentIndex) {
  // Frage und Antwort-Buttons dynamisch in #quiz-screen schreiben
}

function checkAnswer(selectedIndex) {
  // Vergleich mit isCorrect
  // score erhöhen falls richtig
  // currentIndex++
  // showQuestion(currentIndex) oder showScreen("result-screen")
}
```
