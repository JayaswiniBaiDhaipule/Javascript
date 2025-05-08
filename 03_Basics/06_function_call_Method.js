// call() --- The call() method is a predefined JavaScript method.
//        --- It can be used to invoke (call) a method with an object as anargument (parameter).


const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
 console.log(person.fullName.call(person1));

  // This will return "Mary Doe"
  console.log(person.fullName.call(person2));
  

// The call() Method with Arguments
// The call() method can accept arguments:

// Example

const persons = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const persons1 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(persons.fullName.call(persons1, "Oslo", "Norway"));