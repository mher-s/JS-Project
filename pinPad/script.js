const button = document.querySelectorAll(".buttons__circle");
let hiddenDisplay = document.querySelector(".hidden-display");

function getPass() {
  button.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (elem.textContent === "Cancel") {
        hiddenDisplay.textContent = "";
      } else if (elem.textContent === "X") {
        hiddenDisplay.textContent = hiddenDisplay.textContent.slice(0, -1);
      } else if (hiddenDisplay.textContent.length > 3) {
        throw new Error("Entered Passcode more then 4");
      } else {
        hiddenDisplay.textContent += elem.textContent;
      }
    });
  });
}

function checkPass() {
  let intervalId = setInterval(() => {
    const userPass = "1234";
    if (hiddenDisplay.textContent.length === 4) {
      if (userPass === hiddenDisplay.textContent) {
        showModalTruePass();
        clearInterval(intervalId);
      } else {
        showModalFalsePass();
        clearInterval(intervalId);
      }
    }
  }, 1000);
}

function showModalTruePass() {
  const modal = document.querySelector(".modal-passcode-true");
  modal.classList.add("show-modal");
  setInterval(() => {
    modal.classList.remove("show-modal");
  }, 2000);
}

function showModalFalsePass() {
  const modal = document.querySelector(".modal-passcode-false");
  modal.classList.add("show-modal");
  setInterval(() => {
    modal.classList.remove("show-modal");
    setTimeout(() => {
      document.location.reload(true)
    }, 1000);
  }, 2000);
}

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
  getPass();
  checkPass();
  changeStyle();
})();
