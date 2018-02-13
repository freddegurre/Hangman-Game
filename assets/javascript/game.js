
//Words to chose from
var words = ["elephan", "banana", "zebra", "pig"];
//What letter user guesses
var userGuess = [];

//computer picks a random word
var computerChoise = words[Math.floor(Math.random() * words.length)];
console.log(computerChoise)

//store user guess in arrey userInput
document.onkeyup = function(event) {
    userGuess.push(event.key)
    console.log(userGuess)
  };

 


