//DOM Selection
var startButtonEl = document.getElementById('start')
var questionsContainerEl = document.getElementById('questions-container')
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
var scoreInputEl = document.getElementById('score-input')
var nameInputEl = document.getElementById('nameinput')
var highscorelistEl = document.getElementById('highscorelist')
//Score and time values
var score = 0;
var timer;
var timerCount = 0
var playerfinalscores = []
//Start Button
startButtonEl.addEventListener('click', startGame)
//Click to clear and refresh
startagainEl.addEventListener('click', refreshpage);
function refreshpage(){
    window.location.reload();
}
highscoresEl.addEventListener('click', renderScores);
//Begin Game
function startGame() {

    
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
//Questions and answer buttons
function questions1() {
   
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
        --timerCount
        --timerCount
        questions2();
    });
    answer3El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions2();
    });
    answer4El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions2();
    });

    
}
var question1 = {
    question: "Commonly used data types DO NOT include:",
    answer1: "Alerts(Correct)",
    answer2: "Booleans",
    answer3: "Strings",
    answer4: "Numbers"
}

function questions2() {
    
    questionEl.innerText = question2.question;
    answer1El.innerText = question2.answer1;
    answer2El.innerText = question2.answer2;
    answer3El.innerText = question2.answer3;
    answer4El.innerText = question2.answer4;

    answer1El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions3();
    });
    answer2El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions3();
    });
    answer3El.addEventListener('click', function(){

        ++score;
        questions3();
    });
    answer4El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions3();
    });
}


var question2 = {
    question: "The condition in an if/else statement is enclosed within",
    answer1: "Quotes",
    answer2: "Curly Brackets",
    answer3: "Parentheses (correct)",
    answer4: "Square Brackets"
}

function questions3() {
    
    questionEl.innerText = question3.question;
    answer1El.innerText = question3.answer1;
    answer2El.innerText = question3.answer2;
    answer3El.innerText = question3.answer3;
    answer4El.innerText = question3.answer4;

    answer1El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions4();
    });
    answer2El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions4();
    });
    answer3El.addEventListener('click', function(){
        --timerCount
        --timerCount
        questions4();
    });
    answer4El.addEventListener('click', function(){
    
        ++score;
        questions4();
    });
}


var question3 = {
    question: "Arrays in Javascript can be used to store ____",
    answer1: "Numbers and strings",
    answer2: "Other Arrays",
    answer3: "Booleans",
    answer4: "All of the above"
}

function questions4() {
  
    questionEl.innerText = question4.question;
    answer1El.innerText = question4.answer1;
    answer2El.innerText = question4.answer2;
    answer3El.innerText = question4.answer3;
    answer4El.innerText = question4.answer4;

    answer1El.addEventListener('click', function(){
        --timerCount
        --timerCount
        final();
    });
    answer2El.addEventListener('click', function(){
        --timerCount
        --timerCount
        final();
    });
    answer3El.addEventListener('click', function(){

        ++score;
        final();
    });
    answer4El.addEventListener('click', function(){
        --timerCount
        --timerCount
        final();
    });
}


var question4 = {
    question: "String values must be enclosed within ___ when being used to assign variables",
    answer1: "Commass",
    answer2: "Curly Brackets",
    answer3: "Quotes Correct",
    answer4: "Parentheses"
}
//Produces results
function final() {
    
    clearInterval(timer);

    questionsContainerEl.classList.add('hide');
    scoreEl.innerText = ("You scored " + score + " points!")   
    
    timerEl.textContent = ""
    scoreInputEl.classList.remove('hide')
}
//Timer Function
function startTimer() {
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

//High Scores Functions

//High Scores Button

  scoreInputEl.addEventListener('submit', function(event) {
	event.preventDefault();

	var playernamescore = (nameInputEl.value + " " + score);
	if (nameInputEl.value === '') {
		return false;
	}
	playerfinalscores.push(playernamescore);
	scoreInputEl.value = '';
    startagainEl.classList.remove('hide');
    nameInputEl.classList.add('hide');
    scoreEl.innerText = "";
	storeScores();
	renderScores();

  })

  function storeScores() {
	localStorage.setItem('playerfinalscores', JSON.stringify(playerfinalscores));
   
}

function renderScores() {
	for (var i = 0; i < playerfinalscores.length; i++) {
		var playerfinalscore = playerfinalscores[i];

		var li = document.createElement('li');
		li.textContent = playerfinalscore;
		li.setAttribute('data-index', i);

		highscorelistEl.appendChild(li);
	}
}

function init() {
    var storedplayerfinalscores = JSON.parse(localStorage.getItem("playerfinalscores"));
   
    if (storedplayerfinalscores !== null) {
        playerfinalscores = storedplayerfinalscores;
    }
  
  }

  init();