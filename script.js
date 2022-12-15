"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");

const checkBtn = document.querySelector(".check");
const randNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = randNumber;

checkBtn.addEventListener("click", function() {
  const guessValue = Number(document.querySelector(".guess").value);
  if (!guessValue) {
    return message.textContent = "❌ No number!";
  }
  if (guessValue === randNumber) {
    message.textContent = "You guessed right! 🎉🎉🎉";
  } else if (guessValue > randNumber) {
    message.textContent = "Your guess is too high!";
    score.textContent -= 1;
  } else if (guessValue < randNumber) {
    message.textContent = "Your guess is too low!";
    score.textContent -= 1;
  }
});
