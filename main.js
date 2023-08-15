"use script";

const resetTimerBtn = document.querySelector(".reset-timer-btn");
const startTimerBtn = document.querySelector(".start-timer-btn");
const timerText = document.querySelector(".timer");

let workStartMin = 0;
let workStartSec = 0;
let endMin = 25; // default time

// variable to store our interval
let interval;

startTimerBtn.addEventListener("click", startTimer);
resetTimerBtn.addEventListener("click", resetTimer);

function startTimer() {
  // check if an interval has already been set up
  if (!interval) {
    interval = setInterval(timer, 1000);
  }

  endMin = Number($("#set-minutes").val());
  workStartMin = 0;
  workStartSec = 0;
}

function timer() {
  if (workStartMin === endMin) {
    endTimer();
    return;
  }

  if (workStartSec === 60) {
    workStartMin++;
    workStartSec = 0;
  }

  timerText.innerHTML = `${
    workStartMin < 10 ? "0" + workStartMin : workStartMin
  }:${workStartSec < 10 ? "0" + workStartSec : workStartSec}`;

  workStartSec++;
}

function endTimer() {
  clearInterval(interval);
  // release our intervalID from the variable
  interval = null;
  playSound();
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  timerText.innerHTML = "00:00";
}

function playSound() {
  const audio = new Audio("./alarm.wav");
  audio.play();
}
