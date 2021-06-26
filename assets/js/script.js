const startButtonEl = document.getElementById('start')
const questionsContainerEl = document.getElementById('questions-container')

startButtonEl.addEventListener('click', startGame)

function startGame() {

    console.log("It worked!")
    startButtonEl.classList.add('hide')
    questionsContainerEl.classList.remove('hide')

}