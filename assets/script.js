var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    questionContainerElement.classList.remove('hide')
}

function selectAnswer() {

}