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
    alert('Awesome! I cant wait');
}
else {
    alert('I will see you at PAX then!!!!');
}
console.log('users answer to if I am their friend:', questionFriend);

// asks if I am good looking
var questionLooks = prompt('Do I look good?').toUpperCase();
if (questionLooks === 'Y' || questionLooks === 'YES') {
    alert('thanks :)');
}
else {
    alert('yes*');
}
console.log('users answer to if I amtheir friend:', questionLooks);

// asks if I like the rain.
var questionRain = prompt('Do I like the rain?').toUpperCase();
if (questionRain === 'Y' || questionRain === 'YES') {
    alert('I love it!!!');
} 
else {
    alert('Better luck next time!');
}
console.log('users answer to if I like rain:', questionRain);

//Question 6 This app is a number gaming where you have to guess the number 69 
var numGuess = parseInt(prompt('Guess a number between 1 and 100'));

    while(numGuess !== 69) {
        if (numGuess > 69) {
        numGuess = parseInt(prompt('Your guess was to high. Try Again'));
        } 
        else {
        numGuess = parseInt(prompt('Your guess was to low. Try again.'));
        }
    }