var scoresList = document.querySelector('#scoresList')
var highScores = JSON.parse(localStorage.getItem('highScores')) || []

scoresList.innerHtml =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')
