// let myName = "hitesh         "
// let myChannel = "chai          "

//  console.log(myName.trim().length)
// console.log(myName.truelength);

let myHeros = ["thor","spiderman"]


let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`)

}

heroPower.hitesh()

myHeros.hitesh()

myHeros.heyHitesh()

// heroPower.heyHitesh()

// Inheritance

const user = {
    name:"chai",
    email:"google.gamil"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode     "
String.prototype.trueLength = function(){
    console.log(`${this}`); //chaiaurcode
    //console.log(`${this.name}`); // undefined
    console.log(`True length is: ${this.trim().length} `);
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()