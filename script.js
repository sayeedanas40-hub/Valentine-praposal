let step = 0;
function nextStep() {
  const text = document.getElementById("text");
  const sub = document.getElementById("subtext");
  const btn = document.getElementById("nextBtn");
  const choice = document.getElementById("choice");

  if (step === 0) {
    text.innerHTML = "I like you 💖";
    sub.innerHTML = "More than you know...";
  } else if (step === 1) {
    text.innerHTML = "So...";
    sub.innerHTML = "Will you be my Valentine? 🌹";
    btn.style.display = "none";
    choice.classList.remove("hidden");
  }
  step++;
}

function moveNo() {
  const noBtn = document.querySelector(".no");
  const x = Math.random() * 150 - 75;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
