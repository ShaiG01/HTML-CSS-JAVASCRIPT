const birdElem = document.querySelector('[data-bird]');
let birdSpeed = 0.3;
let timeSinceLastJump = Number.POSITIVE_INFINITY;
const jumpDuration = 500;

export function setUpBird() {
  setTop(window.innerHeight / 2);
  document.removeEventListener('keydown', handleJump);
  document.addEventListener('keydown', handleJump);
}

export function updateBird(delta) {
  if (timeSinceLastJump < jumpDuration) {
    setTop(getTop() - birdSpeed * delta);
  } else {
    setTop(getTop() + birdSpeed * delta);
  }

  timeSinceLastJump += delta;
}

function setTop(top) {
  birdElem.style.setProperty('--bird-top', `${top}`);
}

function getTop() {
  const top = getComputedStyle(birdElem).getPropertyValue('--bird-top');
  return parseFloat(top); // Removes "px" and returns number
}

function handleJump(e) {
  if (e.code !== "Space") return; // Fix: "Space" is a string!
  timeSinceLastJump = 0;
}
