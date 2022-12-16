"use strict";
const highScore = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guessBox = document.querySelector(".guess");

const checkBtn = document.querySelector(".check");
function randNumber() {
  return Math.floor(Math.random() * 20) + 1;
};
const displayMsg = (msg) => {
  message.textContent = msg;
};

const secretNumber = randNumber();
let setScore = 20;
let setHighsScore = 0;

againBtn.addEventListener("click", function() {
  // game restart functionality
  randNumber();
  setScore = 20;
  score.textContent = setScore;
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.style.backgroundColor = "#EEEEEE";
  displayMsg("Start guessing...");
  guessBox.value = "";
  number.textContent = "?";
});

checkBtn.addEventListener("click", function() {
  const guessValue = Number(document.querySelector(".guess").value);

  if (guessValue <= 0) {
    return displayMsg("❌ Use numbers from 1 to 20!");
  }
  if (!setScore) {
    return displayMsg("💥💥💥You've lost! Try again!");
  }

  if (guessValue === secretNumber) {
    //winning logic
    displayMsg("🎉🎉🎉 You guessed right!");
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.style.backgroundColor = "gold";
    number.textContent = secretNumber;
    //high score logic
    if (setScore > setHighsScore) {
      setHighsScore = setScore;
      highScore.textContent = setHighsScore;
    }
  } else if (guessValue !== secretNumber) {
    // wrong guess logic
    displayMsg(guessValue > secretNumber ?
      "☝️Your guess is too high!" :
      "👇Your guess is too low!");
    setScore--;
    score.textContent = setScore;
  }
});
