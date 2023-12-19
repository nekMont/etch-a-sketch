//create a populate board function.
let DivContainer = document.querySelector(".container");

DivContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
DivContainer.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.style.background = "#FFFACD";
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

  /* 
on this anonymous function you were not adding the attributes to e
also this needs to be moved from line 17 to inside the loop.
at line 10
*/
  square.addEventListener("mouseover", () => {
    square.style.background = "black";
  });

  square.className = "grid-square";
  DivContainer.insertAdjacentElement("beforeend", square);
}
