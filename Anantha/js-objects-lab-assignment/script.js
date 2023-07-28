// ![](https://i.imgur.com/hGEeDR1.png)

// # JavaScript Objects<br>Guess The Number Lab

// ## Intro

// This lab will provide you some practice working with JavaScript objects, plus some additional practice working with arrays.

// ## Setup

// 1. Create a new folder called js-objects-lab and create an index.html, style.css, and script.js file inside

// 2. Copy over the following object into your code:

//    ```js
//    const game = {
//      title: "Guess the Number!",
//      biggestNum: 100,
//      smallestNum: 1,
//      secretNum: null,
//      play: function () {
//        this.secretNum =
//          Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
//          this.smallestNum;
//      },
//    };
//    ```

// ## Features

// - Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly.

// - If the player has an incorrect guess, display an alert message that informs the player:

//   - Whether their guess is too high, or too low, and...
//   - A list of all the previously guessed numbers (without showing the square brackets of an array).

// - If the player has guessed the secret number:
//   - Display an alert message that congrats the player and informs them of how many guesses they took.
//   - End the game play.

// ## Tasks

// Completing the following tasks will result in a working _Guess the Number_ game:

// 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.

// 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: _Enter a guess between [smallestNum] and [biggestNum]:_. Hint - use a template literal for the prompt message.

// 3. Ensure that the `getGuess` method returns a value that:

//    - Is a _number_, not a _string_.
//    - Is between `smallestNum` and `biggestNum`, inclusive.
//    - Hints:
//      - This is a great use case for a `while` loop.
//      - `parseInt` returns `NaN` if the string cannot be parsed into a number.

// 4. From within the `play` method, invoke the `getGuess` method and add the new guess to the `prevGuesses` array.

// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:

//    - If the secret has been guessed:<br>
//      ```
//      Congrats! You guessed the number in [x] guesses!
//      ```
//    - Otherwise:<br>
//      ```
//      Your guess is too [high|low]
//      Previous guesses: x, x, x, x
//      ```
//    - Hints:
//      - `render` won't be able to access any of `play`'s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed.
//      - Template literals not only have interpolation, they honor whitespace - including line breaks!
//      - The list of previous guesses can be generated using the array `join` method.

// 6. The `play` method should end (`return`) when the guess matches `secretNum`.

// ## Bonus

// - When `play` is run, immediately prompt the player to enter the smallest and biggest numbers instead of having them pre-set.

const game = {
     title: "Guess the Number!",
     biggestNum: 100,
     smallestNum: 1,
     secretNum: null,
     prevGuesses:[],
     resetul: function(){
      let ul = document.getElementById("cardelement");
      ul.innerHTML="";
     },
     appendli: function (val) {
      let ul = document.getElementById("cardelement");
      let li = document.createElement("li");
      li.className ="list-group-item";
      li.appendChild(document.createTextNode(val));
      ul.appendChild(li);
    },
     updateUI: function(){
        document.getElementById("guessedNumbers").style.display = "inline";
        if(this.prevGuesses.length>1)
        {
          this.resetul();
          let i = 1;
          this.prevGuesses.forEach(e => {
            if(i<this.prevGuesses.length){
              this.appendli(e);
            }
            i++;
          });
        }
        document.getElementById("cardfooter").innerText = this.prevGuesses[this.prevGuesses.length-1];

     },
     guessNum: function(event){
      if(this.secretNum == null)
      {
        this.play();
      }
      console.log(this.secretNum);
      const guessNumber = document.getElementById("num").value;

       // Update the modal's content.
       const staticBackdropModal = document.getElementById('staticBackdrop')
       const modalBodyInput = staticBackdropModal.querySelector('.modal-body');
   
       this.prevGuesses.push(guessNumber);
       this.updateUI();
      if( guessNumber == this.secretNum){
        modalBodyInput.textContent = ` Woo Hoo!! You guessed the number ${this.secretNum} in ${this.prevGuesses.length + 1} trials`;
      }
      else
      {
        if(this.secretNum < parseInt(guessNumber)){
          modalBodyInput.textContent = `Your guess is high! Try again!`;
        }
        else{
          modalBodyInput.textContent = `Your guess is low! Try again!`;
        }
      }
     },
     play: function () {
       this.secretNum =
         Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
         this.smallestNum;
     },
   };

   function startPlaying(){
    const TheGame = function (){
        game.guessNum.call(game);
    }
 
    return{
      TheGame
    }
    
   }
   var sp = startPlaying();

   this.document.getElementById('startGame').addEventListener("click", sp.TheGame);



  
      
   
      
  