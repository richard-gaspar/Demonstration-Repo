"use strict";
const firstBox = document.querySelector(".first");
const secondBox = document.querySelector(".second");
const thirdBox = document.querySelector(".third");

const square = document.querySelector(".square");

const body = document.querySelector("body");

const array = document.querySelectorAll(".box");
let index = 0;

function shuffleAvatars() {
  const wrapper = document.querySelector(".column-box");
  for (let i = wrapper.children.length; i >= 0; i--) {
    wrapper.appendChild(wrapper.children[(Math.random() * i) | 0]);
  }
}

document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", (remove) => {
    if (index >= 3) {
      return;
    }

    if (square.classList.contains("bitcoin")) {
      array[index].classList.add("bitcoin");
    } else if (square.classList.contains("ravencoin")) {
      array[index].classList.add("ravencoin");
    } else if (square.classList.contains("ethereum")) {
      array[index].classList.add("ethereum");
    } else if (square.classList.contains("dogecoin")) {
      array[index].classList.add("dogecoin");
    }
    index++;
    square.remove();
  });
});

// function function1() {
//   alert("Function 1");
//   count++;
// }

// function function2() {
//   alert("Function 2");
//   count = 0;
// }

// function onClickEvent() {
//   if (count == 0) {
//     function1();
//   } else {
//     function2();
//   }
// }
