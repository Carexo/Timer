"use strict";

const form = document.querySelector("form");
const eventCounter = document.querySelector(".counter-container");

const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputHours = document.querySelector("#hours");

const countButton = document.querySelector("#submit");

function checkBetween(num, min, max) {
  return num >= min && num <= max;
}

function startTimer() {
  let timer;
  function tick() {
    const now = new Date();
    const differenceTime = (dateToCount - now) / 1000;
    const days = Math.trunc(differenceTime / (60 * 60 * 24));
    const hours = Math.trunc((differenceTime / (60 * 60)) % 24);
    const minutes = Math.trunc((differenceTime / 60) % 60);
    const seconds = Math.trunc(differenceTime % 60);
    appearEvenCounter(days, hours, minutes, seconds);

    if (Math.trunc(differenceTime) === 0) {
      clearInterval(timer);
      eventCounter.innerHTML = "";
      eventCounter.insertAdjacentHTML(
        "afterbegin",
        "<h2>The event has started</h2>"
      );
    }
  }

  const valueHours = Number(inputHours.value);
  const valueDay = Number(inputDay.value);
  const valueMonth = Number(inputMonth.value) - 1;
  const valueYear = Number(inputYear.value);

  const dateToCount = new Date(valueYear, valueMonth, valueDay, valueHours);

  //testing
  //   const dateToCount = new Date(2021, 2, 22, 18, 30, 30);

  if (
    valueHours &&
    valueDay &&
    valueMonth &&
    valueYear &&
    dateToCount - new Date() < 0
  ) {
    alert("Fill inputs with future date");
  } else if (
    checkBetween(valueHours, 0, 23) &&
    checkBetween(valueDay, 1, 31) &&
    checkBetween(valueMonth, 1, 12) &&
    valueYear
  ) {
    form.classList.add("hidden");
    eventCounter.classList.remove("hidden");
    tick();
    timer = setInterval(tick, 1000);
  } else {
    alert("Fill inputs correct");
  }
}

function appearEvenCounter(days, hours, minutes, seconds) {
  const addPading = (num) => String(num).padStart(2, "0");
  daysElement.textContent = addPading(days);
  hoursElement.textContent = addPading(hours);
  minutesElement.textContent = addPading(minutes);
  secondsElement.textContent = addPading(seconds);
}

const dateToCount = new Date(2021, 2, 0, 12);
console.log(dateToCount);
console.log(checkBetween(22, 1, 24) && checkBetween(21, 1, 24));
countButton.addEventListener("click", startTimer);
