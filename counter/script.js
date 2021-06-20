const decrease = document.querySelector(".decrease__btn");
const increase = document.querySelector(".increase__btn");
const reset = document.querySelector(".reset__btn");
let countNum = document.querySelector(".count");

function checkNumber() {
  if (Number(countNum.textContent > 0)) {
    countNum.style.color = "green";
  } else if (Number(countNum.textContent < 0)) {
    countNum.style.color = "red";
  } else {
    countNum.style.color = "#fff";
  }
}

function rememberNum() {
  window.localStorage.setItem("Number", countNum.textContent);
}

increase.addEventListener("click", () => {
  let increaseNum = Number(countNum.textContent) + 1;
  countNum.textContent = increaseNum;
  checkNumber();
  rememberNum();
});
decrease.addEventListener("click", () => {
  let decreaseNum = Number(countNum.textContent) - 1;
  countNum.textContent = decreaseNum;
  checkNumber();
  rememberNum();
});

reset.addEventListener("click", () => {
  countNum.textContent = 0;
  checkNumber();
  rememberNum();
});

const getItem = window.localStorage.getItem('Number')
countNum.textContent = getItem
  checkNumber();
