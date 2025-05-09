const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

let text = "   Hello World!   ";
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());

let text1 = "Hello World!";
console.log(text1.repeat(2));

let text2 = "Please visit Microsoft!";
console.log(text2);

let newText = text2.replace("Microsoft", "W3Schools");
console.log(newText);

let text3 = "Please visit Microsoft!";
let newText3 = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText3);

console.log(text3.split(','));
