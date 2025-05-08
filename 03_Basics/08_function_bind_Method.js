// bind() -- With the bind() method, an object can borrow a method from another object.


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());

// Sometimes the bind() method has to be used to prevent losing this.

const persons = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = this.firstName + " " + this.lastName;
      return x;
    }
  }
  
console.log(persons.display());
