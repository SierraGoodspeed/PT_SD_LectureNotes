// ? Array Methods, awesome ways to do things with or to arrays


let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Hot Dog"];

for (item of food){
    console.log(item);
}

// * .push(), adds item to the end of an array

food.push("Pizza", "More Pie");
console.log("Push method:", food); // Push method: ["Pecan Pie", "Shrimp", "Quesadilla", "Hot Dog", "Pizza", "More Pie"]
// console.log(food[4]); // Pizza

// * .splice(), splice(indices of where to remove how many to remove, what to replace with/add)
food.splice(1, 1, "Tacos");
console.log("Splice method:", food);

food.splice(1, 0, "Steak");
console.log("Splice method:", food);

// * .pop() removes value from end of array
food.pop();
console.log("Pop method:", food);

// * .shift(), removes the first value of an array (value in first position)

food.shift();

console.log("SHift method:", food);

// * .unshift(), adds to the front of an array, can include multiple items
food.unshift("cake", "sushi", "roti");
console.log("Unshift method:", food);

// .length, property not method
console.log(food.length);

// * .toString(), returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("ToString Method: ", rgb.toString());


// ? ITERATION METHODS

/* 
    ? .filter() & .includes(
        - does not destroy the original array
        -we typically store the filter array in a new variable
        -takes a callback function that returns either true or false
        - A callback function is another function that we invoke within our main function (nested function)
        -loops through array
        -Must have a return
    
*/

let fruit = ["Kumquat", "Banana", "Peach", "Kiwi", "Papaya", "Mango"];

// Use filter to remove peach

/* let filteredFruit = fruits.filter(fruit  => {   
    let remainingFruit = fruit !== "Peach";
    console.log(`Remaining fruit: ${remainingFruit}`);
    return remainingFruit;
})

console.log(filteredFruit); */

// .includes(), remove any fruit with "p"
let otherfruit = "Pineapple";
//console.log("Includes method:" , fruit.includes("p")); //false .includes done on one item at a time (single value at a time)
console.log("Includes method:" , otherfruit.includes("p"));
console.log("Includes method:" , otherfruit.includes("apple"));//true

// .filter with .includes , remove any fruit with "P"

const filterFruit2 = fruit.filter((item) => !item.includes("P"));
console.log(filterFruit2);
// set the filtered array to variable, filter will run eatMango function per item in array

const filteredFruitFunctionEx = fruit.filter(eatMango);
// returns true if not mango, false if mango
function eatMango(fruit) {
    return fruit !== "Mango";
}
// printing to see final filtered array

console.log("Filter with function ex: ", filteredFruitFunctionEx )

//console.log(eatMango("baseball"))// demo function 