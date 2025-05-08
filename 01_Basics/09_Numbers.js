// JavaScript has only one type of number. Numbers can be written with or without decimals.

/*let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

let x1 = 3.14;    // A number with decimals
let y1 = 3;       // A number without decimals

let x2 = 10;
let y2 = 20;
let z2 = x2 + y2;
console.log(z2);


let x3 = "10";
let y3 = "20";
let z3 = x3 + y3;
console.log(z3);

let x4 = 10;
let y4 = "20";
let z4 = x4 + y4;
console.log(z4);

let x5 = "10";
let y5 = 20;
let z5 = x5 + y5;
console.log(z5);

let x6 = 10;
let y6 = 20;
let z6 = "The result is: " + x6 + y6;
console.log(z6);

let x7 = 10;
let y7 = 20;
let z7 = "30";
let result = x7 + y7 + z7;
console.log(result);*/

// The JavaScript interpreter works from left to right.

// First 10 + 20 is added because x and y are both numbers.


// Then 30 + "30" is concatenated because z is a string

let x = 100;         // x is a number

let y = "100";       // y is a string


let x1 = "100";
let y1 = "10";
let z1 = x1 / y1;
console.log(z1);


let x2 = "100";
let y2 = "10";
let z2 = x2 * y2;
console.log(z2);


let x3 = "100";
let y3 = "10";
let z3 = x3 - y3;
console.log(z3);


let x4 = "100";
let y4 = "10";
let z4 = x4 + y4;
console.log(z4);



let x5 = 100 / "Apple";
console.log(x5);

console.log(isNaN(x5));


let x6 = NaN;
let y6 = 5;
let z6 = x6 + y6;
console.log(z6);



/*NaN is a number: typeof NaN returns number:

Example
typeof NaN;*/

/*Infinity is a number: typeof Infinity returns number.

Example
typeof Infinity;*/

let myNumber = 32;
console.log("Hexatrigesimal (base 36): " + myNumber.toString(36));
console.log("Duotrigesimal (base 32): " + myNumber.toString(32));
console.log("Hexadecimal (base 16): " + myNumber.toString(16));
console.log("Duodecimal (base 12): " + myNumber.toString(12));
console.log("Decimal (base 10): " + myNumber.toString(10));
console.log("Octal (base 8): " + myNumber.toString(8));
console.log("Binary (base 2): " + myNumber.toString(2));



console.log(myNumber);
