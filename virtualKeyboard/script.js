const specialKeys = document.querySelectorAll(".special-key");
const area = document.querySelector("textarea");
const mainKeyboard = document.querySelector(".main-keyboard");
const altKeyboard = document.querySelector(".alt-keyboard");
const keys = document.querySelectorAll(".key");

specialKeys.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "Backspace") {
      area.textContent = area.textContent.slice(0, -1);
    } else if (element.textContent === "Space") {
      area.textContent += " ";
    } else if (element.textContent === "Tab") {
      area.textContent += "\t";
    } else if (element.textContent === "Enter") {
      area.textContent += "\n";
    } else {
      mainKeyboard.classList.toggle("active");
      altKeyboard.classList.toggle("active");
    }
  });
});

keys.forEach((element) => {
  element.addEventListener("click", () => {
    const keyValue = element.textContent;
    area.textContent += keyValue;
  });
});
