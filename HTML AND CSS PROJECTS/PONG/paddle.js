const SPEED = 0.01;

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
  }

  get position() {
    return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
  }

  set position(value) {
    // Clamp between 0 and 100 to keep paddle inside viewport vertically
    value = Math.max(0, Math.min(100, value));
    this.paddleElem.style.setProperty("--position", value);
  }

  rect() {
    return this.paddleElem.getBoundingClientRect();
  }

  update(delta, ballY) {
        // Move paddle position smoothly toward ball's Y (vertical) position
        // ballY and position are both percentages (0 to 100)
         this.position += SPEED * delta * (ballY - this.position);
  }
  reset() {
    this.position = 50; // Center paddle
  }
}
