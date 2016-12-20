'use strict';

// GLOBAL VARIABLES, validacross all pages
// note to self: do not forget to change location.href if statements!!

var loggedIn = false; //default
var currentUser = null; //default

var allUsers = [];
var allImages = [];

var sessionInfo = [];

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


console.log(location.href);

// CONSTRUCTORS (self-explanatory)
function User(username, password) {
    this.username = username;
    this.password = password;
    this.savedPages = [];
    allUsers.push(this);
}

function Image(name){
    this.name = name;
    this.src = './imgdir/' + this.name + '.jpg';
    allImages.push(this);
}

        //image instances
        new Image('beanstalk');
        new Image('gorilla');
        new Image('humpty');
        new Image('moon');
        new Image('oz');
        new Image('tiger');

function SavePage(title, picture, story, order){
    this.title = title;
    this.picture = picture;
    this.story = story;
    this.order = order;
    currentUser.savedPages.push(this);
}















// INDEX . HTML

if(location.href === 'file:///C:/Users/maria/Desktop/blargh/index.html'){
    var signInButton = document.getElementById('signIn');
    signInButton.addEventListener('click', handleSignIn);

    checkStorage();
}

function handleSignIn(event){
    event.preventDefault();
    console.log('THE BUTTON WORKS!!!!');

    var inputUsername = document.getElementById('inputUsername').value;
    var inputPassword = document.getElementById('inputPassword').value;
    console.log(inputUsername);
    console.log(inputPassword);

    if(allUsers.length === 0){
        alert('Invalid login!');
        document.getElementById('inputUsername').value = null;
        document.getElementById('inputPassword').value = null;
        return;
    }

    for(var i = 0; i < allUsers.length; i++){
        if(inputUsername === allUsers[i].username && inputPassword === allUsers[i].password){


            console.log(sessionInfo);
            alert('Login succesful!');

            var thisTime = sessionStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));
            var foobar = localStorage.setItem('thisTime', JSON.stringify(thisTime));


            document.getElementById('inputUsername').value = null;
            document.getElementById('inputPassword').value = null;

            var beginButtonHere = document.getElementById('beginButtonHere');
            var begin = document.createElement('a');
            begin.href = 'story.html';
            begin.textContent = 'Begin';
            beginButtonHere.appendChild(begin);

            var signInForm = document.getElementById('signInForm');
            signInForm.textContent = null;

            var signOutButtonHere = document.getElementById('signOutButtonHere');
            var signOut = document.createElement('button');
            signOut.id = 'signOutButton';
            signOut.type = 'submit';
            signOut.textContent = 'Sign Out';
            signOutButtonHere.appendChild(signOut);
            signOutButtonHere.addEventListener('click', handleSignOut);

            return;
        }
        alert('Invalid login!');
        console.log('YOU FUCKED IT UP');
        document.getElementById('inputUsername').value = null;
        document.getElementById('inputPassword').value = null;
        return;
    }
}

function handleSignOut(event){
    event.preventDefault();
    // WIP WIP WIP //
    console.log('working on it')
}














// SIGN UP . HTML

if(location.href === 'file:///C:/Users/maria/Desktop/blargh/signup.html'){
    var signUp = document.getElementById('signUp');
    signUp.addEventListener('click', handleSignUp);

    checkStorage();

    if(sessionInfo[0] === true){
        alert('You are already signed in. Please go to Home and sign out.');
        var accountForm = document.getElementById('makeAccount');
        accountForm.textContent =  null;
    }
}

function handleSignUp(event) {
    event.preventDefault();
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
    console.log('newUsername = ' + newUsername);
    console.log('newPassword = ' + newPassword);

    sessionInfo.push(loggedIn = true);
    sessionInfo.push(currentUser = newUser);


    var storeThisUser = localStorage.setItem('allUsers', JSON.stringify(allUsers));
    var storeThisSession = localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));


    alert('Sign up Successful!');
    console.log(sessionInfo);

    // location.href = 'story.html';
}









// STORY . HTML

if(location.href === 'file:///C:/Users/maria/Desktop/blargh/story.html'){
    console.log('something');

    checkStorage();
}
