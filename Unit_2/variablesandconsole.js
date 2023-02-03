/* 
    a COMMENT BLOCK IN JS:
    WINDOWS: ALT +SHIFT + A
    MAC: OPTION + SHIFT + A

*/
/* 
    Varibles:
    -How we give the app/program/computer data (a thing we want the computer to know)
    - A decleration that stores data/data values

    variables are declared with JS keywords
    - var , old and not often used (prone to mistakes)
    - let , can reassign the variables value
    - const , cannot reassign a value to a const declared variable

    Undeclared/no keyword: works but don't do it.
*/

let a = 100;
let streetaddress = "123 Sesame Street";

// 1     2     3      4
let      v     =      1;   

/* 
    1. Javascript keyword to denote the creation of a variable  
    2. Name of the variable
        - Developers refer to and use the variable name to grab the data stored.
        - Try to keep variable names pertaining to the data (if you can)
    3. Assignment operator (fancy tech/math for the equal sign.)
    4. The initial value/data value

*/

// Variable Declaration
let x;
let y;

// VARIABLE iNITIALIZATION
let z  = 10;  //  Anything on the right side of the of the = (been given a value)

// Assigning to Other Variables

let first = 'Sierra';
let last = 'Goodspeed';

let fullName = first + " " + last; 

console.log(fullName)

console.log("Declaration: ", x);  
// declaration: undefined

x = 13; // Assigned our variable x value for the first time
console.log("Initialization 1: ", x);

x = 42; // Reassigned the value of x
console.log("Initialization 1: ", x);

k = 122;
console.log(k);

let hi = "Hello";
console.log("Both variables: ", x, hi);

// Let vs Const in action
//  const is "new" in ES6: declare variables meant to remain unchanged

let today = "Great!";
const Javascript = "Aweseome!";
console.log(today, Javascript);

today = "Lovely!";
// javaScript = "Super!";// When we try to reassign a const variable = TypeError
console.log(today, Javascript);

console.warn("This is your first warning!");

let warning = "Uh oh, we've been warned...";
console.warn("Warning: ", warning);

let err = "This looks real bad and scary..."
console.error("Error:", err);

let error = "Ope";



