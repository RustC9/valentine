const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const celebration = document.getElementById("celebration");

const card = document.getElementById("card");

noBtn.addEventListener("mouseover", () => {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Meghana, will you be my Valentine? <br>YAY! 🎉";
  buttons.style.display = "none";
  celebration.classList.remove("hidden");
  startConfetti();
});

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function startConfetti() {
  confettiPieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 0.8 + 0.2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  }));
  requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d * 6;
    if (p.y > canvas.height) p.y = -10;
  });
  requestAnimationFrame(updateConfetti);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
