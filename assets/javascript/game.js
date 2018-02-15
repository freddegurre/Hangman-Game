
//Words to chose from
var words = ["elephan", "banana", "zebra", "pig"];
//What letter user guesses
var userGuess = [];
//store wrong guesses
var rightGuess = [];

var wrongGuess = [];

//computer picks a random word from words
var computerChoise = words[Math.floor(Math.random() * words.length)];

//split the computer choise word to single letters 
var splitChoise = computerChoise.split("");

//Calculate lenght of word and print it to screen
//var wordLength = computerChoise.length;
for (i = 0; i < computerChoise.length; i++ ) {
    document.getElementById("word").textContent += (" _ ");
}

//store user guess in arrey userGuess and print the guess to screen 
document.onkeyup = function(event) {

  //If key.event does not match exsisting index in userGuess
    if (userGuess.indexOf(event.key)  === -1 ){
        
        //then add key.event to userGuess
        userGuess.push(event.key);

        //convert user guess to string 
        userGuess.toString();
    
      if (splitChoise.indexOf(event.key) >=0) {
        //print the string to the HTML file as a letter that has been guessed
        rightGuess.push(event.key);
      }
      
      else {
        wrongGuess.push(event.key);
        document.getElementById("guess").textContent = wrongGuess;
      }
    }
  
};
console.log(splitChoise);
   
    //does the userGuess = any of the strings in splitChoise? 
    /*else if (splitChoise.indexOf(event.key) >=0) {
      //if true check index number of matching string in splitChoise array.
      document.getElementById("word").textContent = event.key;
  }*/


  






  /*for (var i = 0; i < userGuess.length; i++) {
    if (userGuess[i] === ) 
    {   
       alert('Value exist');
    }else{
       alert('Value doesn't exist');
    }

console.log(words.indexOf("banana"))*/





