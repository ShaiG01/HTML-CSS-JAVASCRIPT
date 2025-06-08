import { updateBird, setUpBird } from './bird.js'

const title = document.querySelector('[data-title]');

document.addEventListener('keypress', handleStart, { once: true });

let lastTime;

function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }

  const delta = time - lastTime;
  lastTime = time;
  updateBird(delta)
 
  window.requestAnimationFrame(update);
}

function handleStart() {
  title.classList.add('hide');
  setUpBird()
  window.requestAnimationFrame(update);
}

function handleLose() {
  // To be implemented
}
