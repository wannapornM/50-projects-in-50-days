import "./index.css";

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
const progressLine = document.getElementsByClassName("progress-line");
const circles = document.querySelectorAll("circle");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentProgressStep = 1;

nextBtn.addEventListener("click", () => {
  currentProgressStep++;
  console.log(currentProgressStep);
});

prevBtn.addEventListener("click", () => {
  currentProgressStep--;
  console.log(currentProgressStep);
});
