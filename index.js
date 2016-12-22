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

  if(localStorage.sessionInfo){
    var retrieveSession = localStorage.getItem('sessionInfo');
    sessionInfo = JSON.parse(retrieveSession);
    // console.log('session info = ' + sessionInfo);
  }
}


// CONSTRUCTORS
function User(username, password) {
  this.username = username;
  this.password = password;
  // this.savedPages = [];
  allUsers.push(this);
}

new User('siamak', '1234');
console.log(User);

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
      var signOutButton = document.getElementById('signOutButton');
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
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
    return;
  }

  // in the event that allUsers array validate if user is existing user by matching username and password from existing local/session storage
  for(var i = 0; i < allUsers.length; i++){
    if(loginUsername === allUsers[i].username && loginPassword === allUsers[i].password){
      alert('Login succesful!');
      console.log(sessionInfo);
    }

//populating teh sessionInfo array
  sessionInfo.push(loggedIn = true);
  sessionInfo.push(allUsers[i]);
}
}
// END INDEX.HTML
