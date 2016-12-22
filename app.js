
'use strict';


//DOM variables

var storyImage = document.getElementById('storyImage');
var changeImageButton = document.getElementById('changeImageButton');
var textBox = document.getElementById('textBox');
var clearText = document.getElementById('clearText');




//Global variables
var allImages = [];
var imgName = ['beanstalk', 'gorilla', 'humpty', 'moon', 'oz', 'tiger', 'batman', 'boyanddog', 'boydogplay', 'cars', 'cow', 'dragoncarrot', 'dreams', 'jellyfish', 'junglebook', 'lightingmcqueen', 'mice', 'monster', 'moon','ori-and-the-blind-forest', 'oz', 'pirate', 'roof', 'safari', 'sheeps', 'transformer'];

var loggedIn = false; //default
var currentUser = null; //

var allUsers = [];
var sessionInfo = [];

// checks use existence, then checks is a user is logged in
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


// CONSTRUCTORS
function User(username, password) {
  this.username = username;
  this.password = password;
  this.savedPages = [];
  allUsers.push(this);
}

new User('siamak', '1234');

// INDEX.HTML



var submitSignIn = document.getElementById('submitSignIn');
var submitSignUp = document.getElementById('submitSignUp');

checkStorage();

function handleSignIn(event){
    event.preventDefault();
  checkStorage();

var login = document.getElementById('login');
var loginUsername = document.getElementById('username').value;
var loginPassword = document.getElementById('password').value;


  if(sessionInfo[0] === true){
     
      alert('You are currently signed in.')
      form.textContent = null;

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






// END INDEX.HTML

//to get images from the array, to use later for local storage
for (var i = 0; i < imgName.length; i++){
  new ImgGenerator (imgName[i]);
}

//Constructor
function ImgGenerator(name){
  this.names = name;
  this.filePath = 'img/' + name + '.jpg';
  this.used = false; // meaning image hasn't been used before
  allImages.push(this);
}


 //////// create random image generator
function randImg() {
  var randomNumber = Math.floor(Math.random() * allImages.length);
  var theImage = allImages[randomNumber];
  return theImage;
}

var counter = 0;

function displayImg() {

  var imageObject = randImg();

  while (imageObject.used === true) {  // meaning images hasn't been used before
    imageObject = randImg();
  }

  imageObject.used = true;

  if (storyImage){
  storyImage.src = imageObject.filePath;
  }
  // reset check when array runs out .
  counter += 1;

  if (counter % 26 === 0) {

    allImages.forEach(function (element) {
      element.used = false;
    });

  }

  // console.table(allImages);
}

// function execution

displayImg();
function changeImageHandler(event){
  event.preventDefault();
  displayImg();
}

// function clearText(){
//   document.getElementById('textBox').value = '';
// }
//clear button
function clearTextHandler(event){
  event.preventDefault();
  console.log('event listener working');
  textBox.value = '';
  console.log(textBox);
}
 //if(clearText && changeImageButton) {
  clearText.addEventListener('click', clearTextHandler);
  changeImageButton.addEventListener('click', changeImageHandler);
 //}
