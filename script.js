var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var timeEl = document.querySelector(".time");

var currentQuestion = {}
var acceptingAnswers = true
var questionCounter = 0
var availableQuestions = {}

var questions = [
    {
        question: 'Commonly used data types does NOT include:',
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        answer: 'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___',
        choice1: 'quotes',
        choice2: 'curly brackets',
        choice3: 'parenthesis',
        choice4: 'square brackets',
        answer: 'parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        choice1: 'numbers and strings',
        choice2: 'other arrays',
        choice3: 'booleans',
        choice4: 'all the above',
        answer: 'all the above',
    },
    {
        question: 'String values must be enclosed within ____ when being being assigned to a variable.',
        choice1: 'commas',
        choice2: 'curly brackets',
        choice3: 'quotes',
        choice4: 'parenthesis',
        answer: 'parenthesis',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'JavaScript',
        choice2: 'terminal',
        choice3: 'for loops',
        choice4: 'console log',
        answer: 'console log',
    },
]

var MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    questionCounter++

    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

startGame();
setTime();