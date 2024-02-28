// program to swap two variables
let first = 5;
let second = 7;
console.log(first, second);

// first = second;
// second = first;

// Rule 1:
// const temp = first;
// first = second;
// second = temp;

// // Rule 2: using destructuring assignment
// [first, second] = [second, first];
// console.log(first, second);

// Rule 3: addition and subtraction operator
first = first + second;
second = first - second;
first = first - second;

console.log(first, second);
