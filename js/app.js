'use strict';

// constructor to create location object
// Array will have: name, hint1, hint2, option2, option3, option4, image reference
function Locations (name, hint1, hint2, option2, option3, option4, imgPath) {



}


// Pick 10 random locations to display
// Given list of location objects, pick 10 randomly
// Return array with 10 locations
function randomCard(numCards) {



}


// Show main image
// Show 2 hints, blurred
// Show 4 options with submit button
// stretch goal: add audio
function renderCard (){



}



// event listener for card
function handleClick (event) {
  // if click on hint 1, run another function
  hintOneClick();

  // if click on hint 2, run this function
  hintTwoClick();

  // if click on submit button, run this function
  scoreAnswer();

}

let gameCard = document.getElementById('gameCard');
gameCard.addEventListener('click', handleClick);

// on click, unblur hint 1
// decrement total possible score


function hintOneClick(){
  element = document.styleSheets[0].cssRules[0].style;
  element.removeProperty('filter');
}


// on click, unblur hint 2
// decrement total possible score
function hintTwoClick(){

}


// calculate score for this card
// save to totalscore
// animation for correct / incorrect answers
function scoreAnswer(){


}


// timer function.  Count down from 5 minutes (variable) until game end
// When timer ends, end game, tally score
function gameTimer(){


}

// high score table.  See if user score is in top 10.  If yes, add to table

function highScore(){


}
