let start = document.getElementById("start");
let store = document.getElementById("store");
let stop = document.getElementById("stop");
let clear = document.getElementById("clear");

let timerDisplay = document.getElementById("timerdisplay");
let listLap = document.getElementById("listlap");
let lapCount = document.getElementById("lap-count");

let array = [];
let second = 0;
let timer = null;

// Start Timer
start.addEventListener("click", function () {
  if (timer === null) {
    timer = setInterval(function () {
      updateTime();
    }, 1000);

    start.disabled = true;
  }
});

// Stop Timer
stop.addEventListener("click", function () {
  clearInterval(timer);

  timer = null;

  start.disabled = false;
});

// Save Time
store.addEventListener("click", function () {
  if (array.length < 5) {
    array.push(timerDisplay.innerText);

    listLap.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
      listLap.innerHTML += `
                <li>
                    ${array[i]}
                </li>
            `;
    }

    lapCount.innerText = array.length + "/5";
  } else {
    alert("Maximum limit of storing time is 5.");
  }
});

// Reset Timer
clear.addEventListener("click", function () {
  second = 0;

  clearInterval(timer);

  timer = null;

  start.disabled = false;

  timerDisplay.innerText = "00:00:00";

  array = [];

  listLap.innerHTML = "";

  lapCount.innerText = "0/5";
});

// Update Timer
function updateTime() {
  second = second + 1;

  let hrs = Math.floor(second / 3600);

  let mins = Math.floor((second % 3600) / 60);

  let sec = second % 60;

  timerDisplay.innerText =
    hrs.toString().padStart(2, "0") +
    ":" +
    mins.toString().padStart(2, "0") +
    ":" +
    sec.toString().padStart(2, "0");
}
