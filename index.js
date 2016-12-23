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

  // if(localStorage.sessionInfo){
  //   var retrieveSession = localStorage.getItem('sessionInfo');
  //   sessionInfo = JSON.parse(retrieveSession);
  //   // console.log('session info = ' + sessionInfo);
  // }
}


// CONSTRUCTORS
function User(username, password) {
  this.username = username;
  this.password = password;
  // this.savedPages = [];
  allUsers.push(this);
}

new User('siamak', '1234');


var submitSignIn = document.getElementById('index');

// checkStorage();

function handleSignIn(event){
  event.preventDefault();
  // checkStorage();

var login = document.getElementById('signInButton');
var loginUsername = document.getElementById('username');
var loginPassword = document.getElementById('password');

// if user already signed in, go get the sign in info and alert user that they are currently signed in
  if(sessionInfo[0] === true){
    var signInForm = document.getElementById('index');
    loginUsername.value = '';
    loginPassword.value = '';
    // alert('You are currently signed in.')
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
      location.assign('story.html');
    }
  }
}

// console.log(sessionInfo);
submitSignIn.addEventListener('submit', handleSignIn);
// END INDEX.HTML


//--------------------user sign up ----------------------------



// if(signUp){
//   checkStorage();
//   signUpButton.addEventListener('click', goToSignUp);
// }
//
// function goToSignUp(){
//   location.href = 'signup.html';
// }
//
// var doSignUp = document.getElementById('doSignUp');
// doSignUp.addEventListener('click', handleSignUp);
//
//
// function handleSignUp(event) {
//   event.preventDefault();
//
//   if(sessionInfo[0] === true){
//     alert('You are currently signed in.');
//     var accountForm = document.getElementById('makeAccount');
//     accountForm.value = '';
//   }
//
//   var makeUsername = document.getElementById('makeUsername').value;
//   var makePassword = document.getElementById('makePassword').value;
//
//   if(allUsers.length === 0){
//     makeUser(makeUsername, makePassword);
//     return;
//   }
//
//   for(var i = 0; i < allUsers.length; i++){
//     if(makeUsername === allUsers.username[i]){
//       alert('Username is taken!');
//       loggedIn = false;
//       return;
//     }
//     if(makePassword.length > 8){
//       alert('Password is too long!');
//       loggedIn = false;
//       return;
//     }
//     makeUser(makeUsername, makePassword);
//   }
// }
//
//
// function makeUser(newUsername, newPassword){
//
// var newUser =new User(newUsername, newPassword);
//     // console.log('newUsername = ' + newUsername);
//     // console.log('newPassword = ' + newPassword);
//
//   sessionInfo.push(loggedIn = true);
//   sessionInfo.push(newUser);
//
//
//   var storeThisUser = localStorage.setItem('allUsers', JSON.stringify(allUsers));
//   var storeThisSession = localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));
//
//
//   alert('Sign up Successful!');
//   location.href = 'story.html';  // take user to story book
// }
