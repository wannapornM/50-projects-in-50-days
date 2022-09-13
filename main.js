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

// double vertical slider
const sliderContainer = document.getElementById("double-vertical-slider");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const slideRightLength = rightSlide.querySelectorAll("div").length;
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
let activeSlideIndx = 0;

// Configure for slide from up to down
rightSlide.style.top = `-${(slideRightLength - 1) * 100}vh`;

upBtn.addEventListener("click", function () {
  slider("up");
});
downBtn.addEventListener("click", function () {
  slider("down");
});

function slider(direction) {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndx++;

    if (activeSlideIndx > slideRightLength - 1) {
      activeSlideIndx = 0;
    }
  } else if (direction === "down") {
    activeSlideIndx--;

    if (activeSlideIndx < 0) {
      activeSlideIndx = slideRightLength - 1;
    }
  }

  leftSlide.style.transform = `translateY(-${
    activeSlideIndx * sliderHeight
  }px)`;
  rightSlide.style.transform = `translateY(${
    activeSlideIndx * sliderHeight
  }px)`;
}
