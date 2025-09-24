function addCube(card) {
  const cubesContainer = document.createElement("div");
  cubesContainer.classList.add("flex", "gap-1", "absolute", "top-1", "left-1", "score");
  let points = card.dataset.points;
  console.log(points);

  let pointsArray = JSON.parse(points);
  pointsArray.forEach((element) => {
    const newCube = document.createElement("div");
    newCube.classList.add(
      "w-4",
      "h-4",
      "bg-orange-400",
      "border-2",
      "border-black"
    );
    cubesContainer.appendChild(newCube);
  });
  card.appendChild(cubesContainer);
  card.style.position = "relative";
}

function checkConditionsScore() {
  let handChildren = handCard.querySelectorAll("div .card");
  handChildren.forEach((element) => {
    getAdjacentCells(element)
    console.log(element);
  });
}

function getAdjacentCells(cell) {
  let allCells = board.querySelectorAll(".hex");
  let adjacentCells = [];
  let x = parseInt(cell.getAttribute("x"), 10);
  let y = parseInt(cell.getAttribute("y"), 10);

  // Définition des 6 voisins par leurs décalages (dx, dy)
  let neighbors = [
    { dx: 0, dy: -1 },  // Haut
    { dx: 0, dy: 1 },   // Bas
    { dx: -1, dy: 0 },  // Gauche
    { dx: 1, dy: 0 }    // Droite
  ];

 
if (x % 2 === 0) { // colonne paire
  neighbors.push({ dx: -1, dy: 1 }, { dx: 1, dy: 1 });
} else {
  neighbors.push({ dx: -1, dy: -1 }, { dx: 1, dy: -1 });
}

  neighbors.forEach(neighbor => {
    let newX = x + neighbor.dx;
    let newY = y + neighbor.dy;


    if (newX >= 0 && newX <= 4 && newY >= 0 && newY <= 4) {
      const adjacentCell = Array.from(allCells).find(c => {
        return parseInt(c.getAttribute("x"), 10) === newX && parseInt(c.getAttribute("y"), 10) === newY;
      });

      if (adjacentCell) {
          if(adjacentCell.getAttribute("type")){
            const type = adjacentCell.getAttribute("type")
            adjacentCells.push(adjacentCell.id + " " + type);
          }else{
            adjacentCells.push(adjacentCell.id);
          }
      }
    }
  });
  console.log(adjacentCells)
  return adjacentCells;
}