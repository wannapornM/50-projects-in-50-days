export default function githubProfile() {
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

      addReposToCard(data);
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

        <div class="user-info-repos"></div>
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

  function addReposToCard(repos) {
    const reposElement = document.querySelector(".user-info-repos");

    repos.forEach((repo) => {
      const repoElement = document.createElement("a");
      repoElement.href = repo.html_url;
      repoElement.innerText = repo.name;

      reposElement.appendChild(repoElement);
    });
  }
}
