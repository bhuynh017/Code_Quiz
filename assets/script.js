var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-button')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    //questionContainerElement.classList.remove('hide')
    shuffleQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {

}

var questions = [
    {
        question: 'Commonly used data types DO NOT inçclude:',
        answers: [
            {text: 'Strings, correct: false'},
            {text: 'Booleans, correct: false'},
            {text: 'Alerts, correct: true'},
            {text: 'Number, correct: false'},
        ]
    }
]