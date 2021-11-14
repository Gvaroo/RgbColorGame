var startGame = document.querySelector("#startGame");
var playGame = document.querySelector("#playGame");
var rgbRender = document.querySelector("#rgbColor");
var easyMode = document.querySelector("#easyMode");
var hardMode = document.querySelector("#hardMode");
var gameBoxes = document.querySelectorAll(".box");
var hearts = document.querySelectorAll("#heart");
var counter = 2;
var winner = false;
var hardModeSelected = false;
var easyModeSelected = false;

function GenerateRandomRgbColor() {
  var Red = Math.floor(Math.random() * 256);
  var Green = Math.floor(Math.random() * 256);
  var Blue = Math.floor(Math.random() * 256);
  return `rgb(${Red},${Green},${Blue}`;
}

startGame.addEventListener("click", function () {
  resetHeart();
  playGame.textContent = "Play Game";
  gameBoxes.forEach(box => {
    box.style.background = GenerateRandomRgbColor();
    box.style.display = "block";
  })
  var randomBox = Math.floor(Math.random() * gameBoxes.length);
  rgbRender.textContent = gameBoxes[randomBox].style.background;
  counter = 2;
  winner = false;
})

hardMode.addEventListener("click", function () {
  resetHeart();
  gameBoxes.forEach(box => {
    box.style.background = GenerateRandomRgbColor();
    box.style.display = "block";
  })
  var randomBox = Math.floor(Math.random() * gameBoxes.length);
  rgbRender.textContent = gameBoxes[randomBox].style.background;
  counter = 2;
  winner = false;
})

easyMode.addEventListener("click", function () {
  resetHeart();
  for (var i = 0; i < 3; i++) {
    gameBoxes[i].style.display = "none";

  }

  gameBoxes.forEach(box => {
    box.style.background = GenerateRandomRgbColor();
  })
  var randomBox = Math.floor(Math.random() * gameBoxes.length);
  rgbRender.textContent = gameBoxes[randomBox].style.background;
  counter = 2;
  winner = false;
})

function resetHeart() {
  hearts.forEach(heart => {
    heart.style.display = "inline-block";
  })
}

function loseHeart() {
  hearts[1].style.display = "none";
  if (counter == 0) {
    hearts.forEach(heart => {
      heart.style.display = "none";
    })
  }
}

for (var i = 0; i < gameBoxes.length; i++) {
  gameBoxes[i].addEventListener("click", function () {
    if (counter == 0) {
      playGame.textContent = "u used all your attempts :("
      return;
    } else if (winner == true) {
      return;
    }
    if (this.style.background == rgbRender.textContent) {
      winner = true;
      playGame.textContent = "u win :)))"
    }
    else {
      this.style.display = "none";
      playGame.textContent = "try again :("
      counter--;
      loseHeart();
    }
  })

}

