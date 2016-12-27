
'use strict';


//DOM variables

var storyImage = document.getElementById('storyImage');
var changeImageButton = document.getElementById('changeImageButton');
var textBox = document.getElementById('textBox');
var clearText = document.getElementById('clearText');
var storyForm = document.getElementById('storyForm');
var storyTitle = document.getElementById('storyTitle');



//Global variables
var allImages = [];
var imgName = ['batman', 'beanstalk','boyanddog', 'cars', 'cow', 'dragoncarrot', 'dreams', 'gorilla', 'humpty', 'jellyfish', 'junglebook', 'lightingmcqueen', 'mice', 'monster', 'moon', 'ori-and-the-blind-forest', 'oz', 'pirate', 'roof', 'safari', 'sheeps', 'tiger', 'transformer'];


//Constructor
function ImgGenerator(name){
  this.name = name;
  this.filePath = 'img/' + name + '.jpg';
  this.title = '';
  this.story = '';
  this.used = false; // meaning image hasn't been used before
  allImages.push(this);
}

// create random image generator
function randImg() {
  var randomNumber = Math.floor(Math.random() * allImages.length);
  var theImage = allImages[randomNumber];
  return theImage;

}

var counter = 0;

function displayImg() {
  storyTitle.value = null;
  textBox.value = null;
  var imageObject = randImg();

  while (imageObject.used === true) {  // meaning images hasn't been used before
    imageObject = randImg();
  }

  imageObject.used = true;

  if (storyImage){
    storyImage.src = imageObject.filePath;
    storyImage.alt = imageObject.name;
    storyTitle.value = imageObject.title;
    textBox.value = imageObject.story;
  }
  // reset check when array runs out
  counter += 1;

  if (counter % allImages.length === 0) {

    allImages.forEach(function (element) {
      element.used = false;
    });
  }
}

function handleStoryForm(event) {
  event.preventDefault();

  for(var i = 0; i < allImages.length; i++) {
    if(storyImage.alt === allImages[i].name) {
      allImages[i].title = event.target.formTitle.value;
      allImages[i].story = event.target.formStory.value;
      localStorage.setItem('allImages', JSON.stringify(allImages));
    }
  }
}

function checkImages() {
  if(localStorage.allImages){
    var retrieveStorage = localStorage.getItem('allImages');
    allImages = JSON.parse(retrieveStorage);
    for (var i = 0; i < allImages.length; i++) {
      allImages[i].used = false;
    }
  } else {
    for (var i = 0; i < imgName.length; i++){
      new ImgGenerator (imgName[i]);
    }
  }
}
// function execution
checkImages();

displayImg();
function changeImageHandler(event){
  event.preventDefault();
  displayImg();
}

function clearTextHandler(event){
  event.preventDefault();
  textBox.value = '';
  storyTitle.value = '';
}

clearText.addEventListener('click', clearTextHandler);
changeImageButton.addEventListener('click', changeImageHandler);
storyForm.addEventListener('submit', handleStoryForm);
