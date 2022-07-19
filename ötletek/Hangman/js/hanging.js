const hangmanDraw = document.querySelectorAll(".hangman-draw");
const hangmanArt = document.querySelector(".hangman-art");
const hangmanParticles = Array.from(hangmanDraw);

export const hangmanDrawingAnimation = function () {
  for (let i = 0; i < hangmanParticles.length; i++) {
    const element = hangmanParticles[i];
    setTimeout(function () {
      element.classList.remove("hidden");
    }, i * 1000);
  }
  setTimeout(function () {
    hangmanArt.classList.add("swing");
  }, 10000);
};
