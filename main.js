//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function display() {
    const person3 = {
        pizza:["Deep Dish","South Side Thin Crust"],
        tacos:"Anything not from Taco bell",
        burgers:"Portillos Burgers",
        ice_cream:["Chocolate","Vanilla","Oreo"],
        shakes:[{
            oberwise:"Chocolate",
            dunkin:"Vanilla",
            culvers:"All of them",
            mcDonalds:"Sham-rock-shake",
            cupids_candies:"Chocolate Malt"
        }]
    }
    for(const [key, value] of Object.entries(person3)) {
        console.log(value)
    }
}
console.log(display())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor (name, age) {
    this.name = name;
    this.age  = age;

    this.ageUp = function ageUp() {
        this.age++;
    };

    this.ageUp2 = function ageUp() {
        this.age = age + 3
    }

    this.printInfo = function printInfo() {
        console.log(this.name + " is " + this.age + " years old");
    };
}}

let wade = new Person('Wade', 32);
let val = new Person('Val', 21)
wade.printInfo();
wade.ageUp();
wade.printInfo();
val.printInfo();
val.ageUp2();
val.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const strLength = (string) => {
    return new Promise((resolve, reject)=>{
        if (string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

strLength(' I like to eat chicken wings and pizza').then((result)=>{
  console.log("Big word")
})

.catch((error)=>{
    console.log("Small number")
  })