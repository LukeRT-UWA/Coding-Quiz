var startButtonEl = document.getElementById('start')
var questionsContainerEl = document.getElementById('questions-container')
var score = 0;
var questionEl = document.getElementById('question')
var answer1El = document.getElementById('1')
var answer2El = document.getElementById('2')
var answer3El = document.getElementById('3')
var answer4El = document.getElementById('4')
var containerEl = document.getElementById('container')
var scoreEl = document.getElementById('score')
var startagainEl = document.getElementById('startagain')
var timerEl = document.getElementById('timer')
var highscoresEl = document.getElementById('highscores')
var timer;
var timerCount = 0
startButtonEl.addEventListener('click', startGame)
startagainEl.addEventListener('click', refreshpage);
function refreshpage(){
    window.location.reload();
}

function startGame() {

    console.log("I'm StartGame")
    startButtonEl.classList.add('hide')
    startagainEl.classList.add('hide')
    timerEl.classList.remove('hide')
    scoreEl.innerText = "";
    questionsContainerEl.classList.remove('hide')
    highscoresEl.classList.add('hide')
    score=0;
    timerCount = 30;
    startTimer();
    questions1();
}

function questions1() {
    console.log("I'm Question 1")
    questionEl.innerText = question1.question;
    answer1El.innerText = question1.answer1;
    answer2El.innerText = question1.answer2;
    answer3El.innerText = question1.answer3;
    answer4El.innerText = question1.answer4;
    answer1El.addEventListener('click', function(){

        ++score;
        questions2();
    });
    answer2El.addEventListener('click', function(){

        timerCount = timerCount - 5;
        questions2();
    });
    answer3El.addEventListener('click', function(){

        timerCount = timerCount - 5;
        questions2();
    });
    answer4El.addEventListener('click', function(){

        timerCount = timerCount - 5;
        questions2();
    });

    
}
var question1 = {
    question: "What is this",
    answer1: "Thing1Correct",
    answer2: "Thing2",
    answer3: "Thing3",
    answer4: "Thing4"
}

function questions2() {
    console.log("I'm Question 2")
    questionEl.innerText = question2.question;
    answer1El.innerText = question2.answer1;
    answer2El.innerText = question2.answer2;
    answer3El.innerText = question2.answer3;
    answer4El.innerText = question2.answer4;

    answer1El.addEventListener('click', function(){

        timerCount = timerCount - 5
        questions3();
    });
    answer2El.addEventListener('click', function(){

        timerCount = timerCount - 5
        questions3();
    });
    answer3El.addEventListener('click', function(){

        ++score;
        questions3();
    });
    answer4El.addEventListener('click', function(){

        timerCount = timerCount - 5
        questions3();
    });
}


var question2 = {
    question: "Whatsdfasdf is this",
    answer1: "Answers",
    answer2: "Answers2",
    answer3: "Answers3Correct",
    answer4: "Answers4"
}

function questions3() {
    console.log("I'm Question 2")
    questionEl.innerText = question3.question;
    answer1El.innerText = question3.answer1;
    answer2El.innerText = question3.answer2;
    answer3El.innerText = question3.answer3;
    answer4El.innerText = question3.answer4;

    answer1El.addEventListener('click', function(){

        timerCount = timerCount - 5
        questions4();
    });
    answer2El.addEventListener('click', function(){

        timerCount = timerCount - 5
        questions4();
    });
    answer3El.addEventListener('click', function(){

        ++score;
        questions4();
    });
    answer4El.addEventListener('click', function(){

        timerCount = timerCount - 5
        questions4();
    });
}


var question3 = {
    question: "Whatsdfasdf is this",
    answer1: "Answers",
    answer2: "Answers2",
    answer3: "Answers3Correct",
    answer4: "Answers4"
}

function questions3() {
    console.log("I'm Question 2")
    questionEl.innerText = question3.question;
    answer1El.innerText = question3.answer1;
    answer2El.innerText = question3.answer2;
    answer3El.innerText = question3.answer3;
    answer4El.innerText = question3.answer4;

    answer1El.addEventListener('click', function(){

        timerCount = timerCount - 5
        final();
    });
    answer2El.addEventListener('click', function(){

        timerCount = timerCount - 5
        final();
    });
    answer3El.addEventListener('click', function(){

        ++score;
        final();
    });
    answer4El.addEventListener('click', function(){

        timerCount = timerCount - 5
        final();
    });
}


var question4 = {
    question: "Whatsdfasdf is this",
    answer1: "Answers",
    answer2: "Answers2",
    answer3: "Answers3Correct",
    answer4: "Answers4"
}
function final() {
    
    clearInterval(timer);
    console.log("I'm Final")
    questionsContainerEl.classList.add('hide');
    scoreEl.innerText = ("You scored " + score + " points!")   
    startagainEl.classList.remove('hide');
    timerEl.textContent = ""
    highscoresEl.classList.remove('hide')
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount + " seconds left!";
          if (timerCount === 0) {
        clearInterval(timer);
        timerEl.textContent = ""
        window.alert("Out of time!")
        final();
      }
    }, 1000);
  }

