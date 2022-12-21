'use strict';
// *********GLOBALS**********
let totalScore = 0;
let cardScore;
let currentCard = 0;
let answerArray = [];
let time = 300;

// **********DOM WINDOWS***********
let cardImage = document.getElementById('cardImage');// IMG element
let cardHint1 = document.getElementById('cardHint1');// P element
let cardHint2 = document.getElementById('cardHint2');// P element
let answer1 = document.getElementById('answer1Label');
let answer2 = document.getElementById('answer2Label');
let answer3 = document.getElementById('answer3Label');
let answer4 = document.getElementById('answer4Label');
let card = document.querySelector('.card__inner');
let timer = document.getElementById('timer');
let nextCard = document.getElementById('nextCard');
let correctAnswer = document.getElementById('correctAnswer');

// *********OBJECTS**********
let matterhorn = new Locations(
  'Matterhorn, Switzerland', 'It is the tenth highest mountain in Switzerland, and one of 48 Swiss peaks above 4000 m in height.', 'This location first appeared on Toblerone chocolate bars in 1960.', 'Nagano, Japan', 'Interlaken, Switzerland', 'Vail, CO', 'img/matterhorn.jpg');
let lasVegas = new Locations(
  'Las Vegas, Nevada', 'Over 22,000 concentions are held every year here.', 'This location is home to more than half of the 10 largest hotels in the world.', 'Reno, Nevada', 'Atlantic City, New Jersey', 'Macau, China', 'img/lasVegas.jpg');
let buenosAires = new Locations(
  'Buenos Aires, Argentina', 'This location has the largest port in it\'s entire continent', 'This location was first founded by a expedition led by the Spainard Pedro de Mendoza', 'Sao Paulo, Brazil', 'Bogata, Columbia', 'Caracas, Venezuela', 'img/buenosAires.jpg');
let cinqueTerre = new Locations(
  'Cinque Terre, Italy', 'This location does not allow cars.', 'This location is a group of villages.,', 'Nice, France', 'Lisbon, Portugal', 'Barcelona, Spain', 'img/cinqueTerre.jpg');
let budapest = new Locations(
  'Budapest, Hungary', 'This location is home to the largest castle in the world.', 'Locals consume the most beer per capita in the world.', 'Prague, Czech Republic', 'Berlin, Germany', 'Vienna, Austria', 'img/budapest.jpg');
let beijing = new Locations(
  'Beijing, China', 'This location is home to seven UNESCO World Heritage Sites.', 'This location is home to the largest palace in the world.', 'Tokyo, Japan', 'Seoul, South Korea', 'Manila, Philippines', 'img/beijing.jpg');
let ibiza = new Locations(
  'Ibizia, Spain', 'This location has 57 different beaches', 'The ground is orange due to pine trees that grow across the island', 'Mykonos, Greece', 'Patong, Thailand', 'Cancun, Mexico', 'img/ibiza.jpg');
let hawaii = new Locations(
  'Hawaii', 'This location has the world\'s most active volcano.', 'This location has the world\'s tallest mountain, as measured from its base at the ocean floor.', 'Fiji', 'Tonga', 'New Zealand', 'img/hawaii.jpg');
let hanoi = new Locations(
  'Hanoi, Vietnam', 'This location\'s name means City of Lakes.', 'This location has the world\'s largest cave.', 'Shanghai, China', 'Taipei, Taiwan', 'Pyongyang, North Korea', 'img/hanoi.jpg');
let lisbon = new Locations(
  'Lisbon, Portugal', 'This location is the birthplace of the music genre fado', 'It is the oldest city in Western Europe', 'Amsterdam, Netherlands', 'Zurich, Switzerland', 'London, UK', 'img/lisbon.jpg');
let virunga = new Locations(
  'Virunga National Park, Democratic Republic of Congo', 'This park has the highest deaths of rangers as they are often killed by poachers', 'This location is home to 218 mammal species, 706 bird species, 109 reptile species, 78 amphibian species, and 22 primate species', 'Yellowstone, WY', 'Banff National Park, Alberta', 'Serengeti National Park, East Africa', 'img/virunga.jpg');
let machuPicchu = new Locations(
  'Machu Picchu, Peru', 'The name means "Old Peak" or "Old Mountain"', 'This location is made up of 150 buildings ranging from baths and houses to temples and sancutaries', 'Chichen Itza, Mexico', 'Isla del Sol, Bolivia', 'Tikal, Guatemala', 'img/machuPicchu.jpg');
let providencia = new Locations(
  'Providencia, Columbia', 'Island that is part of a country Columbia, but geographic nearer to Nicaragua', 'It takes 30-40 minutes to drive in a loop around the island in a golf buggy', 'Cayo Acuario, Columbia', 'Johnny Cay, Columbia', 'Isle Grande, Columbia', 'img/providencia.jpg');

let locationList = [matterhorn, lasVegas, buenosAires, cinqueTerre, budapest, beijing, ibiza, hawaii, hanoi, lisbon, virunga, machuPicchu, providencia];

// **********CONSTRUCTOR FUNCTION***************
function Locations(name, hint1, hint2, option2, option3, option4, imgPath) {
  // constructor to create location object
  this.name = name;
  this.hint1 = hint1;
  this.hint2 = hint2;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.imgPath = imgPath;
}

// **********HELPER FUNCTION/UTILITIES**********
function renderCard(cardIndex) {
  // Data setup
  cardScore = 100;
  answerArray[0] = locationList[cardIndex].name;
  answerArray[1] = locationList[cardIndex].option2;
  answerArray[2] = locationList[cardIndex].option3;
  answerArray[3] = locationList[cardIndex].option4;
  answerArray = shuffleArray(answerArray);

  // DOM manipulation
  cardImage.src = locationList[cardIndex].imgPath;
  cardHint1.textContent = 'Hint 1';
  cardHint2.textContent = 'Hint 2';
  answer1.textContent = answerArray[0];
  answer2.textContent = answerArray[1];
  answer3.textContent = answerArray[2];
  answer4.textContent = answerArray[3];
}

function shuffleArray(array) {
  // Takes an array in and shuffles the order
  // Returns an array
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

function handleClick(event) {
  // Determine which hint was clicked, and run appropriate function
  if (event.target.id === 'cardHint1') {
    hintOneClick();
  }

  if (event.target.id === 'cardHint2') {
    hintTwoClick();
  }
}

function handleNextCard() {
  // Displays next card.  If no more cards, end game
  if (currentCard < locationList.length - 1) {
    currentCard++;
    renderCard(currentCard);
    card.classList.toggle('is-flipped');
  } else {
    endGame();
  }
}

function handleSubmit(event) {
  // After player enters answer, display answer message, add cardScore to totalScore, and bring up new card.
  event.preventDefault();
  let temp = Number(event.target.elements.cardOptions.value);
  let guess = answerArray[temp];
  if (guess === locationList[currentCard].name) {
    totalScore += cardScore;
    correctAnswer.innerHTML = `Great Job! ${locationList[currentCard].name} is correct! One step closer to helping me find my way. You earned ${cardScore} points.`;
  } else {
    cardScore = 0;
    correctAnswer.innerHTML = `Oh no! The correct answer is ${locationList[currentCard].name}. You earned ${cardScore} points.  Will I ever find my way home?`;
  }
  if (currentCard === locationList.length - 1) {

    nextCard.innerHTML = 'results';
  }

  for(let i = 0; i < event.target.elements.cardOptions.length; i++){
    event.target.elements.cardOptions[i].checked = false;
  }

  card.classList.toggle('is-flipped');
}

function hintOneClick() {
  // on click, show hint and decrement score
  cardHint1.textContent = locationList[currentCard].hint1;
  cardScore = cardScore - 20;
}

function hintTwoClick() {
  // on click, show hint and decrement score
  cardHint2.textContent = locationList[currentCard].hint2;
  cardScore = cardScore - 20;
}

function gameTimer() {
  // time is in seconds, set by global variable
  // Decrement time once every 1000 ms (using setInterval method) and update time display
  // If time is up, cancel setInterval and end game
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

function displayTime(seconds) {
  // Displays time in minutes and seconds
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function endGame() {
  // saves score to local storage and display high score page
  localStorage.setItem('score', totalScore);
  window.location.href = 'Highscore.html';
}

// **********EVENT LISTENERS***************
card.addEventListener('submit', handleSubmit);
card.addEventListener('click', handleClick);
nextCard.addEventListener('click', handleNextCard);

// *********** EXECUTABLE CODE**********
locationList = shuffleArray(locationList);
displayTime(time);
gameTimer();
renderCard(0);
card.classList.toggle('is-flipped');
