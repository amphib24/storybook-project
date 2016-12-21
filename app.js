
'use strict';

// GLOBAL VARIABLES, validacross all pages
// note to self: do not forget to change location.href if statements!!

var loggedIn = false; //default
var currentUser = null; //default
var allUsers = [];
var sessionInfo = [];

// ----------------- SIGN IN -------------------------------------------------
function checkStorage(){
  if(localStorage.allUsers){
    var retrieveStorage = localStorage.getItem('allUsers');
    allUsers = JSON.parse(retrieveStorage);
    console.log('allUsers array ' + allUsers);
  }

  if(localStorage.sessionInfo){
    var retrieveSession = localStorage.getItem('sessionInfo');
    sessionInfo = JSON.parse(retrieveSession);
    console.log('session info = ' + sessionInfo);
  }
}


// CONSTRUCTORS (self-explanatory)
function User(username, password) {
  this.username = username;
  this.password = password;
  this.savedPages = [];
  allUsers.push(this);
}

//save feature TBD
function SavePage(title, picture, story, order){
  this.title = title;
  this.picture = picture;
  this.story = story;
  this.order = order;
  currentUser.savedPages.push(this);
}



// INDEX . HTML

 // for the DOM elements in story.js, they need to be in an if statement to point to the correct file
  var signInButton = document.getElementById('signIn');
  if(signInButton){
  signInButton.addEventListener('click', handleSignIn);
}

function handleSignIn(event){
    event.preventDefault();
  checkStorage();

 console.log('THE BUTTON WORKS!!!!');

  var inputUsername = document.getElementById('inputUsername').value;
  var inputPassword = document.getElementById('inputPassword').value;
  console.log(inputUsername);
  console.log(inputPassword);

  if(sessionInfo[0] === true){
      var signInForm = document.getElementById('signInForm');
      alert('You are currently signed in.')
      signInForm.textContent = null;

      // user Sign Out button
      var signOutButtonHere = document.getElementById('signOutButtonHere');
      var signOut = document.createElement('button');
      signOut.id = 'signOutButton';
      signOut.type = 'submit';
      signOut.textContent = 'Sign Out';
      signOutButtonHere.appendChild(signOut);
      signOutButtonHere.addEventListener('click', handleSignOut);
      return;
  }

  // in the event allUsers array is empty, then alert user to go sign up
  if(allUsers.length === 0){
    alert('Account not found. Please sign up.');
    document.getElementById('inputUsername').value = null;
    document.getElementById('inputPassword').value = null;
    return;
  }


  // in the event that allUsers array validate if user is existing user by matching username and password from existing local/session storage
  for(var i = 0; i < allUsers.length; i++){
    if(inputUsername === allUsers[i].username && inputPassword === allUsers[i].password){
      alert('Login succesful!');
      console.log(sessionInfo);


      //populating teh sessionInfo array
      sessionInfo.push(loggedIn = true);
      sessionInfo.push(allUsers[i]);

      // store sessionInfo into local storage
      var storeThisSession = localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));

      // reset form fields
      document.getElementById('inputUsername').value = null;
      document.getElementById('inputPassword').value = null;

      // creating BEGIN as a link and only allows it to appear after user signs in
      var beginButtonHere = document.getElementById('beginButtonHere');
      var begin = document.createElement('a');
      begin.href = 'story.html';
      begin.textContent = 'Begin';
      beginButtonHere.appendChild(begin);

      // user Sign In form
      var signInForm = document.getElementById('signInForm');
      signInForm.textContent = null;

      // user Sign Out button
      var signOutButtonHere = document.getElementById('signOutButtonHere');
      var signOut = document.createElement('button');
      signOut.id = 'signOutButton';
      signOut.type = 'submit';
      signOut.textContent = 'Sign Out';
      signOutButtonHere.appendChild(signOut);
      signOutButtonHere.addEventListener('click', handleSignOut);
      return;
    }
    alert('Username or Password is incorrect. Please try again.');

    // reset form fields
    document.getElementById('inputUsername').value = null;
    document.getElementById('inputPassword').value = null;
    return;
  }
}

function handleSignOut(event){
    event.preventDefault();
    // WIP WIP WIP //
    console.log('working on it');
}

// -------------------------------SIGN UP ------------------------------------


  var signUp = document.getElementById('signUp');
  if(signUp){
      checkStorage();
  signUp.addEventListener('click', handleSignUp);
}

function handleSignUp(event) {
    event.preventDefault();

if(sessionInfo[0] === true){
  alert('You are currently signed in.');
  var accountForm = document.getElementById('makeAccount');
  accountForm.textContent = null;
}

  console.log('the button works.');

  var makeUsername = document.getElementById('makeUsername').value;
  var makePassword = document.getElementById('makePassword').value;

  if(allUsers.length === 0){

    makeUser(makeUsername, makePassword, allUsers);
    return;
  }

  for(var i = 0; i < allUsers.length; i++){

    if(makeUsername === allUsers.username[i]){
      alert('Username is taken!');
      loggedIn = false;
      return;
    }
    if(makePassword.length > 8){
      alert('Password is too long!');
      loggedIn = false;
      return;
    }
    makeUser(makeUsername, makePassword, allUsers[i]);
  }
}


function makeUser(newUsername, newPassword, newUser){
  new User(newUsername, newPassword);
    // console.log('newUsername = ' + newUsername);
    // console.log('newPassword = ' + newPassword);

  sessionInfo.push(loggedIn = true);
  sessionInfo.push(currentUser = newUser);


  var storeThisUser = localStorage.setItem('allUsers', JSON.stringify(allUsers));
  var storeThisSession = localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));


  alert('Sign up Successful!');
  location.href = 'story.html';  // take user to story book
}








//DOM variables
  var storyImage = document.getElementById('storyImage');
  var changeImageButton = document.getElementById('changeImageButton');
  var textBox = document.getElementById('textBox');
  var clearText = document.getElementById('clearText');

  if(clearText && changeImageButton){
      checkStorage();
  clearText.addEventListener('click', clearTextHandler);
  changeImageButton.addEventListener('click', changeImageHandler);
}

//Global variables
var allImages = [];

//Constructor
function ImgGenerator(name){
  this.name = name;
  this.filePath = 'img/' + name + '.jpg';
  this.used = false; // meaning image hasn't been used before
  allImages.push(this);
}

new ImgGenerator('beanstalk');

var counter = 0;

 //////// create random image generator

function randImg() {
    if(storyImage){
      var randomNumber = Math.floor(Math.random() * allImages.length);
      var theImage = allImages[randomNumber];
      storyImage.src = theImage.filepath;
      return;
    }
}


function displayImg() {
    if(randImg()){
      var imageObject = randImg();

      imageObject.used = true;
      storyImage.src = imageObject.filePath;

      while (imageObject.used === true) {  // meaning images hasn't been used before
        imageObject = randImg();
      }

    // reset check when array runs out .
      counter += 1;

      if (counter % 6 === 0) {
        for (var i = 0; i < allImages.length; i++) {
          allImages[i].used = false;
        }
      }
  }
}

// function execution

displayImg();

function changeImageHandler(event){
  event.preventDefault();
  displayImg();
}


function clearTextHandler(event){
  event.preventDefault();
  console.log('event listener working');
  textBox.value = '';
  console.log(textBox);
}
