function addCube(card) {
  const cubesContainer = document.createElement("div");
  cubesContainer.classList.add(
    "flex",
    "gap-1",
    "absolute",
    "bottom-1",
    "left-1"
  );
  let points = card.dataset.points;
  console.log(points);

  let pointsArray = JSON.parse(points);
  pointsArray.forEach((element) => {
    const newCube = document.createElement("div");
    newCube.classList.add("w-8", "h-8", "bg-orange-400");
    cubesContainer.appendChild(newCube);
  });
  card.appendChild(cubesContainer);
  card.style.position = "relative";
}
