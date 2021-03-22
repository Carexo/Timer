"use strict";

const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputHours = document.querySelector("#hours");

const countButton = document.querySelector("#submit");

function startTimer(element) {
  element.preventDefault();
  function tick() {
    const now = new Date();
    const differenceTime = (DateToCount - now) / 1000;
    const days = Math.trunc(differenceTime / (60 * 60 * 24));
    const hours = Math.trunc((differenceTime / (60 * 60)) % 24);
    const minutes = Math.trunc((differenceTime / 60) % 60);
    const seconds = Math.trunc(differenceTime % 60);
    console.log(differenceTime, days, hours, minutes, seconds);

    if (Math.trunc(differenceTime) === 0) {
      clearInterval(timer);
    }
  }

  const valueDay = Number(inputDay.value);
  const valueMonth = Number(inputMonth.value) - 1;
  const valueYear = Number(inputYear.value);
  const valueHours = Number(inputHours.value);
  const DateToCount = new Date(valueYear, valueMonth, valueDay, valueHours);

  //testing
  //   const DateToCount = new Date(2021, 2, 22, 16, 32, 55);
  tick();
  const timer = setInterval(tick, 1000);
}

countButton.addEventListener("click", startTimer);
