'use strict';
// ********* GLOBALS**********
let randomLocations = [];
let numLocations = 50;  // change to location list.length
let randomAnswers = [];


// **********DOM WINDOWS***********

let cardImage = document.getElementById('cardImage');// IMG element
let cardHint1 = document.getElementById('cardHint1');// P element
let cardHint2 = document.getElementById('cardHint2');// P element
let cardAnswer = document.getElementById('cardAnswer');// form with list of 4 options to include a submit button
let answer1 = document.getElementById('answer1Label');
let answer2 = document.getElementById('answer2Label');
let answer3 = document.getElementById('answer3Label');
let answer4 = document.getElementById('answer4Label');
const card = document.querySelector('.card__inner');
let timer = document.getElementById('timer');

let answerArray = [];

let matterhorn = new Locations(
  'matterhorn', 'It is the tenth highest mountain in Switzerland, and one of 48 Swiss peaks above 4000 m in height.', 'This location first appeared on Toblerone chocolate bars in 1960.', 'Nagano, Japan', 'Interlaken, Switzerland', 'Vail, CO', 'img/matterhorn.jpg');
let locationList = [matterhorn];
console.log(locationList);
// **********CONSTRUCTOR FUNCTION***************
// constructor to create location object
// Array will have: name, hint1, hint2, option2, option3, option4, image reference
function Locations(name, hint1, hint2, option2, option3, option4, imgPath) {
  this.name = name;
  this.hint1 = hint1;
  this.hint2 = hint2;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.imgPath = imgPath;
  this.score = 0;
}


// **********HELPER FUNCTION/UTILITIES**********
// // Show main image
// // Show 2 hints, blurred
// // Show 4 options with submit button
// // stretch goal: add audio
function renderCard(cardIndex) {
  cardImage.src = locationList[cardIndex].imgPath;
  cardHint1.textContent = locationList[cardIndex].hint1;
  cardHint2.textContent = locationList[cardIndex].hint2;

  answerArray[0] = locationList[cardIndex].name;
  answerArray[1] = locationList[cardIndex].option2;
  answerArray[2] = locationList[cardIndex].option3;
  answerArray[3] = locationList[cardIndex].option4;
  answerArray = shuffleArray(answerArray);

  answer1.textContent = answerArray[0];
  answer2.textContent = answerArray[1];
  answer3.textContent = answerArray[2];
  answer4.textContent = answerArray[3];
}


// **********EVENT LISTENERS***************
// // event listener for card
function handleClick(event) {
  //   // if click on hint 1, run another function
  //   hintOneClick();

  //   // if click on hint 2, run this function
  //   hintTwoClick();

  //   // if click on submit button, run this function
  //   scoreAnswer();

}


card.addEventListener('click', handleClick);

// on click, unblur hint 1
// decrement total possible score
function hintOneClick() {

  hint1.style.removeProperty('filter');
}



// // on click, unblur hint 2
// // decrement total possible score
// function hintTwoClick() {

// }


// // calculate score for this card
// // save to totalscore
// // animation for correct / incorrect answers
// function scoreAnswer() {


// }


// // timer function.  Count down from 5 minutes (variable) until game end
// // When timer ends, end game, tally score
// window.onload = (e) => {gameTimer();};

let time = 300;

displayTime(time);

function gameTimer() {
  let countdown = setInterval(() => {
    time--;
    displayTime(time);
    if (time <= 0 || time < 1) {
      timer.innerHTML = 'Game over';
      clearInterval(countdown);
    }

  }, 1000);
}

// card.addEventListener("click", function (e) {
//   card.classList.toggle('is-flipped');
// });

// // timer //
// let startingMinutes = 5;
// let start = startingMinutes * 60;

// //get dom//
// 

// setInterval(updateCountdown, 1000);

// //function//
// function updateCountdown() {
//   let minutes = Math.floor(start / 60);
//   let seconds = start % 60;

//   seconds = seconds< 5 ? '0' + seconds : seconds;
// //enter back in dom//
//   timer.innerHTML = `${minutes}:${seconds}`;
//   start--;
// }


function shuffleArray(array) {
  let tempNum;
  let tempArray = [];

  for (let i = 0; i < array.length; i++) {
    console.log('start of loop ' + i);
    tempNum = Math.floor(Math.random() * (array.length));
    while (tempArray.includes(array[tempNum])) {
      tempNum = Math.floor(Math.random() * (array.length));
    }
    tempArray[i] = array[tempNum];
    console.log(tempArray);
  }
  return tempArray;
}


function displayTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}
gameTimer();
// // high score table.  See if user score is in top 10.  If yes, add to table

// function highScore() {


// }
// *********** EXECUTABLE CODE**********
locationList = shuffleArray(locationList);
renderCard(0);
