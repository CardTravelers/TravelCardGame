'use strict';
// ********* GLOBALS**********

// **********DOM WINDOWS***********
// let userNameForm = document.getElementById('userNameForm');
let userName = document.getElementById('userName');
let submitButton = document.getElementById('Send');

// **********HELPER FUNCTION/UTILITIES**********
function handleSubmit(event){
  console.log(event);
  event.preventDefault();
  localStorage.setItem('userName', userName.value);
  window.location.href = 'gamepage.html';
}

// **********EVENT LISTENERS***************
// userNameForm.addEventListener('submit', handleSubmit);
submitButton.addEventListener('submit', handleSubmit);


// *********** EXECUTABLE CODE**********
