function addCube(card) {
  const cubesContainer = document.createElement("div");
  cubesContainer.classList.add(
    "flex",
    "gap-1",
    "absolute",
    "top-1",
    "left-1"
  );
  let points = card.dataset.points;
  console.log(points);

  let pointsArray = JSON.parse(points);
  pointsArray.forEach((element) => {
    const newCube = document.createElement("div");
    newCube.classList.add("w-4", "h-4", "bg-orange-400");
    cubesContainer.appendChild(newCube);
  });
  card.appendChild(cubesContainer);
  card.style.position = "relative";
}
