// 1
// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum.length);  //3 i.e length is calculated for non intialize variable
// 2
// function sum(a,b=2,c){
//     return a+b+c;
// }

// console.log(sum.length);  //1 i.e length is calculated for non intialize variable 
// 3
// function sum(a,b,c=2){
//     return a+b+c;
// }

// console.log(sum.length);  //2

// 4 .destructuring default value

// const {a = 10} = {a : undefined};
// console.log(a);  //10


// const {a = 10} = {a : null};
// console.log(a);  //null, "",0,false.NaN

// 5.this in arrow function

// const obj = {
//     name: 'Pankaj',
//     greet:() => {
//         console.log(`Hello, ${this.name}`);  
//     }
// };

// obj.greet(); //Hello, undefined

// const obj = {
//     name: 'Pankaj',
//     greet() {
//         console.log(`Hello, ${this.name}`);  
//     }
// };

// obj.greet(); //Hello, Pankaj

// 6. Closure in loop

// for(var i=0;i<3;i++){
//     setTimeout(() => console.log(i),1000);    //3 3 3
// }

// var is function scope , all three call backs is going to point the same i value at the end

// for(let i=0;i<3;i++){
//     setTimeout(() => console.log(i),1000);   //0 1 2
// }

// let is a block value

// 7. hoisting

// console.log(a);
// var a = 5; //undefined

// 8. Logical (&& ||) short-circuit

console.log(0 && 'Pankaj');  //0 &&-> first falsy value

console.log(0 || 'Pankaj'); //Pankaj || -> first truety value

// 9.Implicit type conversion

console.log('5' - 2);
console.log('5' + 2);

console.log(+'5' + 2);

console.log(+'5' + 2 + true);


