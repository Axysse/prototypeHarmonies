const wheel = document.getElementById("wheel");
const bag = document.getElementById("bag");
let inBag = document.getElementById("inBag");
let hand = document.getElementById("hand")

let allInBag = [];
let playerPick= true;
let playerPickCard = true;

function fillBag() {
  for (let i = 0; i <= 22; i++) {
    const newBlueToken = document.createElement("div");
    newBlueToken.setAttribute("blue", i);
    newBlueToken.id = "blue" + i;
    newBlueToken.classList.add("blueToken");
    allInBag.push(newBlueToken);
  }
  for (let i = 0; i <= 22; i++) {
    const newgreyToken = document.createElement("div");
    newgreyToken.setAttribute("grey", i);
    newgreyToken.id = "grey" + i;
    newgreyToken.classList.add("greyToken");
    allInBag.push(newgreyToken);
  }
  for (let i = 0; i <= 20; i++) {
    const newgbrownToken = document.createElement("div");
    newgbrownToken.setAttribute("brown", i);
    newgbrownToken.id = "brown" + i;
    newgbrownToken.classList.add("brownToken");
    allInBag.push(newgbrownToken);
  }
  for (let i = 0; i <= 18; i++) {
    const newgreenToken = document.createElement("div");
    newgreenToken.setAttribute("green", i);
    newgreenToken.id = "green" + i;
    newgreenToken.classList.add("greenToken");
    allInBag.push(newgreenToken);
  }
  for (let i = 0; i <= 18; i++) {
    const newyellowToken = document.createElement("div");
    newyellowToken.setAttribute("yellow", i);
    newyellowToken.id = "yellow" + i;
    newyellowToken.classList.add("yellowToken");
    allInBag.push(newyellowToken);
  }
  for (let i = 0; i <= 14; i++) {
    const newredToken = document.createElement("div");
    newredToken.setAttribute("red", i);
    newredToken.id = "red" + i;
    newredToken.classList.add("redToken");
    allInBag.push(newredToken);
  }
  console.log(allInBag);
}

function refreshBag() {
  let currentNbr = allInBag.length;
  inBag.innerHTML = currentNbr;
}

function createWheel() {
  for (let i = 0; i <= 2; i++) {
    const newCircle = document.createElement("div");
    newCircle.setAttribute("circle", i);
    newCircle.id = "circle" + i;
    newCircle.classList.add("circle");
    wheel.appendChild(newCircle);
  }
}

function fillWheel() {
  let circle0 = document.getElementById("circle0");
  let circle1 = document.getElementById("circle1");
  let circle2 = document.getElementById("circle2");

  if (!circle0.firstChild) {
    for (let i = 0; i <= 2; i++) {
      const indexAleatoire = Math.floor(Math.random() * allInBag.length);
      const chosenToken = allInBag[indexAleatoire];
      circle0.appendChild(chosenToken);
      allInBag.splice(indexAleatoire, 1);
    }
  }
  if (!circle1.firstChild) {
    for (let i = 0; i <= 2; i++) {
      const indexAleatoire = Math.floor(Math.random() * allInBag.length);
      const chosenToken = allInBag[indexAleatoire];
      circle1.appendChild(chosenToken);
      allInBag.splice(indexAleatoire, 1);
    }
  }
  if (!circle2.firstChild) {
    for (let i = 0; i <= 2; i++) {
      const indexAleatoire = Math.floor(Math.random() * allInBag.length);
      const chosenToken = allInBag[indexAleatoire];
      circle2.appendChild(chosenToken);
      allInBag.splice(indexAleatoire, 1);
    }
  }
  refreshBag();
  console.log(allInBag);
}

createWheel();
fillBag();
fillWheel();

let allWheels = document.getElementsByClassName("circle");
for (let i = 0; i < allWheels.length; i++) {
  allWheels[i].addEventListener("click", () => {
    if (playerPick === true) {
    let selectedTokens = allWheels[i].querySelectorAll("div");
    console.log(selectedTokens);
    selectedTokens.forEach(token=> {
      hand.appendChild(token)
    });
    addTokenEventListeners(selectedTokens);
    playerPick = false; 
  } else{
    console.log("non garçon.");
  }
  });
}

