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

  hint1.style.removeProperty('filter');
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
// window.onload = (e) => {gameTimer();};
let gameTime = document.getElementById('gameTime');
let time = 300;

displayTime(time);

function gameTimer(){
  let countdown = setInterval (()=>{
    time--;
    displayTime(time);
    if(time <= 0 || time < 1){
      gameTime.innerHTML = 'Game over';
      clearInterval(countdown);
    }
  } , 1000);
}

function displayTime(seconds){
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  gameTime.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`;
}
gameTimer();
// high score table.  See if user score is in top 10.  If yes, add to table

function highScore(){


}
