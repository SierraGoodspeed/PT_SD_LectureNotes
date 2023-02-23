const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
    return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
});
}

start ()

async function start () {

console.log("\n-------------------------");
console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.");
console.log("-------------------------");

    let minNum = 1;
    let quarterNum = 25
    let midNum = 50
    let thirdNum = 75
    let maxNum = 100;

let guessNum = await ask(
    `\nPlease choose a number between ${minNum} and ${maxNum} \n This will be your secret number that I will try to guess (I won't look.) `
);

let secretNumber = parseInt(guessNum);


async function playGame () {
    
    
    let numMath = Math.ceil( Math.random() * maxNum + 1)

    let compGuess = await ask(`Is your number: ${numMath}? (Y)es or (N)o?`)  
    
    let wrongAnswer = await ask (`Is your number (H)igher or (L)ower?`)
    
    
    if (compGuess === "N" && numMath !== secretNumber) {
    console.log(`\nOoops guess I'm wrong.:/`);
    console.log(wrongAnswer)
    
      //playGame();
    
    } else if (compGuess === "Y" && numMath === secretNumber) {
    console.log(`\n Yaaayyyy! I got it! :3`);
    console.log("The End")
    
    } if (wrongAnswer === "H") {
        playGame();
    } if (wrongAnswer === "L") {
        playGame();
    };
};
playGame();
};

//process.exit();