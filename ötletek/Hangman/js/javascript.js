"use strict";

import { hangmanDrawingAnimation } from "./hanging.js";

const newGame = document.querySelector(".new-game");
const mainPage = document.querySelector(".main-page");
const para = document.querySelector(".paralelogram");

hangmanDrawingAnimation();

newGame.addEventListener("click", function () {
  mainPage.classList.add("hidden");
  const paralelogram = document.createElement("div");
});
