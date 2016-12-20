'use strict';

// GLOBAL VARIABLES
var loggedIn = false;
var currentUser = null;

var allUsers = [];

// CONSTRUCTORS
function User(username, password/*,savedPages*/) {
    this.username = username;
    this.password = password;
    allUsers.push(this);
    //this.savedPages = [];
}

var signUp = document.getElementById('signUp');


signUp.addEventListener('click', handleSignUp);


function handleSignUp(event) {
    event.preventDefault();

    var makeUsername = document.getElementById('makeUsername').value;
    var makePassword = document.getElementById('makePassword').value;

    for(var i = 0; i < allUsers.length; i++){
        if(makeUsername === allUsers.username[i]){
            alert("That username is taken!");
            return;
        }
        if(makePassword.length > 8){
            alert("Your password is too long!");
            return;
        }
    }

    new User(makeUsername, makePassword);

    loggedIn = true;
}

console.log(allUsers);
