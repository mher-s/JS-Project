const button = document.querySelectorAll(".buttons__circle");
let enteredPasscode = "";

button.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.textContent === "Cancel") {
      enteredPasscode = "";
    } else if (elem.textContent === "X") {
      enteredPasscode.substring(0, enteredPasscode.length - 1);
    }
    enteredPasscode += elem.textContent;
  });
});

console.log(enteredPasscode);


function changeStyle() {
  const dots = document.querySelectorAll(".dot");
  let index = 0;
  button.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent === "Cancel") {
        dots.forEach((element) => {
          element.classList.remove("dot-active");
          index = 0;
        });
      } else if (element.textContent === "X") {
        index -= 1;
        dots[index].classList.remove("dot-active");
      } else {
        dots[index].classList.add("dot-active");
        index += 1;
      }
    });
  });
}

(function startPinApp() {
  changeStyle();
})();
