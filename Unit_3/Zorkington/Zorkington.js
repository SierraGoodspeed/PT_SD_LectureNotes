const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
return new Promise((resolve, reject) => {
readlineInterface.question(questionText, resolve);
});
}

// Define the start function
async function start() {
// Display the welcome message
const welcomeMessage = 182 `Main St. You are standing on Main Street between Church and South Winooski. There is a door here. A keypad sits on the handle. On the door is a handwritten sign.`;
console.log(welcomeMessage);

// Call the getUserInput function to get the user's input
await getUserInput();
}

// Define the getUserInput function
async function getUserInput() {
// Ask the user what they would like to do
let answer = await ask('What would you like to do?\n');

// Parse the user's input
let progress = parseInt(answer);

// Do something based on the user's input
switch (progress) {
case 1:
console.log('You chose option 1.');
break;
case 2:
console.log('You chose option 2.');
break;
default:
console.log('Invalid input.');
break;
}

// Call getUserInput again to get more input from the user
await getUserInput();
}

// Call the start function to begin the program
start();