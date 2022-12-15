"use strict";
const highscore = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guessBox = document.querySelector(".guess");
console.log(guessBox.value);

const checkBtn = document.querySelector(".check");
const randNumber = Math.trunc(Math.random() * 20) + 1;

let setScore = 20;

againBtn.addEventListener("click", function() {
  // game restart functionality
  setScore = 20;
  score.textContent = setScore;
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.style.backgroundColor = "#EEEEEE";
  message.textContent = "Start guessing...";
  guessBox.value = "";
  number.textContent = "?";
});

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
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.style.backgroundColor = "gold";
    number.textContent = randNumber;
    if (setScore > highscore.textContent) highscore.textContent = setScore;
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
