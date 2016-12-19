'use strict'

//DOM variables
var storyImage = document.getElementById('storyImage');









//Global variables
var allImages = [];
var imgName = ['beanstalk', 'book', 'gorilla', 'humpty', 'moon', 'oz', 'tiger'];







//Constructor
//to get images from the array, to use later for local storage
for (var i = 0; i < imgName.length; i++){
  new ImgGenerator(imgName[i]);
}

function ImgGenerator(name){
  this.names = name;
  this.filePath = 'img/' + name + '.jpg';
  allImages.push(this);
}
