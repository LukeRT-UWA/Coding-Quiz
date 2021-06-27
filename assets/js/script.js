var startButtonEl = document.getElementById('start')
var questionsContainerEl = document.getElementById('questions-container')
var score = 0;
var questionEl = document.getElementById('question')
var answer1El = document.getElementById('1')
var answer2El = document.getElementById('2')
var answer3El = document.getElementById('3')
var answer4El = document.getElementById('4')
startButtonEl.addEventListener('click', startGame)

function startGame() {

    console.log("It worked!")
    startButtonEl.classList.add('hide')
    questionsContainerEl.classList.remove('hide')
    questions1();
}

function questions1() {
    console.log("something")
    questionEl.innerText = question1.question;
    answer1El.innerText = question1.answer1;
    answer2El.innerText = question1.answer2;
    answer3El.innerText = question1.answer3;
    answer4El.innerText = question1.answer4;
}
var question1 = {
    question: "What is this",
    answer1: "Thing1",
    answer2: "Thing2",
    answer3: "Thing3",
    answer4: "Thing4"
}

console.log (question1.answer4);