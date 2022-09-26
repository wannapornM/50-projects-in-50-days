export default function threeDBackgroundBoxes() {
  const magixBoxes = document.querySelector(".magic-box-container");
  const magicBtn = document.querySelector(".magic-btn");

  magicBtn.addEventListener("click", () => {
    magixBoxes.classList.toggle("big");
  });

  function createMagicBox() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundPosition = `-${j * 100}px -${i * 100}px`;

        magixBoxes.appendChild(box);
      }
    }
  }

  createMagicBox();
}
