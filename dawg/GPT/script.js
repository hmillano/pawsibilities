const container = document.querySelector(".container");
const nameElement = document.querySelector(".name");
const imgElement = document.querySelector(".dog-img");
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");

async function getRandomDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const nameResponse = await fetch("https://randomuser.me/api/");
    const nameData = await nameResponse.json();
    const name = nameData.results[0].name.first;
    return { name, image: data.message };
  } catch (error) {
    console.log(error);
  }
}

async function displayDog() {
  const dog = await getRandomDog();
  nameElement.textContent = dog.name;
  imgElement.setAttribute("src", dog.image);
}

playBtn.addEventListener("click", () => {
  container.classList.add("play");
  displayDog();
});

nextBtn.addEventListener("click", () => {
  displayDog();
});

displayDog();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorStars(adjectiveId) {
  const numOfStars = getRandomInt(1, 5);
  let stars = document.querySelectorAll(`#${adjectiveId} .star`);

  for (let i = 0; i < stars.length; i++) {
    if (i < numOfStars) {
      stars[i].style.color = "#fdd835";
    } else {
      stars[i].style.color = "#ccc";
    }
  }
}

function colorAllStars() {
  const adjectives = ["playfulness", "likes-people", "energy", "barking"];
  adjectives.forEach((adjectiveId) => {
    colorStars(adjectiveId);
  });
}
