'use strict';
// ********* GLOBALS**********

// **********DOM WINDOWS***********
// let userNameForm = document.getElementById('userNameForm');
let userName = document.getElementById('userName');
let form = document.getElementById('userNameForm');

// **********HELPER FUNCTION/UTILITIES**********
function handleSubmit(event){
  event.preventDefault();
  console.log(event);
  localStorage.setItem('userName', userName.value);
  window.location.href = 'gamepage.html';
}

// **********EVENT LISTENERS***************
// userNameForm.addEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);


// *********** EXECUTABLE CODE**********
