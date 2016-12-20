'use strict'

//DOM variables
var storyImage = document.getElementById('storyImage');









//Global variables
var allImages = [];
var imgName = ['beanstalk', 'book', 'gorilla', 'humpty', 'moon', 'oz', 'tiger'];





//to get images from the array, to use later for local storage
for (var i = 0; i < imgName.length; i++){
  new ImgGenerator(imgName[i]);
}

//Constructor
function ImgGenerator(name){
  this.names = name;
  this.filePath = 'img/' + name + '.jpg';
  this.used = false;
  allImages.push(this);
}


 //////// create random image generator
 function randImg () {
   var img = return Math.floor(Math.random() * allImages.length);
   storyImage.appendChild(img[i]);
 }

function displayImg (){

  var x = randImg();

while (allImages[x].used !== true) {
  

}



    storyImage.src = allImages[newImage[i]].filePath;

     randImg();
  }
createImg();
/////display image
