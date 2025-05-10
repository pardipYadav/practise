const sayHello1 = () => {
  console.log("hello world");
};

sayHello1();

const sayHello2 = () => console.log("new hello world");
sayHello2();

const sayHello3 = (username, age) => {
  console.log(`my username is ${username} and age is ${age}`);
};
sayHello3("simran", 25);

// Define an object named 'x'
const x = {
  // Property: username
  username: "simran",

  // Property: age
  age: 25,

  // Property: marriagewith
  marriagewith: "pardeep",

  // Method: program - a function inside the object
  program: function () {
    // Save the reference of 'this' in a variable 'that'
    // because inside setTimeout, 'this' will not refer to the object 'x'
    let that = this;

    // Call setTimeout to run a function after 2000ms (2 seconds)
    setTimeout(function () {
      // Inside this function, 'this' refers to the window/global object (not 'x')
      // So we use 'that' which still refers to object 'x'

      // Print a message using the properties of object 'x'
      console.log(
        `my name is ${that.username} and age ${that.age} and married with ${that.marriagewith}`
      );
    }, 2000);
  },
};

// Call the 'program' method of object 'x'
x.program();

// Define an object named 'y'
const y = {
  // Property: username
  username: "simran yadav",

  // Property: age
  age: 22,

  // Property: marriedWith
  marriedWith: "pardeep yadav",

  // Method: collabbe - a function inside the object
  collabbe: function () {
    // setTimeout is used to delay execution for 5 seconds (5000ms)
    // Arrow function used here keeps the 'this' value from the surrounding scope
    setTimeout(() => {
      // 'this' still refers to the object 'y' because arrow functions
      // do NOT change the 'this' context
      console.log(
        `my name is ${this.username} age is ${this.age} and married with ${this.marriedWith}`
      );
    }, 5000);
  },
};

// Call the 'collabbe' method of object 'y'
y.collabbe();
