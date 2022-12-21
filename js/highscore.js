'use strict';

///score array, we still need to push the user score object into this array
let scores = [
  { name: "Player1", score: "430", id: "player1" },
  { name: "Player2", score: "580", id: "player2" },
  { name: "Player3", score: "310", id: "player3" },
  { name: "Player4", score: "640", id: "player4" },
  { name: "Player5", score: "495", id: "player5" },
  { name: "Player6", score: "495", id: "player6" },
  { name: "Player7", score: "495", id: "player7" },
  { name: "Player8", score: "495", id: "player8" },
  { name: "Player9", score: "495", id: "player9" },
  { name: "Player10", score: "495", id: "player10" },
];
function updateLeaderboardView() {
  let leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";
  scores.sort(function (a, b) { return b.score - a.score });
  let elements = []; // we'll need created elements to update colors later on
  // create elements for each player
  for (let i = 0; i < scores.length; i++) {
    let name = document.createElement("div");
    let score = document.createElement("div");
    name.classList.add("name");
    score.classList.add("score");
    name.innerText = scores[i].name;
    score.innerText = scores[i].score;
    let scoreRow = document.createElement("div");
    scoreRow.classList.add("row");
    scoreRow.appendChild(name);
    scoreRow.appendChild(score);
    leaderboard.appendChild(scoreRow);
    elements.push(scoreRow);
  }
  let colors = ["purple", "green", "blue"];
  for (let i = 0; i < 3; i++) {
    elements[i].style.color = colors[i];
  }
}
updateLeaderboardView();
function randomize() {
  for (var i = 0; i < scores.length; i++) { /// place math for score here
    scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  }
}
// when your data changes, call updateLeaderboardView
updateLeaderboardView();
function Player() {
  this.name = localStorage.getItem('userName'),
    this.score = localStorage.getItem('score'),
    this.id = 'playerx'
};
console.log(scores);
scores.pop(new Player);
console.log(scores);
