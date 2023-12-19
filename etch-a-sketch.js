const enterBtn = document.querySelector(".enter-button");
const resetBtn = document.querySelector(".reset-button");

function populateBoard(size) {
  //create a populate board function.
  let DivContainer = document.querySelector(".container");

  //resetting the state here.
  let squares = DivContainer.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  DivContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  DivContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let newSize = size * size;
  for (let i = 0; i < newSize; i++) {
    let square = document.createElement("div");
    square.style.background = "#FFFACD";

    square.addEventListener("mouseover", () => {
      square.style.background = "black";
    });

    square.className = "grid-square";
    DivContainer.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

enterBtn.addEventListener("click", () => {
  let size = parseInt(document.querySelector(".input-field").value, 10);

  if (size > 100 || size <= 0 || !Number.isInteger(size)) {
    alert("Invalid values, please choose a grid with a size 0 to 100");
  }
  populateBoard(size);
});

resetBtn.addEventListener("click", () => {
  populateBoard(16);
});
