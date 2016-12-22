'use strict'

var loggedIn = false; //default
var currentUser = null; //
var allUsers = [];
var sessionInfo = [];

// checks use existence, then checks is a user is logged in
function checkStorage(){
  if(localStorage.allUsers){
    var retrieveStorage = localStorage.getItem('allUsers');
    allUsers = JSON.parse(retrieveStorage);
    // console.log('allUsers array ' + allUsers);
  }

  if(localStorage.sessionInfo){
    var retrieveSession = localStorage.getItem('sessionInfo');
    sessionInfo = JSON.parse(retrieveSession);
    // console.log('session info = ' + sessionInfo);
  }
}


// CONSTRUCTORS
function User(username, password) {
  this.username = username;
  this.password = password;
  // this.savedPages = [];
  allUsers.push(this);
}

new User('siamak', '1234');


var submitSignIn = document.getElementById('signInButton');

// checkStorage();

function handleSignIn(event){
  checkStorage();

var login = document.getElementById('signInButton');
var loginUsername = document.getElementById('username');
var loginPassword = document.getElementById('password');

// if user already signed in, go get the sign in info and alert user that they are currently signed in
  if(sessionInfo[0] === true){
    var signInForm = document.getElementById('index');
    loginUsername.value = '';
    loginPassword.value = '';
    alert('You are currently signed in.')
  }


  // in the event allUsers array is empty, then alert user to go sign up
  if(allUsers.length === 0){
    alert('Account not found. Please sign up.');
    // document.getElementById('username').value = null;
    // document.getElementById('password').value = null;
    return;
  }

  // in the event that allUsers array validate if user is existing user by matching username and password from existing local/session storage
  for(var i = 0; i < allUsers.length; i++){
    if(loginUsername.value === allUsers[i].username && loginPassword.value === allUsers[i].password){
      sessionInfo.push(loggedIn = true);
      sessionInfo.push(allUsers[0]);
      localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));
      loginUsername.value = '';
      loginPassword.value = '';

      //location.href = 'story.html';
    }
  }
}


console.log(sessionInfo);
submitSignIn.addEventListener('click', handleSignIn);
// END INDEX.HTML
