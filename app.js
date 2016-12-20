'use strict'

//DOM variables
var storyImage = document.getElementById('storyImage');

//Global variables
var allImages = [];
var imgName = ['beanstalk', 'gorilla', 'humpty', 'moon', 'oz', 'tiger'];

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

function displayImg() {

  var imageObject = randImg();

  while (imageObject.used !== false) {  // meaning images hasn't been used before
    imageObject = randImg();
  }

  imageObject.used = true;

  storyImage.src = imageObject.filePath;

  // reset check when array runs out .

}

function resetImg() {
  //if we run out of array index, reset the array


}





// function execution

displayImg();
