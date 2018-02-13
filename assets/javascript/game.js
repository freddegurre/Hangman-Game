
//Words to chose from
var words = ["elephan", "banana", "zebra", "pig"];
//What letter user guesses
var userGuess = [];

//computer picks a random word
var computerChoise = words[Math.floor(Math.random() * words.length)];
console.log(computerChoise)

//store user guess in arrey userGuess and print the guess to screen :) 
document.onkeyup = function(event) {
    userGuess.push(event.key);
    userGuess.toString();
    document.getElementById("guess").innerHTML = userGuess;
    console.log(userGuess)
  };





