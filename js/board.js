const board = document.getElementById("board");

function createHex(nbr, line) {
  const hexagons = [];
  for (let i = 0; i < nbr; i++) {
    const newHex = document.createElement("div");
    newHex.id = "hex" + i;
    newHex.classList.add("hex");
    newHex.setAttribute("x", i);
    newHex.setAttribute("y", line);
    hexagons.push(newHex);
  }
  return hexagons;
}

function createLine() {
  for (let i = 0; i <= 4; i++) {
    const newLine = document.createElement("div");
    newLine.setAttribute("line", i);
    newLine.classList.add("flex", "flex-col", "items-center", "gap-6");
    const hexagonsInLine = createHex(5, i);
    hexagonsInLine.forEach((hex) => {
      newLine.appendChild(hex);
    });
    if (
      newLine.getAttribute("line") == 1 ||
      newLine.getAttribute("line") == 3
    ) {
      newLine.classList.add("impair");
    }
    board.appendChild(newLine);
  }
}

function checkBoard() {
  let freeHex = null;
  allHex.forEach((hex) => {
    if (hex.children.length === 0) {
      freeHex++;
    }
  });
  console.log(freeHex);
  if (freeHex <= 2) {
    alert("partie fini!");
  }
}


createLine();
