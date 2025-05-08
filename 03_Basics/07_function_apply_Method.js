// apply() --  write a method that can be used on different objects.

// The apply() method is similar to the call() method (previous chapter).

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
 console.log(person.fullName.apply(person1));

//  The Difference Between call() and apply()

// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array

const persons = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const persons1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(persons.fullName.apply(persons1, ["Oslo", "Norway"]));

  console.log(Math.max(1,2,3));
  console.log(Math.max.apply(null, [1,2,3]));
  console.log(Math.max.apply(Math, [1,2,3]));
  console.log(Math.max.apply(" ", [1,2,3]));
  console.log(Math.max.apply(0, [1,2,3])); // all Will also return 3
  
