/*JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.*/

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value);
  
}

/*
JavaScript Array map()
-The map() method creates a new array by performing a function on each array element.

-The map() method does not execute the function for array elements without values.

-The map() method does not change the original array.*/

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

// Array flatMap() - The flatMap() method first maps all elements of an array and then creates a new array by flattening the array

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);


// Array filter() - The filter() method creates a new array with array elements that pass a test.

const number = [45, 4, 9, 16, 25];
const over18 = number.filter(myFunction);
console.log(over18);


function myFunction(value, index, array) {
  return value > 18;
}

// Array reduce()
/*The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. */

let sum = numbers.reduce(myFunction);
console.log(sum);


function myFunction(total, value, index, array) {
  return total + value;
}

/*Array reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. */


let sum1 = numbers.reduceRight(myFunction);
console.log(sum1);


function myFunction(total, value, index, array) {
  return total + value;
}

/* Array every() - The every() method checks if all array values pass a test.*/


let allOver18 = numbers.every(myFunction);
console.log(allOver18);


function myFunction(value, index, array) {
  return value > 18;
}

/*Array some() - The some() method checks if some array values pass a test.*/

let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.


console.log(Array.from("ABCDEFG"));

// Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
console.log(keys);


for (let x of keys) {
    let text = "";
  text += x + "<br>";
}

// Array Spread (...)
// The ... operator expands an iterable (like an array) into more elements:

// Example
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
