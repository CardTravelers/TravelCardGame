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
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');


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


// Randomly shuffle all locations
// Return array of index numbers
function randomCard() {
  for (let i = 0; i < numLocations; i++) {

    let tempNum = Math.floor(Math.random() * (numLocations));
    while (randomLocations.includes(tempNum)) {
      tempNum = Math.floor(Math.random() * (numLocations));
    }
    randomLocations[i] = tempNum;
  }
}

function randomAnswer() {
  for (let i = 0; i < 4; i++) {

    let tempNum = Math.floor(Math.random() * (4));
    while (randomAnswers.includes(tempNum)) {
      tempNum = Math.floor(Math.random() * (4));
    }
    randomAnswers[i] = tempNum;
  }
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
  let answerArray = [answer1, answer2, answer3, answer4];
  for (let i = 0; i < 4; i++) {
    if (randomAnswers[i] === 0) {
      answerArray[i].value = '\"' + locationList[cardIndex].name + '\"';
    } else if (randomAnswers[i] === 1) {
      answerArray[i].value = '\"' + locationList[cardIndex].option2 + '\"';
    } else if (randomAnswers[i] === 2) {
      answerArray[i].value = '\"' + locationList[cardIndex].option3 + '\"';
    } else if (randomAnswers[i] === 3) {
      answerArray[i].value = '\"' + locationList[cardIndex].option4 + '\"';
    }
    console.log(answerArray[i].value);
  }
}


// **********EVENT LISTENERS***************
// // event listener for card
// function handleClick(event) {
//   // if click on hint 1, run another function
//   hintOneClick();

//   // if click on hint 2, run this function
//   hintTwoClick();

//   // if click on submit button, run this function
//   scoreAnswer();

// }


// // on click, unblur hint 1
// // decrement total possible score
// function hintOneClick() {

// }


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
// function gameTimer() {



// }

// // high score table.  See if user score is in top 10.  If yes, add to table

// function highScore() {


// }
// *********** EXECUTABLE CODE**********
randomCard();
renderCard(0);
randomAnswer();