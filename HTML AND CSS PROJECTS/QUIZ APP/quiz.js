const startButton = document.querySelector('.startBtn');
const mainPageHeading = document.querySelector('.heading');
const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.buttons');
const questionContainer = document.querySelector('.questionContainer');
const nextButton = document.querySelector('.nextBtn');
const body = document.querySelector('body')
const score = document.querySelector('.score')

let userScore = 0
let shuffledQuestions;
let currentQuestionIndex = 0;

// Sample questions array
const questionsData = [
    {
        question: 'What is 2 plus 2?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Lisbon', correct: false }
        ]
    },

      {
        question: 'What is 6 plus 4?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '10', correct: true },
            { text: '5', correct: false }
        ]
    },
    
    {
        question: 'What is the capital of Japan?',
        answers: [
            { text: 'Mexico', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Paris', correct: false },
            { text: 'Manila', correct: false }
        ]
    }
];


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if(currentQuestionIndex < shuffledQuestions.length){
    setNextQuestion()
    }

    else{
    resetState()
    nextButton.classList.add('hide')
    questionContainer.classList.add('hide')
    startButton.innerText = "restart"
    startButton.classList.remove('hide')
    mainPageHeading.classList.remove('hide') }

})


function startGame() {
    userScore = 0
    score.innerText = userScore
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    mainPageHeading.classList.add('hide');
    startButton.classList.add('hide');
    score.classList.remove('hide')
    shuffledQuestions = questionsData.sort(() => Math.random() - 0.5)
    setNextQuestion()
  

}

function setNextQuestion() {
    resetState()
    showNextQuestion(shuffledQuestions[currentQuestionIndex])
}

function showNextQuestion(questionObj) {
    questionElement.innerText = questionObj.question

    questionObj.answers.forEach(answer => {
    const buttons = document.createElement('button')
    buttons.classList.add('answer')
    buttons.innerText = answer.text 
    if(answer.correct){
        buttons.dataset.correct = answer.correct
    }

    buttons.addEventListener('click', selectAnswer)
    answersContainer.appendChild(buttons)
})

}

function resetState() {
    nextButton.classList.add('hide')

    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    body.classList.remove('correct')
    body.classList.remove('incorrect')

}

function selectAnswer(e) {
    const selectedAnswer = e.target
    const correct = selectedAnswer.dataset.correct ===  'true'
    

    if(correct){
        selectedAnswer.classList.add('correct')
        body.classList.add('correct')
        userScore += 100
        score.innerText = userScore
       
    }

    else{
        selectedAnswer.classList.add('incorrect')
          body.classList.add('incorrect')
    }

        Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
    });



    nextButton.classList.remove('hide')
}