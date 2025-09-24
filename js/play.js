const allHex = board.querySelectorAll(".hex");
let selectedToken = null;
let valide = []

function addTokenEventListeners(tokens) {
  tokens.forEach((token) => {
    token.addEventListener("click", () => {
      if (token.parentNode === hand) {
        if (selectedToken) {
          selectedToken.classList.remove("selectedToken");
        }

        if (selectedToken === token) {
          selectedToken = null;
        } else {
          token.classList.add("selectedToken");
          selectedToken = token;
        }
      } else {
       
        console.log(
          "Ce jeton n'est pas dans la main et ne peut pas être sélectionné."
        );
      }
    });
  });
}

function addHexEventListeners() {
  allHex.forEach((hex) => {
    hex.addEventListener("click", () => {
      if (selectedToken) {
        if (checkAvailable(hex, selectedToken)) {
          placeToken(selectedToken, hex);
        }
      } else {
        console.log("Sélectionne d'abord un jeton !");
      }
    });
  });
}

function placeToken(token, hex) {
  token.removeEventListener("click", token.clickCallback);
  token.classList.remove("selectedToken");
  hex.appendChild(token);
  selectedToken = null;
  if (hand.children.length === 0) {
    fillWheel();
    checkBoard();
    playerPickCard = true;
    console.log(playerPickCard)
    playerPick = true;
    piocheOne();
    checkConditionsScore();
    getPosition()
  }
}

function checkAvailable(hex, selectedToken) {
  let hexChildren = hex.querySelectorAll("div");
  if (hexChildren.length === 0) {
    console.log("ba y'a rien");
      if(selectedToken.classList.contains("yellowToken")){
        console.log("on fait un champ")
        valide.push("champ")
        hex.setAttribute("type", "champ")
        console.log(valide)
      } else if(selectedToken.classList.contains("blueToken")){
        console.log("on fait une riviere")
        valide.push("riviere")
        hex.setAttribute("type", "riviere")
        console.log(valide)
      } else if(selectedToken.classList.contains("greenToken")){
        console.log("on fait un buisson")
        valide.push("buisson")
        hex.setAttribute("type", "buisson")
        console.log(valide)
      }
    return true;
  }
  // --- Jeton gris ---
  if (selectedToken.classList.contains("greyToken")) {
    if (hexChildren.length >= 3) {
      console.log("L'empilage de jetons gris est limité à 3.");
      return false;
    } else if(hexChildren.length === 0) {
      console.log("Les jetons gris peuvent être posés sur un hexagone vide.");
      return true;
    }
    if (
      (hexChildren.length === 1 || hexChildren.length === 2) &&
      hexChildren[0].classList.contains("greyToken") ||
      hexChildren[1].classList.contains("greyToken")
    ) {
      console.log("Empilage de jetons gris autorisé.");
      return true;
    }
    if (
      hexChildren.length >= 1 &&
      !hexChildren[0].classList.contains("greyToken")
    ) {
      console.log(
        "L'empilage de jetons gris sur un jeton non gris n'est pas autorisé."
      );
      return false;
    }
  }
  // --- Jeton rouge ---
  if (selectedToken.classList.contains("redToken")) {
    if (hexChildren.length > 1) {
      console.log("On ne peut pas placer sur un jeton empilé.");
      return false;
    } else if (
      hexChildren.length === 1 &&
      (hexChildren[0].classList.contains("greyToken") ||
        hexChildren[0].classList.contains("redToken") ||
        hexChildren[0].classList.contains("brownToken"))
    ) {
      console.log("On fait une maison.");      
      valide.push("maison")
      hex.setAttribute("type", "maison")
      console.log(valide)
      return true;
    }
  }
  // --- Jeton Marron ---
  if (selectedToken.classList.contains("brownToken")) {
    if (
      hexChildren.length === 1 &&
      hexChildren[0].classList.contains("brownToken")
    ) {
      console.log("Arbre en cours de création.");
      return true;
    } else if (hexChildren.length >= 2) {
      console.log("On ne peut pas placer sur un arbre.");
      return false;
    }
  }
  // Jeton vert
  if (selectedToken.classList.contains("greenToken")) {
    if (
      hexChildren.length === 1 &&
      hexChildren[0].classList.contains("brownToken")
    ) {
      console.log("p'tit abre validé");
      valide.push("petitArbre")
      hex.setAttribute("type", "petitArbre")
      console.log(valide)
      return true;
    } else if (
      hexChildren.length === 2 &&
      hexChildren[1].classList.contains("brownToken")
    ) {
      console.log("grand abre validé");
      valide.push("grandArbre")
      hex.setAttribute("type", "grandArbre")
      console.log(valide)
      return true;
    } else {
      console.log("Placement d'un jeton vert non autorisé ici.");
      return false;
    }
  }
  //défaut
  console.log("Ce placement n'est pas autorisé.");
  return false;
}
// addTokenEventListeners(board.querySelectorAll(".token"));
addHexEventListeners();
