const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 150;
const cursor = { x: 0, y: 0, radius: 100 };

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.originalVx = this.vx;
    this.originalVy = this.vy;
  }

  update() {
    // Repel from cursor
const dx = this.x - cursor.x;
const dy = this.y - cursor.y;
const distance = Math.sqrt(dx * dx + dy * dy);
if (distance < cursor.radius) {
  const angle = Math.atan2(dy, dx);
  const repulsionForce = (cursor.radius - distance) / cursor.radius;
  this.vx += Math.cos(angle) * repulsionForce * 1;
  this.vy += Math.sin(angle) * repulsionForce * 1;
} else {
  // Gradually return to original velocity
  const speed = Math.sqrt(this.originalVx * this.originalVx + this.originalVy * this.originalVy);
  const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  const directionX = this.originalVx / Math.sqrt(this.originalVx * this.originalVx + this.originalVy * this.originalVy);
  const directionY = this.originalVy / Math.sqrt(this.originalVx * this.originalVx + this.originalVy * this.originalVy);
  this.vx += (directionX * speed - this.vx) * 0.7;
  this.vy += (directionY * speed - this.vy) * 0.7;
}

    // Keep velocity
    this.x += this.vx;
    this.y += this.vy;

    // Store original velocity
    if (distance > cursor.radius + 15) {
      this.originalVx = this.vx;
      this.originalVy = this.vy;
    }

    // Boundary check
if (this.x < 0) {
  this.x = 0;
  this.vx *= -1;
  this.originalVx *= -1;
} else if (this.x > canvas.width) {
  this.x = canvas.width;
  this.vx *= -1;
  this.originalVx *= -1;
}

if (this.y < 0) {
  this.y = 0;
  this.vy *= -1;
  this.originalVy *= -1;
} else if (this.y > canvas.height) {
  this.y = canvas.height;
  this.vy *= -1;
  this.originalVy *= -1;
}
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles() {
  const colors = ['#00ffff', '#ff00ff', '#00ff88', '#ffaa00', '#9966ff'];
  for (let i = 0; i < particleCount; i++) {
    const particle = new Particle();
    particle.color = colors[i % colors.length]; // Even distribution
    particles.push(particle);
  }
}

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 60) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 60})`;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  drawLines();

  requestAnimationFrame(animate);
}

initParticles();
animate();

// Update cursor position
document.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});