
//Words to chose from
var words = ["elephan", "banana", "zebra", "pig"];
//What letter user guesses
var userGuess = [];


//computer picks a random word from words
var computerChoise = words[Math.floor(Math.random() * words.length)];

//Calculate lenght of word and print it to screen
//var wordLength = computerChoise.length;
for (i = 0; i < computerChoise.length; i++ ) {
    document.write(" _ ")
}

//store user guess in arrey userGuess and print the guess to screen not complete :) 
document.onkeyup = function(event) {
    if (userGuess.indexOf(userGuess) === -1 ){
    userGuess.push(event.key);
    userGuess.toString();
    document.getElementById("guess").innerHTML = userGuess;
    }

  };




  /*for (var i = 0; i < userGuess.length; i++) {
    if (userGuess[i] === ) 
    {   
       alert('Value exist');
    }else{
       alert('Value doesn't exist');
    }

console.log(words.indexOf("banana"))*/





