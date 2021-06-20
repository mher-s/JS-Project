const hexIs = document.querySelector(".page__title");
const changeColorBtn = document.querySelector(".page__btn");
const body = document.querySelector("body");

function getRandomHex() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

changeColorBtn.addEventListener("click", () => {
  const backgroundColor = "#" + getRandomHex();
  hexIs.textContent = `BACKGROUND IS: ${backgroundColor}`;
  body.style.background = `${backgroundColor}`;
});
