
'use strict';


//DOM variables

var storyImage = document.getElementById('storyImage');
var changeImageButton = document.getElementById('changeImageButton');
var textBox = document.getElementById('textBox');
var clearText = document.getElementById('clearText');




//Global variables
var allImages = [];
var imgName = ['beanstalk', 'gorilla', 'humpty', 'moon', 'oz', 'tiger', 'batman', 'boyanddog', 'boydogplay', 'cars', 'cow', 'dragoncarrot', 'dreams', 'jellyfish', 'junglebook', 'lightingmcqueen', 'mice', 'monster', 'moon','ori-and-the-blind-forest', 'oz', 'pirate', 'roof', 'safari', 'sheeps', 'transformer'];




// INDEX.HTML





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

function clearTextHandler(event){
  event.preventDefault();
  console.log('event listener working');
  textBox.value = '';
  console.log(textBox);
}

clearText.addEventListener('click', clearTextHandler);
changeImageButton.addEventListener('click', changeImageHandler);
