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

// --- Github profile ---
const main = document.getElementById("github-profile-container");
const form = document.getElementById("github-search-box");
const nameInput = document.getElementById("github-search");
const URL = "https://api.github.com/users/";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = nameInput.value;

  if (userName) {
    getUserInfo(userName);
    nameInput.value = "";
  }
});

async function getUserInfo(userName) {
  try {
    const resp = await axios(URL + userName);
    const data = await resp.data;

    createUserProfileCard(data);
    getUserRepos(userName);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No user profile with this username");
    }
    console.error(err);
  }
}

async function getUserRepos(userName) {
  try {
    const { data } = await axios(URL + userName + "/repos");
  } catch (err) {
    createErrorCard("Problem with fetching user repositories");
  }
}

function createUserProfileCard(userInfo) {
  const userProfileCard = `
    <div class="user-profile">
      <img
        src="${userInfo.avatar_url}"
        alt="User image"
      />
      <div class="user-info">
        <div class="user-info-name">${userInfo.name}</div>
        <p class="user-info-bio">${
          userInfo.bio === null ? "-" : userInfo.bio
        }</p>

        <ul>
          <li><span>${userInfo.followers}</span> followers</li>
          <li><span>${userInfo.following}</span> following</li>
          <li><span>${userInfo.public_repos}</span> repos</li>
        </ul>

        <div class="user-info-repos">
          <a href="#">repo1</a>
          <a href="#">repo2</a>
          <a href="#">repo3</a>
        </div>
      </div>
    </div>
  `;

  main.innerHTML = userProfileCard;
}

function createErrorCard(msg) {
  const errorCard = `
    <div class="user-profile">
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = errorCard;
}
