// function decleration

function functionName(parameters) {
    // code to be executed
  }

//   example
function myFunction(a, b) {
    return a * b;
  }
let mul = myFunction(2,5);
console.log(mul);


// Function Expressions
const x2 = function (a, b) {return a * b};


const x1 = function (a, b) {return a * b};
let z = x1(4, 3);

// The Function() Constructor 


const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);


// Self-Invoking Functions

(function () {
    let x = "Hello!!";  // I will invoke myself
  })();

//   toString()

function myFunction(a, b) {
    return a * b;
  }
  
  let text = myFunction.toString();
  console.log(text);
  