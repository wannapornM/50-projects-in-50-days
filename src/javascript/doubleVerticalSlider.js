export default function doubleVerticalSlider() {
  const sliderHeight = document.getElementById(
    "double-vertical-slider"
  ).clientHeight;
  const leftSlide = document.querySelector(".left-slide");
  const rightSlide = document.querySelector(".right-slide");
  const slideRightLength = rightSlide.querySelectorAll("div").length;
  const upBtn = document.querySelector(".up-btn");
  const downBtn = document.querySelector(".down-btn");
  let activeSlideIndx = 0;

  // Configure for slide from up to down
  rightSlide.style.top = `-${(slideRightLength - 1) * sliderHeight}px`;

  upBtn.addEventListener("click", function () {
    slider("up");
  });

  downBtn.addEventListener("click", function () {
    slider("down");
  });

  function slider(direction) {
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
}
