// Invoking a Function as a Function

function myFunction(a, b) {
    return a * b;
  }
let mul = myFunction(10, 2); 
console.log(mul);

// Invoking a Function as a Method og Object

const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
let myName = myObject.fullName(); 
console.log(myName);

// Invoking a Function with the Constructor

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
console.log(myObj.firstName);