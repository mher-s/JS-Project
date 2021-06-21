intervalID = setInterval(function start() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const pauseBtn = document.querySelector(".buttons__pause");
  const continueBtn = document.querySelector(".buttons__continue");
  const stopBtn = document.querySelector(".buttons__stop");
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").textContent = day;
  document.getElementById("hour").textContent = hour;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").textContent = sec;
  if (distance < 0) {
    clearInterval();
    document.getElementById("day").textContent = "EXP";
    document.getElementById("hour").textContent = "EXP";
    document.getElementById("min").textContent = "EXP";
    document.getElementById("sec").textContent = "EXP";
  }
  pauseBtn.addEventListener("click", () => {
    continueBtn.classList.add("active");
    pauseBtn.classList.add("disable");
    clearInterval(intervalID);
    document.getElementById("day").textContent = day;
    document.getElementById("hour").textContent = hour;
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec;
  });
  continueBtn.addEventListener("click", () => {
    continueBtn.classList.remove("active");
    pauseBtn.classList.remove("disable");
    setInterval(() => {
      start();
    }, 1000);
  });
  stopBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    document.getElementById("day").textContent = day;
    document.getElementById("hour").textContent = hour;
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec;
  });
}, 1000);

const countDownDate = new Date("July 9, 2021 13:38:10").getTime();
