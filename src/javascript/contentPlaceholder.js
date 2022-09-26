export default function contentPlaceholder() {
  const cardImg = document.querySelector(".content-card-img");
  const cardInfo = document.querySelector(".content-card-info");
  const title = cardInfo.querySelector(".title");
  const description = cardInfo.querySelector(".description");
  const profileImg = cardInfo.querySelector(".about-img");
  const nameAuth = cardInfo.querySelector(".name");
  const date = cardInfo.querySelector(".date");
  const animatedBg = document.querySelectorAll(".animated-bg");
  const animatedBgText = document.querySelectorAll(".animated-bg-text");

  function getData() {
    cardImg.innerHTML = `<img src="./src/assets/girl2.jpeg" alt="Content placeholder" />`;
    title.innerHTML = `Lorem ipsum dolor sit.`;
    description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio omnis voluptatem nostrum earum quas.`;
    profileImg.innerHTML = `<img src="./src/assets/girl2.jpeg" alt="Content placeholder" />`;
    nameAuth.innerHTML = `Lorem, ipsum.`;
    date.innerHTML = `Sep 26, 2022`;

    animatedBg.forEach((bg) => bg.classList.remove("animated-bg"));
    animatedBgText.forEach((bgText) =>
      bgText.classList.remove("animated-bg-text")
    );
  }

  // setTimeout(getData, 2000);
}
