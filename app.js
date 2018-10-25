'use strict';
// this app asks five yes or no questions 
alert('Hi! Welcome to my website, lets see how well you know me!');
// Tells the user to answer with y/yes/n/no
alert('Answer with Y/YES/N/NO')

// asks if I am from Seattle
var questionLoc = prompt('Am I from Seattle?').toUpperCase();
if (questionLoc === 'N' || questionLoc === 'NO') {
    alert('You are correct! I am from Oregon.');
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I am from seattle:', questionLoc);

// asks if I can code in javasript
var questionCode = prompt('Can I code in JavaScript').toUpperCase();
if (questionCode === 'Y' || questionCode === 'YES') {
    alert('You are correct! this code was written in JavaScript.');
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I can code in javascript:', questionCode);

// asks if I am your friend
var questionFriend = prompt('Can I be your friend').toUpperCase();
if (questionFriend === 'Y' || questionFriend === 'YES') {
    alert('Awesome!');
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I am their friend:', questionFriend);

// asks if I enjoy coffee
var questionLooks = prompt('Do I enjoy coffee?').toUpperCase();
if (questionLooks === 'Y' || questionLooks === 'YES') {
    alert('I love the smell and taste of coffee');
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I enjoy coffee:', questionLooks);

// asks if I like the rain.
var questionRain = prompt('Do I like the rain?').toUpperCase();
if (questionRain === 'Y' || questionRain === 'YES') {
    alert('I love it!!!');
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I like rain:', questionRain);

//Question 6 This app is a number gaming where you have to guess the number 69 with only 4 trys
var numGuess = parseInt(prompt('Guess a number between 1 and 100'));
var counter = 0;

while (numGuess !== 69 && counter < 3) {
    if (numGuess > 69) {
        counter++;
        numGuess = parseInt(prompt('Your guess was to high. Try Again.'));
    }
    else if (numGuess < 69) {
        counter++;
        numGuess = parseInt(prompt('Your guess was to low. Try Again.'))
    }
}
if (numGuess === 69) {
    alert('You guessed the right answer!');
}
else{
    alert('you ran out of trys..');
}
//Question 7 adds the the questions 1-5 together giving them a total number of questions the got done correctly being 1 and n being 0
