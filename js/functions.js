console.log("hello this is the function.js file for day 2 js")

/*
    Javascript fns
*/

// Regularly Named Function
// function <funcName>(param1, param2, etc.){ code to execute when called }

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
};

console.log(addNums);
// execute a fn: funcName(arg1, arg2, etc.)
console.log(addNums());




// Regularly Named Fn w Parameters
// function <funcName>(param1, param2, etc){ code to execute }

function addNums2(num1, num2){
    return num1 + num2;
};

console.log(addNums2);
// execute a fn: funcName(arg1, arg2, etc)
console.log(addNums2(10, 20));


// put exercise 1 from last night in a fn

let exerciseOneArr = [1, 2, 3, 5, 6, 7, 10, 12]

// need a for loop; for num, check if prev_num == num -1;
// start at index 1, not index 0

function break_nums(farquad){
    for (let i in farquad){
        if (farquad[i] - farquad[i-1] > 1){
            return i;
        };
    };
};

console.log(break_nums(exerciseOneArr));



// Function Variable Declaration
// (var, let, or const) nameOfVariable = function(){ code to call when executed }

let addSomeNums = function(){
    let num1 = 100;
    let num2 = 201;
    return num1 + num2;
};
console.log(addSomeNums())


var addSomeNums2 = function(num1, num2){
    return num1 + num2;
};
console.log(addSomeNums2(100, 301))




// Arrow Functions
// var varName = () => {}

var myFirstArrow = () => {};
console.log(myFirstArrow)

// Arrow Functions
// var varName = () => {}

var addNumsArrow = (num1, num2) => {
    return num1 + num2;
};
console.log(addNumsArrow(15, 30));


// IF {code} is one line with only a return, you can remove {} and 'return'

let addNumsArrow2 = (num1, num2) => num1 + num2;
console.log(addNumsArrow2(20, 30));


// IF there is ONE and ONLY ONE param, () are not necessary

let addNumsArrow3 = num1 => num1 + 12;
console.log(addNumsArrow3(20));


// Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

// Example 1:
// Input: [10, 12, -9, 3, -1, 0, 15] 
// Output: 40
// Explain: 10 + 12 + 3 + 15 = 40

// Example 2:
// Input: [3, 5, 7, 9, -10, 2, -22, -1] 
// Output: 26

// Note: if there is nothing to sum, the sum is default to 0.
// */
console.log('EXERCISE 2 ---------------')


// Create an arrow fn for ex2 of yesterdays hw

let posSum = numbers1 => {
    let total = 0;
    for (i = 0; i < numbers1.length; i++){
        if (numbers1[i] > 0){
            total += numbers1[i]
        };
    };
    return total;
};
console.log(posSum([10, 12, -9, 3, -1, 0, 20]))