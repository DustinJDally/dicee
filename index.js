// Create random number generator BOTH
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Course Solution Random Number:
// SAME

const dice1 = document.querySelector(".img1");


// COURSE SOLUTION IMAGE OF DICE 1:
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;
// var image1 = document.querySelectorAll("img")[0];

// COURSE SOLUTION FOR PLAYER 1:
// image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
const dice2 = document.querySelector(".img2");

// COURSE SOLUTION IMAGE OF DICE 2:
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll[1].setAttribute("src", randomImageSource2);

// Determine Dice 1
if (randomNumber1 === 1) {
  dice1.setAttribute("src","images/dice1.png");
} else if (randomNumber1 === 2) {
  dice1.setAttribute("src","images/dice2.png");
} else if (randomNumber1 === 3) {
  dice1.setAttribute("src","images/dice3.png");
} else if (randomNumber1 === 4) {
  dice1.setAttribute("src","images/dice4.png");
} else if (randomNumber1 === 5) {
  dice1.setAttribute("src","images/dice5.png");
} else {
  dice1.setAttribute("src","images/dice6.png");
}

// Determine Dice 2
if (randomNumber2 === 1) {
  dice2.setAttribute("src","images/dice1.png");
} else if (randomNumber2 === 2) {
  dice2.setAttribute("src","images/dice2.png");
} else if (randomNumber2 === 3) {
  dice2.setAttribute("src","images/dice3.png");
} else if (randomNumber2 === 4) {
  dice2.setAttribute("src","images/dice4.png");
} else if (randomNumber2 === 5) {
  dice2.setAttribute("src","images/dice5.png");
} else {
  dice2.setAttribute("src","images/dice6.png");
}

// Show the winner
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = String.fromCodePoint(0x1F6A9) + "Draw!" + String.fromCodePoint(0x1F6A9);
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = String.fromCodePoint(0x1F6A9) + "Player 1 wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins!" + String.fromCodePoint(0x1F6A9);
}
