const INITIAL_VELOCITY = 0.0025;
const VELOCITY_INCREASE = 0.00001;

export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
    this.reset();
  }

  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
  }

  set x(value) {
    this.ballElem.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
  }

  set y(value) {
    this.ballElem.style.setProperty("--y", value);
  }

  rect() {
    return this.ballElem.getBoundingClientRect();
  }

  reset() {
    this.x = 50;
    this.y = 50;
    
    // Ensure initial direction has enough horizontal velocity but not too steep
    this.direction = { x: 0 };
    while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    
    this.velocity = INITIAL_VELOCITY;
  }

  update(delta, paddleRects) {
   this.x += this.direction.y * this.velocity * delta;
   this.y += this.direction.x * this.velocity * delta; // vertical movement, controls --x (top)



    this.velocity += VELOCITY_INCREASE * delta;

    const rect = this.rect();

    // Bounce off top and bottom
    if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
      this.direction.y *= -1;
    }

    // Bounce off paddles
    for (const paddleRect of paddleRects) {
      if (isCollision(paddleRect, rect)) {
        this.direction.x *= -1;

        // Slightly adjust y direction based on where ball hits paddle
        const paddleCenter = paddleRect.top + paddleRect.height / 2;
        const ballCenter = rect.top + rect.height / 2;
        const deltaY = ballCenter - paddleCenter;
        this.direction.y = deltaY * 0.01; // Adjust bounce angle
        break;
      }
    }
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function isCollision(rect1, rect2) {
  return (
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top
  );
}
