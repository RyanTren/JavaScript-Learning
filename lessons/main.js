
// variables and data types
// variables are containers for storing data values
// variables are declared with the var keyword

let name = "John"; // String
let age = 30; // Number
let isAdult = true; // Boolean

// Control Flow statements: if, else, switch, for, while, and do while.
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Loops: JavaScript supports different types of loops such as for, while, and do while.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Arrays: JavaScript arrays are used to store multiple values in a single variable.
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // "Apple"

// Classes: JavaScript is a prototype-based language, but it also supports the concept of classes.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, " + this.name;
    }
}

// Functions
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("John")); // "Hello, John"

// Objects: JavaScript is an object-oriented language and uses objects to store collections of data.
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, " + this.name;
    }
};
console.log(person.greet()); // "Hello, John"



