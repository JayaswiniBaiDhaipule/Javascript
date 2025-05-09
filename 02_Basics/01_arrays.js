// array

const myArr = [0, 1, 2, 3, 4, 5]

// length - returns the length (size) of an array
console.log(myArr.length);

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array methods

// push() - The push() method adds a new element to an array (at the end):

myArr.push(6)
myArr.push(7)

// pop() - The pop() method removes the last element from an array
myArr.pop()

console.log(myArr);

// shift() - The shift() method removes the first array element and "shifts" all other elements to a lower index.
myArr.shift()

console.log(myArr);

// unshift() - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
myArr.unshift(9)

console.log(myArr);



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

//String - converts an array to a string of (comma separated) array values
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.toString();
console.log(fruit);

// join() - The join() method also joins all array elements into a string
let join = fruits.join(" * ");
console.log(join);

// concat() - 

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

fruits.copyWithin(2, 0);
console.log(fruits);
