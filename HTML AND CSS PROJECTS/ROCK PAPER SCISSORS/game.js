const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumnComputer = document.querySelector('[data-final-column-computer]');
const finalColumn = document.querySelector('[data-final-column]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const resetBtn = document.querySelector('.reset');
const computerName = 'Computer';
const yourName = 'You';
const overlay = document.querySelector('.overlay');
const theWinner = document.querySelector('.theWinner');
const tryAgain = document.querySelector('.try');
let gameRunning = true;

const SELECTIONS = [
  { name: 'rock', emoji: '✊', beats: 'scissors' },
  { name: 'paper', emoji: '✋', beats: 'rock' },
  { name: 'scissors', emoji: '✌️', beats: 'paper' }
];

selectionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectionName = button.dataset.selection;
    const selection = SELECTIONS.find(sel => sel.name === selectionName);
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addResultsSelection(computerSelection, computerWinner, finalColumnComputer);
  addResultsSelection(selection, yourWinner, finalColumn);

  if (yourWinner) {
    increment(yourScoreSpan);
    if (parseInt(yourScoreSpan.innerText) === 5) {
      declareWinner(yourName);
    }
  }

  if (computerWinner) {
    increment(computerScoreSpan);
    if (parseInt(computerScoreSpan.innerText) === 5) {
      declareWinner(computerName);
    }
  }
}

function increment(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}


function addResultsSelection(selection, winner, container) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('resultsSelection');
  div.classList.add(winner ? 'winner' : 'loser');
  container.appendChild(div);
}



function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function declareWinner(winnerName) {
  overlay.classList.add('appear');
  theWinner.innerText = winnerName + ' is the winner';
}

// ✅ Reset functionality
resetBtn.addEventListener('click', () => {
  yourScoreSpan.innerText = 0;
  computerScoreSpan.innerText = 0;
  finalColumn.innerHTML = '';
  finalColumnComputer.innerHTML = '';
  overlay.classList.remove('appear');
});

// ✅ Try again reload
tryAgain.addEventListener('click', () => {
  location.reload();
});
