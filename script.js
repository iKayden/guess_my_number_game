"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guessValue = document.querySelector(".guess").value;
const checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", function() {
  console.log(document.querySelector(".guess").value);
});
