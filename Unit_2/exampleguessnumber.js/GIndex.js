// Imports readline and allows us to do input in and out
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// run file in terminal with: node fileName.js
// ! DO NOT TOUCH CODE ABOVE THIS LINE
// Async start function being invoked
start();
// The function that starts the whole game
async function start() {
  // Intro game text
  // Game intro message

    console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
// Set lowest num
let minNum = 1;
// Asking the user for highest num
let MaxNum = 100;
let choNum = await ask(
  `\nPlease choose a number between ${minNum} and ${MaxNum} \n This will be your secret number that I will try to guess (I won't look.) `
);


// Grab the value of user input
let secretNumber = parseInt(choNum);
  
  // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  //console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  // Example async await function to ask for highest num
  async function playGame() {
    let numMath = Math.ceil( Math.random() * MaxNum / 2)
    
    let compGuess = await ask (`Is your number: ${numMath}? (Y)es or (N)o?`)  

    if (compGuess === "N" && compGuess !== secretNumber) {
      console.log(`\nOoops guess I'm wrong.:/`);
      
      playGame();
      
    } else if (compGuess === "Y" ) {
      console.log(`\n Yaaayyyy! I got it! :3`);
      process.exit();
    } 
      
    }
playGame();
  }

    
 
    

    

  // Calling the pick high function
 



// Stops the start function from running, "exits"
// 