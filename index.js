const button = document.querySelector("button");
const form = document.querySelector("form");

const addToList = (event) => {
  const input = document.querySelector("input").value;
  const section = document.querySelector("section");
  event.preventDefault();
  //let text = input.value;
  if (!input == "") {
    let paragraph = document.createElement("P");
    let spanCloseButton = document.createElement("SPAN");
    spanCloseButton.innerText = "X";
    paragraph.innerText = input;
    paragraph.appendChild(spanCloseButton);
    paragraph.style.backgroundColor = colorGen();
    section.appendChild(paragraph);

    input.value = "";
    spanCloseButton.addEventListener("click", (ev) => {
      let paragraphToBeRemoved = ev.target.parentElement;
      section.removeChild(paragraphToBeRemoved);
    });
  } else {
    document.querySelector("input").placeholder =
      "You need to add something here";
  }
};
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
document.querySelector("form").addEventListener("submit", addToList);
/* input.addEventListener("submit", function () {
    input.reset();
  }); */
