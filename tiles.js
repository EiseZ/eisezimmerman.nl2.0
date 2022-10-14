let columns = Math.floor(document.body.clientWidth / 50);
let rows = Math.floor(document.body.clientHeight / 50);

const tiles = document.getElementById("background-tiles");

let toggled = false;

const handleOnClick = index => {
  toggled = !toggled;
  
  anime({
    targets: ".background-tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  });
}

const createTile = index => {
  const tile = document.createElement("div");
  tile.classList.add("background-tile");
  
  tile.onclick = e => handleOnClick(index);
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    tiles.appendChild(createTile(index));
  });
}

const generateGrid = () => {
  tiles.innerHTML = "";
  
  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);
  
  tiles.style.setProperty("--columns", columns);
  tiles.style.setProperty("--rows", rows);

  createTiles(columns * rows);
}

generateGrid();

window.onresize = () => generateGrid();