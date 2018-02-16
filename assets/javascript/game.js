
//Words to chose from
var words = ["pig", "elk", "goat", "bear", "mouse"];
//What letter user guesses
var userGuess = [];
//store wrong guesses
var rightGuess = [];
//Wrong guesses 
var wrongGuess = [];
//number of guess left 
var noGuess = [9];
//computer picks a random word from words
var computerChoise = words[Math.floor(Math.random() * words.length)];

//split the computer choise word to single letters 
var splitChoise = computerChoise.split("");

//Function for new game
function newGame (){
  userGuess = [];
  rightGuess = [];
  wrongGuess = [];
  noGuess = [9]
}

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
      
        //Check if the letter is inside of the chosen word
      if (splitChoise.indexOf(event.key) >=0) {

        //print the string to the HTML file as a letter that has been guessed
        rightGuess.push(event.key);
         document.getElementById("rightGuess").textContent = rightGuess;
      }
      
      //if wrong guess push the guess to wrongGuess array and display wrong guess 
      else {
        wrongGuess.push(event.key);
        
        //if guessed wrong take away number of guess
        noGuess--; 
      }
      // when you are out of guesses you have lost
      if (noGuess === 0){
        newGame();
        alert("Game over :( please reload page to get new word :)");

      }
      // its not a sustainible solution but it will have to do atm
      if (rightGuess.length === splitChoise.length) {
        alert("you won! please reload page to get new word :) ")
      } 
    }

document.getElementById("wronGuess").textContent = wrongGuess;    
document.getElementById("noguess").textContent = noGuess;
    

        //Trying to compare the index of right guess and split choise to determine if there is a win or not, 
        //but with this for loop it wins on every right letter
            /*for (var i = 0; i < rightGuess.length;i++){
              if (rightGuess[i] === splitChoise[i]){
                alert("you winn!")
              }
            }*/


};


console.log(splitChoise);
   






