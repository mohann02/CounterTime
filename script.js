let counter = document.getElementById("counter");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let pause = null;

const startCounter = () => {
  let count = counter.innerText;
  if (count >= 1000) {
    clearInterval(pause);
    return;
  }
  count++, (counter.textContent = count.toString());
};

startBtn.addEventListener("click", function () {
  pause = setInterval(startCounter, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(pause);
});
resetBtn.addEventListener("click", function () {
  clearInterval(pause);
  counter.innerText = "0";
});
