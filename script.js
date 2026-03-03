
const startScreenElement = document.getElementById("start-screen");
const quizScreenElement = document.getElementById("quiz-screen");
const resultScreenElement = document.getElementById("result-screen");

const answersListElement = document.getElementById("answerslist");
const questionTextElement = document.getElementById("questionstext");

const startQuizButton = document.getElementById("startQuiz");

const questions = [
    {
        question: "Bei welchem der folgenden Filme hat Tim Burton keine Regie geführt?",
        points: 100,
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
        question: "Welche Filme sind die bekanntesten Filme von Ingmar Bergman?",
        points: 200,
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
        points: 300,
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
    },
    {
        question: "Welche Filme stammen von Quentin Tarantino?",
        points: 300,
        answers: [
            {
                answer: "Pulp Fiction",
                isCorrect: true
            },
            {
                answer: "Kill Bill",
                isCorrect: true
            },
            {
                answer: "Inglourious Basterds",
                isCorrect: true
            },
            {
                answer: "The Departed",
                isCorrect: false
            }
        ]
    },
    {
        question: `Welche Filme wurden mit dem Oscar für den besten Film ausgezeichnet?`,
        points: 200,
        answers: [
            {
                answer: "Parasite",
                isCorrect: true
            },
            {
                answer: "Titanic",
                isCorrect: true
            },
            {
                answer: "The Godfather",
                isCorrect: true
            },
            {
                answer: "The Dark Knight",
                isCorrect: false
            }
        ]
    },
    {
        question: "Welche Filme wurden von Stanley Kubrick gedreht?",
        points: 200,
        answers: [
            {
                answer: "Taxi Driver",
                isCorrect: false
            },
            {
                answer: "The Shining Velvet",
                isCorrect: true
            },
            {
                answer: "Apocalypse Now",
                isCorrect: false
            },
            {
                answer: "2001: A Space Odyssey",
                isCorrect: true
            }
        ]
    },
    {
        question: "Welche Filme sind die bekanntesten Filme von Federico Fellini?",
        points: 200,
        answers: [
            {
                answer: "8 1/2",
                isCorrect: true
            },
            {
                answer: "La dolce Vita",
                isCorrect: true
            },
            {
                answer: "Breathless",
                isCorrect: false
            },
            {
                answer: "Um Film comme les autres",
                isCorrect: false
            }
        ]
    },
    {
        question: "Welche dieser Filme sind Science-Fiction-Filme?",
        points: 200,
        answers: [
            {
                answer: "Gladiator",
                isCorrect: false
            },
            {
                answer: "Blade Runner",
                isCorrect: true
            },
            {
                answer: "The Revenant",
                isCorrect: false
            },
            {
                answer: "Arrival",
                isCorrect: true
            }
        ]
    },
    {
        question: "Wer nutze in den 60er Jahren Profile als Grundlage des Bildaufbaus?",
        points: 200,
        answers: [
            {
                answer: "Kurosawa",
                isCorrect: true
            },
            {
                answer: "Tarr",
                isCorrect: false
            },
            {
                answer: "Godard",
                isCorrect: false
            },
            {
                answer: "Bergman",
                isCorrect: true
            },
            {
                answer: "Fellini",
                isCorrect: false
            }
        ]
    },
    {
        question: `Wer ist der Regisseur des Films "Mommy"?`,
        points: 100,
        answers: [
            {
                answer: "Denis Villeneuve",
                isCorrect: false
            },
            {
                answer: "Xavier Dolan",
                isCorrect: true
            },
            {
                answer: "David Cronenberg",
                isCorrect: false
            },
            {
                answer: "Atom Egoyan",
                isCorrect: false
            },
            {
                answer: "Godard",
                isCorrect: false
            }
        ]
    }
]

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



let currentIndex = 0;
let score = 0;


noShowScreen("quiz-screen");
noShowScreen("result-screen");
showScreen("start-screen");

// start quiz
startQuizButton.addEventListener("click", () => {
    noShowScreen("start-screen");
    showScreen("quiz-screen");
    showQuestion(currentIndex);
});

const resultText = document.getElementById("resultText");
const toStartButton = document.getElementById("toStart");

// show result-screen
toStartButton.addEventListener("click", () => {
    score = 0;
    currentIndex = 0;
    noShowScreen("quiz-screen");
    noShowScreen("result-screen");
    showScreen("start-screen");
});


// show screen
function showScreen(id) {
    document.getElementById(id).classList.remove("hidden");
}

// no schow screen
function noShowScreen(id) {
    document.getElementById(id).classList.add("hidden");
}

// show question+answers 
// create checkboxes
// check answers
// show result-screen
function showQuestion(currentIndex) {
    const question = questions[currentIndex];

    quizScreenElement.innerHTML = `
      <div class="quiz">
          <h2>Frage ${currentIndex + 1}</h2>
          <p class="question"><mark>${question.question}</mark></p>
          <div id="answers" class="answer"></div>
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

    
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", () => {

        const checkboxes = document.querySelectorAll('#answers input[type="checkbox"]');
        let isAllCorrect = true;

        checkboxes.forEach((checkbox, index) => {
            const isChecked = checkbox.checked;
            const isCorrect = question.answers[index].isCorrect;

            if (isChecked !== isCorrect) {
                isAllCorrect = false;
            }
        });

        if (isAllCorrect) {
            score += question.points;
        }

        currentIndex++;

        if (currentIndex < questions.length) {
            showQuestion(currentIndex);
        } else {
            noShowScreen("quiz-screen");
            showScreen("result-screen");
            resultText.textContent = `Deine Ergebnis:\n${score} / 2000 points`;
        }
    });
}



// TODO: 
// Variable anlegen, wo drin steht, bei welcher Frage ich gerade bin (fängt bei 0 an).
// Per index eine Frage auslesen.
// Fragestellung auf den Screen malen.
// Mit Schleife durch Antwortmöglichkeiten druchgehen und für jede einen Button machen.
// Wenn auf den Button gedrückt wird -> überprüfen, ob sie richtig ist
// Punkte hochzählen
// Die Zählervariable erhöhen.
// Nächste Frage.

// function checkAnswer(selectedIndex) {
//   // Vergleich mit isCorrect
//   // score erhöhen falls richtig
//   // currentIndex++
//   // showQuestion(currentIndex) oder showScreen("result-screen")
// }