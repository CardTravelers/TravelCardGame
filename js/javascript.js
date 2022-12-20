'use-strict';

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});



// timer //
let startingMinutes = 5;
let start = startingMinutes * 60;

//get dom//
let timer = document.getElementById('timer');

setInterval(updateCountdown, 1000);

//function//
function updateCountdown() {
  let minutes = Math.floor(start / 60);
  let seconds = start % 60;

  seconds = seconds< 5 ? '0' + seconds : seconds;
//enter back in dom//
  timer.innerHTML = `${minutes}:${seconds}`;
  start--;
}

