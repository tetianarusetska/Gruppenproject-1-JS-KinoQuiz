
const startScreenElement = document.getElementById("start-screen");

const quizScreenElement = document.getElementById("quiz-screen");

const resultScreenElement = document.getElementById("result-screen");

const answersListElement = document.getElementById("answerslist");

const questionTextElement = document.getElementById("questionstext");


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

let currentIndex = 0;
let score = 0;

const getQuizButton = document.getElementById("getQuiz");



getQuizButton.addEventListener("click", () => {
    showQuestion(currentIndex)
})





function showScreen(id) {


}
function showQuestion(index) {
    const question = questions[index];

    
    questionTextElement.textContent = `Frage 1: ${question.question}`;

    
    answersListElement.innerHTML = "";

     const acceptButton = document.createElement("button");
     acceptButton.id = "acceptButton"
     
        acceptButton.textContent ="Ok";

        quizScreenElement.appendChild(acceptButton);

        
    acceptButton.addEventListener("click", () => {
        
        currentIndex++;
        console.log("Button clicked!");

        if (currentIndex < questions.length) {
            showQuestion(currentIndex);
        } else {
            console.log("Quiz finished! Score:", score);
            
        }
    });

    
    question.answers.forEach(answerObj => {
        const li = document.createElement("li");

        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = answerObj.answer; 

        
        li.appendChild(checkbox);

       
        const text = document.createTextNode(" " + answerObj.answer);
        li.appendChild(text);

        
        

       

        answersListElement.appendChild(li);




        
    });

}

const acceptButton = document.getElementById("acceptButton");







// function checkAnswer(selectedIndex) {
//   // Vergleich mit isCorrect
//   // score erhöhen falls richtig
//   // currentIndex++
//   // showQuestion(currentIndex) oder showScreen("result-screen")
// }





//     quizScreenElement.innerHTML = `
//         <div><h3>Frage ${currentIndex + 1}</h3>
//         <p>${questions[currentIndex].question}</p>
//         <p>${questions[currentIndex].answers}</p>
//       </div>
//     `;



function checkAnswer(selectedIndex) {

}
