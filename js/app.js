'use strict';
// ********* GLOBALS**********
let randomLocations = [];
let numLocations = 50;  // change to location list.length
let randomAnswers = [];
let totalScore = 0;
let cardScore = 100;

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
let nextCard = document.getElementById('nextCard');
let correctAnswer = document.getElementById('correctAnswer');
let currentCard = 0;

let answerArray = [];


let matterhorn = new Locations(
  'matterhorn', 'It is the tenth highest mountain in Switzerland, and one of 48 Swiss peaks above 4000 m in height.', 'This location first appeared on Toblerone chocolate bars in 1960.', 'Nagano, Japan', 'Interlaken, Switzerland', 'Vail, CO', 'img/matterhorn.jpg');
let lasVegas = new Locations(
  'lasVegas', 'Over 22,000 concentions are held every year here.', 'This location is home to more than half of the 10 largest hotels in the world.', 'Reno, Navada', 'Atlantic City, New Jersey', 'Macau, China', 'img/lasVegas.jpg');
let buenosAires = new Locations(
  'buenosAries', 'This location has the largest port in it/s entire continent', 'This location was first founded by a expedition led by the Spainard Pedro de Mendoza', 'Sao Paulo, Brazil', 'Bogata, Columbia', 'Caracas, Venezuela', 'img/buenosAires.jpg');
let cinqueTerre = new Locations(
  'cinqueterre', 'This location does not allow cars.', 'This location is a group of villages.,', 'Nice, France', 'Lisbon, Portugal', 'Barcelona, Spain', 'img/cinqueTerre.jpg');
let budapest = new Locations(
  'budapest', 'This location is home to the largest castle in the world.', 'Locals consume the most beer per capita in the world.', 'Prague, Czech Republic', 'Berlin, Germany', 'Vienna, Austria', 'img/budapest.jpg');
let beijing = new Locations(
  'beijing', 'This location is home to seven UNESCO World Heritage Sites.', 'This location is home to the largest palace in the world.', 'Tokyo, Japan', 'Seoul, South Korea', 'Manila, Philippines', 'img/beijing.jpg');
let ibiza = new Locations(
  'ibizia', 'This location has 57 different beaches', 'The ground is orange due to pine trees that grow across the island', 'Mykonos, Greece', 'Patong, Thailand', 'Cancun, Mexico', 'img/ibiza.jpg');
let hawaii = new Locations(
  'hawaii', 'This location has the world/s most active volcano.', 'This location has the world/s tallest mountain, as measured from its base at the ocean floor.', 'Fiji', 'Tonga', 'New Zealand', 'img/hawaii.jpg');
let hanoi = new Locations(
  'hanoi', 'This location/s name means City of Lakes.', 'This location has the world/s largest cave.', 'Shanghai, China', 'Taipei, Taiwan', 'Pyongyang, North Korea', 'img/hanoi.jpg');
let lisbon = new Locations(
  'Lisbon, Portugal', 'This location is the birthplace of the music genre fado', 'It is the oldest city in Western Europe', 'Amsterdam, Netherlands', 'Zurich, Switzerland', 'London, UK', 'img/lisbon.jpg');
let virunga = new Locations(
  'Virunga National Park, Democratic Republic of Congo', 'This park has the highest deaths of rangers as they are often killed by poachers', 'This location is home to 218 mammal species, 706 bird species, 109 reptile species, 78 amphibian species, and 22 primate species', 'Yellowstone, WY', 'Banff National Park, Alberta', 'Serengeti National Park, East Africa', 'img/virunga.jpg');
let machuPicchu = new Locations(
  'Machu Picchu', 'The name means "Old Peak" or "Old Mountain"', 'This location is made up of 150 buildings ranging from baths and houses to temples and sancutaries', 'Chichen Itza, Mexico', 'Isla del Sol, Bolivia', 'Tikal, Guatemala', 'img/eli.jpeg');
let providencia = new Locations(
  'Providencia, Columbia', 'Island that is part of a country Columbia, but geographic nearer to Nicaragua', 'It takes 30-40 minutes to drive in a loop around the island in a golf buggy', 'Cayo Acuario, Columbia', 'Johnny Cay, Columbia', 'Isle Grande, Columbia', 'img/providencia.jpg');
let locationList = [matterhorn, lasVegas, buenosAires];
// let locationList = [matterhorn, lasVegas, buenosAires, cinqueTerre, budapest, beijing, ibiza, hawaii, hanoi, lisbon, virunga, machuPicchu, providencia];
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
  cardScore = 100;
  cardImage.src = locationList[cardIndex].imgPath;
  cardHint1.textContent = 'Hint 1';
  cardHint2.textContent = 'Hint 2';
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
  if (event.target.id === 'cardHint1') {
    hintOneClick();
  }
  //   // if click on hint 2, run this function
  if (event.target.id === 'cardHint2') {
    hintTwoClick();
  }
  //   // if click on submit button, run this function
  //   scoreAnswer();

}

function handleNextCard(event) {

  if (currentCard < locationList.length - 1) {
    currentCard++;
    renderCard(currentCard);
    card.classList.toggle('is-flipped');
  } else {

    endGame();
  }

}

function handleSubmit(event) {
  event.preventDefault();
  let temp = Number(event.target.elements.cardOptions.value);
  let guess = answerArray[temp];
  if (guess === locationList[currentCard].name) {
    totalScore += cardScore;
    correctAnswer.innerHTML = `Good Job! The correct answer is ${locationList[currentCard].name}. You earned ${cardScore} points.`;
  } else {
    cardScore = 0;
    correctAnswer.innerHTML = `Too bad So sad, The correct answer is ${locationList[currentCard].name}. You earned ${cardScore} points.`;
  }
  if (currentCard === locationList.length - 1) {

    nextCard.innerHTML = 'results';
  }
  card.classList.toggle('is-flipped');

}
// on click, unblur hint 1
// decrement total possible score
function hintOneClick() {
  cardHint1.textContent = locationList[currentCard].hint1;
  cardScore = cardScore - 20;
}



// // on click, unblur hint 2ß
// // decrement total possible score
function hintTwoClick() {
  cardHint2.textContent = locationList[currentCard].hint2;
  cardScore = cardScore - 20;
}


// // calculate score for this card
// // save to totalscore
// // animation for correct / incorrect answers
// function scoreAnswer() {


// }


// // timer function.  Count down from 5 minutes (variable) until game end
// // When timer ends, end game, tally score
// window.onload = (e) => {gameTimer();};

let time = 30;

displayTime(time);

function gameTimer() {
  let countdown = setInterval(() => {
    time--;
    displayTime(time);
    if (time <= 0 || time < 1) {
      timer.innerHTML = 'Game over';
      clearInterval(countdown);
      endGame();
    }

  }, 1000);
}



function shuffleArray(array) {
  let tempNum;
  let tempArray = [];

  for (let i = 0; i < array.length; i++) {
    tempNum = Math.floor(Math.random() * (array.length));
    while (tempArray.includes(array[tempNum])) {
      tempNum = Math.floor(Math.random() * (array.length));
    }
    tempArray[i] = array[tempNum];
  }
  return tempArray;
}


function displayTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}
// // high score table.  See if user score is in top 10.  If yes, add to table

// function highScore() {


// }
//
function endGame() {
  localStorage.setItem('score',totalScore);
  window.location.href = 'Highscore.html';
}
// *********** EXECUTABLE CODE**********
// locationList = shuffleArray(locationList);
// playGame();
gameTimer();
renderCard(0);
card.classList.toggle('is-flipped');
card.addEventListener('submit', handleSubmit);
card.addEventListener('click', handleClick);
nextCard.addEventListener('click', handleNextCard);
