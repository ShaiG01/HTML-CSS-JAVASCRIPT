import Ball from './ball.js';
import Paddle from './paddle.js';

const ball = new Ball(document.querySelector('.ball'));
const playerPaddle = new Paddle(document.querySelector('.paddleLeft'));
const compPaddle = new Paddle(document.querySelector('.paddleRight'));
const playerScoreElem = document.querySelector('.yourScore');
const compScoreElem = document.querySelector('.computerScore');

let lastTime = null;
let playerScore = 0;
let compScore = 0;

compPaddle.position = ball.x;

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;

    // Update ball, passing paddle bounding rects
    ball.update(delta, [playerPaddle.rect(), compPaddle.rect()]);

    // AI paddle follows ball.y smoothly (y is in vh units)
    compPaddle.update(delta, ball.x);

    const rect = ball.rect();

    // Check if ball goes past right or left edge (score)
    if (rect.right >= window.innerWidth + 1000) {
      playerScore++;
      playerScoreElem.textContent = playerScore;
      resetPositions();
    } else if (rect.left <= -1000) {
      compScore++;
      compScoreElem.textContent = compScore;
      resetPositions();
    }
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

function resetPositions() {
  ball.reset();
  playerPaddle.reset();
  compPaddle.reset();
}

document.addEventListener('mousemove', e => {
  playerPaddle.position = (e.y / window.innerHeight) *100;
});

window.requestAnimationFrame(update);
