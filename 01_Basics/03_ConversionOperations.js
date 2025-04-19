let score = 456
console.log(typeof score);
console.log(typeof(score));

let scores = "456abc"
console.log(typeof scores);
console.log(typeof(scores));

let value = Number(scores);
console.log(typeof value);
console.log(value);


// "33 => 33"
// "33and" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// *********************** Operations ***********************

let value1 = 3
let negValue = -value1
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
