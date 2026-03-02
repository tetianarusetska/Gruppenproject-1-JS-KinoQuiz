
const startScreenElement = document.getElementById("start-screen");

const quizScreenElement = document.getElementById("quiz-screen");

const resultScreenElement = document.getElementById("result-screen");


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
        question: "Welche Filme sind die bekannteste Film von Ingmar Bergman?",
        points: 300,
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
    }
]

console.log(questions)



const getQuizButton = document.getElementById("getQuiz");

getQuizButton.addEventListener("click", () => {
    showQuestion(2)
})



let currentIndex = 0;
let score = 0;

function showScreen(id) {


}
function showQuestion(currentIndex) {
    // quizScreenElement.textContent = questions[1].question;


    quizScreenElement.innerHTML = `
        <div><h3>Frage ${currentIndex + 1}</h3>
        <p>${questions[currentIndex].question}</p>
        <p>${questions[currentIndex].answers.join(", ")}</p>
      </div>
    `;
}


function checkAnswer(selectedIndex) {

}
