"use strict";

const newGame = document.querySelector(".new-game");
const score = document.querySelector(".score");
const imgBox = document.querySelector(".img-box");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const newHighscore = document.querySelector(".new-highscore");
const flipsLeft = document.querySelector(".flips");
const body = document.querySelector("body");
// Select imgs
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const aa = document.querySelector(".aa");
const bb = document.querySelector(".bb");
const cc = document.querySelector(".cc");
const dd = document.querySelector(".dd");
const ee = document.querySelector(".ee");
const ff = document.querySelector(".ff");
const gg = document.querySelector(".gg");
const hh = document.querySelector(".hh");

function shuffleAvatars() {
  const wrapper = document.querySelector(".memory-grid");
  for (let i = wrapper.children.length; i >= 0; i--) {
    wrapper.appendChild(wrapper.children[(Math.random() * i) | 0]);
  }
}

// Make an array
const arrayImgs = [a, aa, b, bb, c, cc, d, dd, e, ee, f, ff, g, gg, h, hh];
let flips = 50;

shuffleAvatars(arrayImgs);

console.log(arrayImgs);
// AddEventListener function on array
arrayImgs.forEach(function (img) {
  img.addEventListener("click", function () {
    if (
      document.querySelectorAll(".flipped").length === 2 ||
      img.classList.contains("pair")
    ) {
      return;
    }
    img.classList.add("flipped");

    // Count flips
    flips = flips - 1;
    flipsLeft.textContent = flips;
    // Check if there are two flipped or not in the array
    if (document.querySelectorAll(".flipped").length === 2) {
      // CHeck pair
      if (
        (a.classList.contains("flipped") && aa.classList.contains("flipped")) ||
        (b.classList.contains("flipped") && bb.classList.contains("flipped")) ||
        (c.classList.contains("flipped") && cc.classList.contains("flipped")) ||
        (d.classList.contains("flipped") && dd.classList.contains("flipped")) ||
        (e.classList.contains("flipped") && ee.classList.contains("flipped")) ||
        (f.classList.contains("flipped") && ff.classList.contains("flipped")) ||
        (g.classList.contains("flipped") && gg.classList.contains("flipped")) ||
        (h.classList.contains("flipped") && hh.classList.contains("flipped"))
      ) {
        document.querySelectorAll(".flipped").forEach((img) => {
          img.classList.add("pair");
          img.classList.remove("flipped");
        });
      } else {
        setTimeout(
          () => arrayImgs.forEach((img) => img.classList.remove("flipped")),
          500
        );
      }
    }

    // Win the game
    if (document.querySelectorAll(".pair").length === 16) {
      win.classList.add("visible");
      console.log(flips);
      score.textContent < flips
        ? (score.textContent = flips) && newHighscore.classList.add("visible")
        : null;
    } // Lose the game if flips count 0
    else if (flips < 1) {
      lose.classList.add("visible");
    }
  });
});

// Reset everything except highscore
newGame.addEventListener("click", function () {
  arrayImgs.forEach((img) => img.classList.remove("flipped"));
  arrayImgs.forEach((img) => img.classList.remove("pair"));
  body.style.backgroundColor = "#d9dbd9";
  win.classList.remove("visible");
  lose.classList.remove("visible");
  newHighscore.classList.remove("visible");
  shuffleAvatars(arrayImgs);
  flipsLeft.textContent = flips = 50;
});
