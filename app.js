'use strict';
// my answerCounter to add up how many points the user got correct
var answerCounter = 0;

// this app asks five yes or no questions 
alert('Hi! Welcome to my website, lets see how well you know me!');
// Tells the user to answer with y/yes/n/no
alert('Answer with Y/YES/N/NO')

// asks if I am from Seattle
var questionLoc = prompt('Am I from Seattle?').toUpperCase();
if (questionLoc === 'N' || questionLoc === 'NO') {
    alert('You are correct! I am from Oregon.');
    answerCounter++;
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I am from seattle:', questionLoc);

// asks if I can code in javasript
var questionCode = prompt('Can I code in JavaScript').toUpperCase();
if (questionCode === 'Y' || questionCode === 'YES') {
    alert('You are correct! this code was written in JavaScript.');
    answerCounter++;
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I can code in javascript:', questionCode);

// asks if I am your friend
var questionFriend = prompt('Can I be your friend').toUpperCase();
if (questionFriend === 'Y' || questionFriend === 'YES') {
    alert('Awesome!');
    answerCounter++;
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I am their friend:', questionFriend);

// asks if I enjoy coffee
var questionLooks = prompt('Do I enjoy coffee?').toUpperCase();
if (questionLooks === 'Y' || questionLooks === 'YES') {
    alert('I love the smell and taste of coffee');
    answerCounter++
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I enjoy coffee:', questionLooks);

// asks if I like the rain.
var questionRain = prompt('Do I like the rain?').toUpperCase();
if (questionRain === 'Y' || questionRain === 'YES') {
    alert('I love it!!!');
    answerCounter++;
}
else {
    alert('Better luck next time!');
}
console.log('users answer to if I like rain:', questionRain);

//Question 6 This app is a number gaming where you have to guess the number 69 with only 4 tries
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
    answerCounter++;
}
else if (counter == 3) {
    alert('you ran out of trys..');
}

//Question 7 

var stateOptions = ['WASHINGTON', 'OREGON', 'CALIFORNIA'];
var question7 = prompt('What is a state I have lived in?').toUpperCase();
var counter7 = 0;
var response = false

while (counter7 < 5 && response == false) {

    for (var i = 0; i <= stateOptions.length; i++) {
        if (question7 == stateOptions[i]) {
            alert('you are correct');
            response = true;
            answerCounter++;
            break;
        }
    }
    if (response == true) {
        break;
    }
    else if (counter7 == 6) {
        alert('You ran out of trys.');
        break;
    }
    else {
        question7 = prompt('Not that state! Try again.');
        counter7++;
    }

}

// tallys all of the users questions using answerCounter++ after correct answers
if (answerCounter >= 3) {
    alert('You got ' + answerCounter + ' right!');
} else if (answerCounter == 6) {
    alert('You got ' + answerCounter + ' correct! CONGRATS!!');
} else {
    alert('You got ' + answerCounter + ' answer correct. WORK HARDER!');
}
