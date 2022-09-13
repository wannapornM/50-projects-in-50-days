import "./index.scss";

// expanding-cards
const cards = document.querySelectorAll(".card");

function removeActiveCard() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveCard();
    card.classList.add("active");
  });
});

// progress steps
const progressLine = document.querySelector(".progress-line");
const circles = document.querySelectorAll(".circle");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentProgressStep = 0;

nextBtn.addEventListener("click", () => {
  currentProgressStep++;

  if (currentProgressStep < circles.length) {
    updateProgressStyle();
  } else {
    currentProgressStep = circles.length - 1;
  }
});

prevBtn.addEventListener("click", () => {
  currentProgressStep--;

  if (currentProgressStep >= 0) {
    updateProgressStyle();
  } else {
    currentProgressStep = 0;
  }
});

function updateProgressStyle() {
  circles.forEach((circle, indx) => {
    if (indx <= currentProgressStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (currentProgressStep === circles.length - 1) {
    nextBtn.disabled = true;
  } else if (currentProgressStep === 0) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }

  const activeCircles = document.querySelectorAll(".circle.active");
  progressLine.style.width = `${
    ((activeCircles.length - 1) / (circles.length - 1)) * 100
  }%`;
}
