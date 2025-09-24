const piocheDiv = document.getElementById("piocheDiv");
const handCard = document.getElementById("handCard");
let pioche = [];

async function fetchCards() {
  try {
    const response = await fetch("../assets/json/cards.json");
    const data = await response.json();
    if (data && Array.isArray(data.cards)) {
      pioche = data.cards;
      console.log("Cards loaded successfully:", pioche);
    }
  } catch (error) {
    console.error("Error loading cards:", error);
  }
}

function createPioche() {
  for (let i = 0; i < 5; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("cardDiv", "h-[18vh]", "w-[12%]");
    piocheDiv.appendChild(cardDiv);
  }
}

function getRandomCard() {
  const indexAleatoire = Math.floor(Math.random() * pioche.length);
  const carteRetiree = pioche.splice(indexAleatoire, 1);
  return carteRetiree[0];
}

function piocheCard() {
  if (pioche.length === 0) {
    console.error("La pioche est vide");
    return;
  }
  for (const child of piocheDiv.children) {
    const randomCard = getRandomCard();
    if (randomCard && randomCard.img) {
      const cardImg = document.createElement("img");
      cardImg.src = `../assets/img/cards/${randomCard.img}`;
      cardImg.alt = randomCard.name;
      cardImg.classList.add("h-[18vh]", "w-[75%]", "card");
      child.appendChild(cardImg);
      child.dataset.points = JSON.stringify(randomCard.points);

      child.addEventListener("click", () => {
        if (playerPickCard === false) {
          alert("non! Tu as déjà pioché ce tour!");
          console.log(playerPickCard);
          return;
        }
        const childImg = child.querySelector("img");
        console.log(childImg.src);
        newCard = document.createElement("div");
        newCard.classList.add("h-[18vh]", "card");
        newImg = document.createElement("img");
        newImg.classList.add("h-[18vh]", "card");
        newImg.src = childImg.src;
        newCard.appendChild(newImg);
        handCard.appendChild(newCard);
        newCard.dataset.points = child.dataset.points;

        addCube(newCard);

        child.remove(childImg);

        playerPickCard = false;
        console.log(playerPickCard);
      });
    } else {
      console.error("Pas trouvé");
    }
  }
}

function piocheOne() {
  if (piocheDiv.children.length <= 4) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("cardDiv", "h-[18vh]", "w-[10%]");
    piocheDiv.appendChild(cardDiv);
    let randomCard = getRandomCard();
    const cardImg = document.createElement("img");
    cardImg.src = `../assets/img/cards/${randomCard.name}.png`;
    cardImg.alt = randomCard.name;
    cardImg.classList.add("h-[18vh]", "w-[100%]", "card");
    cardDiv.appendChild(cardImg);
    cardDiv.dataset.points = JSON.stringify(randomCard.points);

    cardDiv.addEventListener("click", () => {
      if (playerPickCard === false) {
        alert("non! Tu as déjà pioché ce tour!");
        console.log(playerPickCard);
        return;
      }
      const cardImg = cardDiv.querySelector("img");
      newCard = document.createElement("div");
      newCard.classList.add("h-[18vh]", "card");
      newImg = document.createElement("img");
      newImg.classList.add("h-[18vh]", "w-[100%]", "card");
      newImg.src = cardImg.src;
      newCard.appendChild(newImg);
      handCard.appendChild(newCard);
      newCard.dataset.points = cardDiv.dataset.points;

      addCube(newCard);

      cardDiv.remove(cardImg);

      playerPickCard = false;
      console.log(playerPickCard);
    });
  } else {
    return;
  }
}

async function startGame() {
  await fetchCards();
  createPioche();
  piocheCard();
}
startGame();
