'use strict';

// *************** Global Variables **************
let scores = [
  ['Player1', 430],
  ['Player2', 530],
  ['Player3', 630]
];

// *************** Functions **************
function newPlayer() {
  // check to see if username exists, then save to table
  if (localStorage.getItem('userName') !== null) {
    scores.push([localStorage.getItem('userName'), localStorage.getItem('score')]);
    storeTable();
  }

  // delete username and score
  localStorage.removeItem('userName');
  localStorage.removeItem('score');
}

function storeTable() {
  // Convert scores to string, then save to localStorage
  let tempString = JSON.stringify(scores);
  localStorage.setItem('highScoreTable', tempString);
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


  for (let i = 0; i < tempArray.length; i++) {
    tempArray[i][1] = Number(tempArray[i][1]);
  }
  return tempArray;
}

function clearTable() { // eslint-disable-line
  // used for testing
  localStorage.clear();
  scores = getTable();
}

function createTable(table, data) {
  // ***** Table generator
  // requires table element with ID
  // requires data in form of an array
  // let tempArray = [
  //   ['header 1', 'header 2', 'header 3'],
  //   [1,2,3],
  //   [4,5,6],
  //   [7,8,9],
  // ]

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

// *************** Executable Code **************
scores = getTable();
newPlayer();
createTable('highScoreTable', scores);
