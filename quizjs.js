const quizData = [
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["A) Asia", "B) Africa", "C) Australia", "D) South America"],
        answer: "B) Africa"
    },
    {
        question: "What is the longest river in the world?",
        options: ["A) Amazon River", "B) Nile River", "C) Yangtze River", "D) Mississippi River"],
        answer: "B) Nile River"
    },
    {
        question: "Which country has the largest population?",
        options: ["A) India", "B) USA", "C) China", "D) Russia"],
        answer: "C) China"
    },
    {
        question: "Which planet has the most moons?",
        options: ["A) Saturn", "B) Jupiter", "C) Uranus", "D) Neptune"],
        answer: "B) Jupiter"
    },
    {
        question: "What is the closest star to Earth?",
        options: ["A) Alpha Centauri", "B) Betelgeuse", "C) Sirius", "D) Proxima Centauri"],
        answer: "D) Proxima Centauri"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const optionsHtml = currentQuestion.options.map(option => `<li><button onclick="checkAnswer('${option}', this)">${option}</button></li>`).join("");

    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <ul class="options">${optionsHtml}</ul>
    `;
}

function checkAnswer(selectedOption, button) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    currentQuestionIndex++;

    setTimeout(() => {
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizContainer.innerHTML = "";
    resultContainer.innerHTML = `Quiz Completed! Your total score is: ${score} out of ${quizData.length}`;
}

loadQuestion();