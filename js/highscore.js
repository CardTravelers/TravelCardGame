'use strict';
// *********GLOBALS**********
let scores = [
  ['Player1', 430],
  ['Player2', 530],
  ['Player3', 630]
];

// **********HELPER FUNCTION/UTILITIES**********
function newPlayer() {
  // check to see if username exists, then save to table
  if (localStorage.getItem('userName') !== null) {
    scores.push([localStorage.getItem('userName'), localStorage.getItem('score')]);
    storeTable();
  }

  // delete username and score to prep for next round
  localStorage.removeItem('userName');
  localStorage.removeItem('score');
}

function getTable() {
  // if highScoreTable doesn't exist, create a temp one
  if (localStorage.getItem('highScoreTable') === null) {
    scores = [
      ['Player1', 430],
      ['Player2', 530],
      ['Player3', 630]
    ];
    storeTable();
  }

  // Get table from localStorage, then parse into array
  let tempArray = [];
  let tempString = localStorage.getItem('highScoreTable');
  tempArray = JSON.parse(tempString);

  // Convert score from string to number
  for (let i = 0; i < tempArray.length; i++) {
    tempArray[i][1] = Number(tempArray[i][1]);
  }
  return tempArray;
}

function storeTable() {
  // Convert scores to string, then save to localStorage
  let tempString = JSON.stringify(scores);
  localStorage.setItem('highScoreTable', tempString);
}

function clearTable() { // eslint-disable-line
  // Helper function used for testing
  localStorage.clear();
  scores = getTable();
}

function renderTable(table, data) {
  // Sort table from high score to low score
  data.sort(function(a, b) {
    let x = a[1];
    let y = b[1];
    return y - x;
  });

  let tableDOM = document.getElementById(table);
  tableDOM.innerHTML = ''; // clears table
  let numColumns = data[0].length;
  let numRows = data.length;
  let rowElem;
  let headerElem;
  let cellElem;

  // Create header row
  rowElem = document.createElement('tr');
  tableDOM.appendChild(rowElem);

  // Create header cells
  headerElem = document.createElement('th');
  headerElem.textContent = 'Player Name';
  rowElem.appendChild(headerElem);

  headerElem = document.createElement('th');
  headerElem.textContent = 'Score';
  rowElem.appendChild(headerElem);

  // Create data rows
  // i = row, j = column
  for (let i = 0; i < numRows; i++) {
    rowElem = document.createElement('tr');
    tableDOM.appendChild(rowElem);
    // create data cells
    for (let j = 0; j < numColumns; j++) {
      cellElem = document.createElement('td');
      cellElem.textContent = data[i][j];
      rowElem.appendChild(cellElem);
    }
  }
}

// *********** EXECUTABLE CODE**********
scores = getTable();
newPlayer();
renderTable('highScoreTable', scores);
