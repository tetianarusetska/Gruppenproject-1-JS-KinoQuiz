const questions = [
    {
        question: "Bei welchen der folgenden Filme hat Tim Burton keine Regie geführt?",
        points: 200,
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
                answer: "Beetlejuice Beetlejuice",
                isCorrect: false
            },
            {
                answer: "Big Fish",
                isCorrect: false
            }
        ]
    },
    {
        question: "Welche Filme sind die bekanntesten Werke von Ingmar Bergman?",
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
                answer: "The Godfather/Der Pate",
                isCorrect: false
            },
            {
                answer: "La Dolce Vita",
                isCorrect: false
            }
        ]
    },

    {
        question: "Welcher Film von David Lynch gewann 1990 die Goldene Palme bei den Filmfestspielen von Cannes?",
        points: 200,
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
            }
        ]
    },
    {
        question: "Welche Filme stammen von Quentin Tarantino?",
        points: 200,
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
                answer: "The Godfather/Der Pate",
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
                answer: "The Shining",
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
        question: "Welche Filme sind die bekanntesten Werke von Federico Fellini?",
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
                answer: "Un Film comme les autres",
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
        question: "Wer nutzte in den 60er Jahren Gesichtsprofile als Grundlage des Bildaufbaus?",
        points: 200,
        answers: [
            {
                answer: "Akira Kurosawa",
                isCorrect: true
            },
            {
                answer: "Béla Tarr",
                isCorrect: false
            },
            {
                answer: "Jean-Luc Godard",
                isCorrect: false
            },
            {
                answer: "Ingmar Bergman",
                isCorrect: true
            }
        ]
    },
    {
        question: `Welche Filme gehören zu den bekanntesten Werken von Xavier Dolan?`,
        points: 200,
        answers: [
            {
                answer: "Mommy",
                isCorrect: true
            },
            {
                answer: "Laurence Anyways",
                isCorrect: true
            },
            {
                answer: "Tom at the Farm",
                isCorrect: true
            },
            {
                answer: "Inception",
                isCorrect: false
            }
        ]
    }
]

// (!!) Den Timer haben wir mithilfe eines Video-Tutorials geschrieben

const startScreenElement = document.getElementById("start-screen");
const quizScreenElement = document.getElementById("quiz-screen");
const resultScreenElement = document.getElementById("result-screen");

const startQuizButton = document.getElementById("startQuiz");
const toStartButton = document.getElementById("toStart");

const resultTextElement = document.getElementById("resultText");


let currentIndex = 0;
let score = 0;
let amountCorAnsw = 0;

// Timer
let countdownElement;
let timer;
let startMinutes = 3;
let time;


// show screen
function showScreen(id) {
    document.getElementById(id).classList.remove("hidden");

}
// don´t show screen
function noShowScreen(id) {
    document.getElementById(id).classList.add("hidden");
}


// start quiz == show quiz-screen
startQuizButton.addEventListener("click", () => {

    score = 0;
    currentIndex = 0;
    amountCorAnsw = 0;

    noShowScreen("start-screen");
    showScreen("quiz-screen");

    // Timer:
    time = startMinutes * 60;
    countdownElement = document.getElementById("countdown");
    timer = setInterval(updateCountdown, 1000);

    // show question + answer
    showQuestion(currentIndex);
});


// restart quiz == show start-screen
toStartButton.addEventListener("click", () => {

    // Timer:
    clearInterval(timer);

    score = 0;
    currentIndex = 0;
    amountCorAnsw = 0;

    noShowScreen("result-screen");
    showScreen("start-screen");
});


// show questions + answers 
// click submitButton
function showQuestion(currentIndex) {

    const question = questions[currentIndex];
    const container = document.getElementById("container");

    container.innerHTML = `
        <div>
            <h2>Frage ${currentIndex + 1}</h2>
            <p class="question">${question.question}</p>
            <div id="answers" class="answer"></div>
            <button id="submitButton">Bestätigen</button>
        </div>
      `;
    
    // create answers
    makeAnswers(question.answers);

    // On click, the answer is checked, if correct the function showResult() is called
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", () => checkAnswer(question));
}


// create answers
function makeAnswers(answers) {

    const answersElement = document.getElementById("answers");

    answersElement.innerHTML = "";

    // create answers
    answers.forEach((answerObj, index) => {

        answersElement.innerHTML += `
            <input type="checkbox" value="${index}">
            <span>${answerObj.answer}</span><br>
        `;
    });

    // another version answers.forEach

    // answers.forEach((answerObj, index) => {
    //     const checkbox = document.createElement("input");
    //     checkbox.type = "checkbox";
    //     checkbox.value = index;

    //     const answerText = document.createElement("span");
    //     answerText.textContent = answerObj.answer;

    //     answersElement.appendChild(checkbox);
    //     answersElement.appendChild(answerText);
    //     answersElement.appendChild(document.createElement("br"));
    // });
}

// check answers
function checkAnswer(question) {
    // gets the checkboxes
    const checkboxes = document.querySelectorAll('#answers input');

    let isAllCorrect = true;

    // checks if the answer is correct
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked !== question.answers[index].isCorrect) {
            isAllCorrect = false;
        }
    });
    // If correct: increases score and correct answer count
    if (isAllCorrect) {
        score += question.points;
        amountCorAnsw++;
    }
    // next question
    currentIndex++;
    // show result-screen or next question
    if (currentIndex < questions.length) {
        showQuestion(currentIndex);
    } else {
        showResult();
    }
}


// show result
function showResult() {

    noShowScreen("quiz-screen");
    showScreen("result-screen");

    resultTextElement.textContent = `Dein Ergebnis:\n${score} / 2000 Punkte
                                    \nDu hast ${amountCorAnsw} Fragen richtig beantwortet!`;
}


// Timer
function updateCountdown() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (countdownElement) {
        countdownElement.innerHTML = `${minutes}:${seconds}`;
    }

    if (time <= 0) {
        clearInterval(timer);
        showResult();
        resultTextElement.textContent = `Zeit ist abgelaufen\n\nDein Ergebnis:\n${score} / 2000 Punkte
                                        \nDu hast ${amountCorAnsw} Fragen richtig beantwortet!`;
    }

    time--;
}

// ANDERE VERSION SubmitButton + Event:

//  submitButton.addEventListener("click", () => {

//         const checkboxes = document.querySelectorAll('#answers input[type="checkbox"]');
//         let isAllCorrect = true;

//         checkboxes.forEach((checkbox, index) => {
//             const isChecked = checkbox.checked;
//             const isCorrect = question.answers[index].isCorrect;

//             if (isChecked !== isCorrect) {
//                 isAllCorrect = false;
//             }
//         });

//         if (isAllCorrect) {
//             score += question.points;
//         }

//         currentIndex++;

//         if (currentIndex < questions.length) {
//             showQuestion(currentIndex);
//         } else {
//             noShowScreen("quiz-screen");
//             showScreen("result-screen");
//             resultText.textContent = `Deine Ergebnis:\n${score} / 2000 points`;
//         }
//     });



// ESRTE VERSION ShowQuestion() + submitButton:

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

// Joker-Funktionen – 50:50, Frage überspringen, zweite Chance
// Highscore – lokal gespeichert mit LocalStorage
// Feedback-Zwischenschritt – „Richtig!" / „Falsch!" vor der nächsten Frage