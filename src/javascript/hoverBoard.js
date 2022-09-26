export default function hoverBoard() {
  const boxContainer = document.querySelector(".hover-box-container");
  const colors = ["#e74c3c", "#8344ad", "#3498db", "#e67e22", "#2ecc71"];
  const totalSquareBox = 300;

  function createSquareBox() {
    for (let i = 0; i < totalSquareBox; i++) {
      const square = document.createElement("div");
      square.classList.add("box");
      boxContainer.appendChild(square);

      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseout", () => removeColor(square));
    }
  }

  function setColor(square) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color;
    square.style.boxShadow = `${color} 0px 5px 15px 0px`;
  }

  function removeColor(square) {
    square.style.backgroundColor = "rgb(131, 124, 124)";
    square.style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px";
  }

  createSquareBox();
}
