"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let x1 = 16 + "Volvo";
console.log(x1);  //16Volvo  
let x2 = "Volvo" + 16;
console.log(x2); //Volvo16

let x3 = 16 + 4 + "Volvo";
console.log(x2);//20Volvo

let x4 = "Volvo" + 16 + 4;
console.log(x4); //Volvo164

let x5 = 5;
let y5 = 5;
let z5 = 6;
console.log(x5 == y5);      // Returns true
console.log(x5 == z5);  // Returns false