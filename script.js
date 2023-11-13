const questions = [
    {
        question: "Inside wich HTML elemt do we put the JavaScript?",
        choices: ["1- <scripting>", "2- <js>", "3- <script>"],
        answer: "3- <script>",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: [
            "1- the <head> section",
            "2- the <body> section",
            "3- both <head> and <body> section",
        ],
        answer: "2- the <body> section",
    },
    {
        question: "how do you create a function in JavaScript?",
        choices: [
            "1- function = myFunction()",
            "2- function : myFunction()",
            "3- function myFunction() ",
        ],
        answer: "1- function = myFunction()",
    },
    {
        question:
            "How to write an IF statement for executing some code if i is NOT equal to 5?",
        choices: ["1- if (i <> 5) ", "2- if (i != 5)", "3- if i <>5 "],
        answer: "2- if (i != 5)",
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["1- var carName;", "2- variable carName;", "3- v carName; "],
        answer: "1- var carName;",
    },
];

const startBtn = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const questionsContainer = document.getElementById("questions");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll("#questions button");

let currentQuestionIndex = 0;
let timeLeft = 60; // quiz time

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("box").style.display = "none";
    questionsContainer.style.display = "block";
    setTime();
    showQuestion();
}

function setTime() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}`;

        if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.addEventListener("click", () => checkAnswer(index));
    });
}

function checkAnswer(userChoice) {
    if (userChoice === questions[currentQuestionIndex].correctAnswer) {
        // Handle correct answer logic, update score if necessary
    } else {
        // Handle incorrect answer logic, subtract time if necessary
        timeLeft -= 10; // Deduct 10 seconds for incorrect answers
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
};

function endQuiz() {
    // Display the final score and allow the user to input initials
    document.getElementById("questions").style.display = "none";
    const finalScore = timeLeft > 0 ? timeLeft : 0;
    document.getElementById("box").innerHTML = `
      <h1>Quiz Over!</h1>
      <p>Your final score is: ${finalScore}</p>
      <label for="initials">Enter your initials:</label>
      <input type="text" id="initials" />
      <button id="submit-score" onclick="saveScore()">Submit Score</button>
    `;
}

function saveScore() {
    const initials = document.getElementById("initials").value;
    // Handle saving the score, you can use localStorage or send it to a server
    // You might want to redirect to a high scores page or do something else here
};
