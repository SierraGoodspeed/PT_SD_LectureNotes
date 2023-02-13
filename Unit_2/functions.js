/* 
    ? Functions
        - block of code that performs a particular task.
        - simplified programs that run a task when invoked.
        Two Main Types:
            - Declaration
            - Expression

        Functions must be called/invoked to run!
*/

//* Function Declaration
/* 
    Structure:
       1      2
    function hi() {
        ... code block
    }

    1. Keyword (function)
    2. Name of the function and parenthesis for the parameter
    ! Gets hoisted
*/

function hi() {
    console.log("Hi there!");
}

hi();

//* Function Expression
/* 
    Structure:
       1
    let hey = function hi() {
        code block...
    }

    1. The variable "hey" is now representative of the function hi()
    ! Does NOT get hoisted
*/


let hello = function hey(){
    //console.log("Hey");
    return "hey!";
}

hello();// Expression variable is required to run function
//hey(); // does't run
console.log(hello())// Runs function and prints returned value to the console
console.log(hello) // Will return that hello is a function

// Create a function that, when invoked, lists out the numbers 1-10

function numbers(){
    for (a = 1 ; a <= 10; a++ ){
        console.log(a);
    }
}

//numbers();
//hi();
//hi();
//hi();

// Create an array and function to list out array values 
let words = ["This", "can", "be", "really","cool"];

function printArray(){
    //for(i = 0; i < words.length; i++){
      //  console.log(words[i]);
    //}
    console.log("Testing join method:", words.join(" "));
}
printArray();

//! Parameters
/* 
    Structure:
                        1
    function fncName(parameter) {
                            2
        console.log(`Hi, ${parameter}`);
    }
                3
    fncName("Ben");
    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the parameter given to the function.
    3. This is where we define what the parameter's value will be.
*/

function greet(title){
    console.log(`Hey there, ${title}`);
}

// console.log(title); // Results in not found error, title only used in function code block

greet()// Hey there, undefined

greet("Ben"); // title ='s Ben "Hey there, Ben"
greet("Kate"); // title ='s Kate "Hey there, Kate"
greet("Tiny");

// Two parameter function
let totalSpent = 0

function order(foodItem, total){
    console.log(`I exchanged ${total} dollars for a ${foodItem}.`);
    totalSpent += total;
    console.log (totalSpent)
    return totalSpent;
}

order("pizza", 10);
order("soda", 2);
order("fries", 5);
console.log(totalSpent);


/* invoking - arguments
    order(argument, argument);
*/

