const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const dateMessage = document.getElementById("dateMessage");
const music = document.getElementById("bgMusic");
const photo = document.querySelector(".valentine-img");
const heartsContainer = document.querySelector(".hearts");

// YES button behavior
yesBtn.addEventListener("click", () => {
  message.innerText =
    "Yay!! 💕 I can’t wait to spend Valentine’s with you, Neha 😘";

  dateMessage.innerText =
    "💘 Feb 14 is now scheduled with INSU 💘";
  dateMessage.style.display = "block";

  photo.style.display = "block";
  music.volume = 0.6;
  music.play();

  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "Neha 💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
