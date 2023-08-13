const questions = [
    {
        question: "Inside wich HTML elemt do we put the JavaScript?",
        choices: ["1- <scripting>", "2- <js>", "3- <script>"],
        answer: "3- <script>",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["1- the <head> section", "2- the <body> section", "3- both <head> and <body> section"],
        answer: "2- the <body> section",
    },
    {
        question: "how do you create a function in JavaScript?",
        choices: ["1- function = myFunction()", "2- function : myFunction()", "3- function myFunction() "],
        answer: "1- function = myFunction()",
    },
    {
        question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
        choices: ["1- if (i <> 5) ", "2- if (i != 5)", "3- if i <>5 "],
        answer: "2- if (i != 5)",
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["1- var carName;", "2- variable carName;", "3- v carName; "],
        answer: "1- var carName;",
    },
];

var box = document.getElementById('box');
var startBtn = document.getElementsById("start-btn");
var quiz = document.getElementById("questions");
var questionElement = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

var currentQuestionIndex = 0;

var timeLeft = 10; // Time in seconds
var timerInterval;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.style.display = "none";
    quiz.style.display = "block";
    startTimer();
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answer1.textContent = currentQuestion.choices[0];
        answer2.textContent = currentQuestion.choices[1];
        answer3.textContent = currentQuestion.choices[2];
    } else {
        // Quiz ended
        clearInterval(timerInterval);
        quiz.style.display = "none";
        box.innerHTML = "Quiz ended!";
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    timeLeft -= 5; //deduct 5 second for incorrect answer
    displayQuestion();
    startTimer();
};