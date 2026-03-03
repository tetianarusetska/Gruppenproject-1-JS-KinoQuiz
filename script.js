
const startScreenElement = document.getElementById("start-screen");
const quizScreenElement = document.getElementById("quiz-screen");
const resultScreenElement = document.getElementById("result-screen");

const answersListElement = document.getElementById("answerslist");
const questionTextElement = document.getElementById("questionstext");

const startQuizButton = document.getElementById("startQuiz");

const questions = [
    {
        question: "Bei welchem der folgenden Filme hat Tim Burton keine Regie geführt?",
        answers: [
            {
                answer: "Coraline",
                isCorrect: true
            },
            {
                answer: "Nightmare before Christmas",
                isCorrect: true
            },
            {
                answer: "Beetlejuice, Beetlejuice",
                isCorrect: false
            },
            {
                answer: "Big Fish",
                isCorrect: false
            }
        ]
    },
    {
        question: "Welche Filme sind die bekannteste Film von Ingmar Bergman?",
        answers: [
            {
                answer: "Persona",
                isCorrect: true
            },
            {
                answer: "Das siebente Siegel",
                isCorrect: true
            },
            {
                answer: "8 1/2",
                isCorrect: false
            },
            {
                answer: "La Dolce Vita",
                isCorrect: false
            },
            {
                answer: "Drei Farben: Blau",
                isCorrect: false
            }
        ]
    },

    {
        question: "Welcher Film von David Lynch gewann 1990 die Goldene Palme bei den Filmfestspielen von Cannes?",
        answers: [
            {
                answer: "Wild at Heart",
                isCorrect: true
            },
            {
                answer: "Blue Velvet",
                isCorrect: false
            },
            {
                answer: "Mulholland Drive",
                isCorrect: false
            },
            {
                answer: "Lost Highway",
                isCorrect: false
            },
            {
                answer: "Elephant Man",
                isCorrect: false
            }
        ]
    }
]


let currentIndex = 0;
let score = 0;

startQuizButton.addEventListener("click", () => {
    showScreen("quiz-screen");
    showQuestion(currentIndex);
});


// const acceptButton = document.createElement("button");
// acceptButton.textContent = "Bestätigen";
// quizScreenElement.appendChild(acceptButton);

// acceptButton.addEventListener("click", () => {

//     currentIndex++;

//     if (currentIndex < questions.length) {
//         showQuestion(currentIndex);
//     }
// });



// function showQuestion(currentIndex) {
//     const question = questions[currentIndex];

//     questionTextElement.textContent = `Frage ${currentIndex + 1}: ${question.question}`;
//     answersListElement.innerHTML = "";

//     question.answers.forEach(answerObj => {
//         const li = document.createElement("li");

//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.value = answerObj.answer;

//         li.appendChild(checkbox);

//         li.appendChild(document.createTextNode(" " + answerObj.answer));

//         answersListElement.appendChild(li);
//     });
// }

// TODO: 
// Variable anlegen, wo drin steht, bei welcher Frage ich gerade bin (fängt bei 0 an).
// Per index eine Frage auslesen.
// Fragestellung auf den Screen malen.
// Mit Schleife durch Antwortmöglichkeiten druchgehen und für jede einen Button machen.
// Wenn auf den Button gedrückt wird -> überprüfen, ob sie richtig ist
// Punkte hochzählen
// Die Zählervariable erhöhen.
// Nächste Frage.

// let currentIndex = 0;
// let score = 0;

// function showScreen(id) {
//   // Alle Sections verstecken
//   // Section mit der passenden id einblenden
// }

// function showQuestion(currentIndex) {
//   // Frage und Antwort-Buttons dynamisch in #quiz-screen schreiben
// }

// function checkAnswer(selectedIndex) {
//   // Vergleich mit isCorrect
//   // score erhöhen falls richtig
//   // currentIndex++
//   // showQuestion(currentIndex) oder showScreen("result-screen")
// }

function showScreen(id) {
    startScreenElement.classList.add("hidden");
    quizScreenElement.classList.add("hidden");
    resultScreenElement.classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("active");
}

function showQuestion(currentIndex) {
    const question = questions[currentIndex];

    quizScreenElement.innerHTML = `
      <div>
          <h2>Frage ${currentIndex + 1}</h2>
          <p>${question.question}</p>
          <div id="answers"></div>
          <button id="submitButton">Bestätigen</button>
      </div>
      `;

    const answersElement = document.getElementById("answers");


    question.answers.forEach((answerObj, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = index;

        const answerText = document.createElement("span");
        answerText.textContent = answerObj.answer;

        answersElement.appendChild(checkbox);
        answersElement.appendChild(answerText);
        answersElement.appendChild(document.createElement("br"));
    });


    submitButton.addEventListener("click", () => {
        currentIndex++;

        if (currentIndex < questions.length) {
            showQuestion(currentIndex);
        } else {
            showScreen("result-screen");
        }

        resultScreenElement.textContent = `Ergebnis: ${score}`;

        const checkboxes = document.querySelectorAll('#answers input[type="checkbox"]');

        checkboxes.forEach((checkbox, index) => {
            const isChecked = checkbox.checked;
            const isCorrect = question.answers[index].isCorrect;

            if (isChecked === isCorrect) {
                score += 100;
            }
        });
    });
}

