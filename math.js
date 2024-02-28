// for something power
const result = Math.pow(3, 2);
// console.log(result);
// -------------------
// for some unknown value without positive or negative
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    console.log("You guys can be friends");
}
else{
    console.log("Stay apart");
}

// -------------
const number = 2.451245;
const fullNumber = Math.round(number);
console.log(fullNumber);

const result1 = Math.ceil(2.000001);//ceil is use for showing bigger number than exist
const result2 = Math.floor(456.259);// floor is use for showing exact number except decimal
console.log(result1);
console.log(result2);
