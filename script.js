"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");

const checkBtn = document.querySelector(".check");
const randNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = randNumber;
let setScore = 20;


checkBtn.addEventListener("click", function() {
  const guessValue = Number(document.querySelector(".guess").value);

  if (!guessValue) {
    return message.textContent = "❌ No number!";
  }
  if (!setScore) {
    return message.textContent = "💥💥💥You've lost! Try again!";
  }

  if (guessValue === randNumber) {
    message.textContent = "You guessed right! 🎉🎉🎉";
    document.querySelector('body').style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.style.backgroundColor = "gold";
  } else if (guessValue > randNumber) {
    message.textContent = "Your guess is too high!";
    setScore--;
    score.textContent = setScore;
  } else if (guessValue < randNumber) {
    message.textContent = "Your guess is too low!";
    setScore--;
    score.textContent = setScore;
  }
});
