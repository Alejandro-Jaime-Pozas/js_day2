console.log('hello from object creation')


/* 
    JS object and prototypes
*/


let person = {
    name: 'Tom',
    age: 23,
    color: 'purple',
};
console.log(person);


// bracket notation
console.log(person['name']);
// dot notation
console.log(person.color);

let person2 = {
    name: 'Sam',
    age: 30,
    languages: ['JS', 'Python'],
    teams: {
        mlb: 'nationals',
        nfl: 'commanders',
    }
};
console.log(person2.teams.nfl);

// we can use array methods for array within object (dict)
person2.languages.forEach(l => console.log(l));

let person3 = {
    name: 'Jeeves',
    sayHello: function(){
        console.log('Hello')
        console.log(`Hello my name is ${this.name}`)
    }
};
console.log(person3.sayHello);

// you can put fns inside objects and then call the functions as follows
person3.sayHello();

console.clear()



//  JavaScript Object Instantiation -> Class Instantiation

// let animal = {}; // creating an empty object (dict)
// animal.name = 'buddy';
// animal.energy = 10;

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// };
// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// };
// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// };

// console.log(animal)

// animal.eat(10);
// animal.sleep(10);
// animal.play(25);
// console.log(animal);



// Function Instantiation ////////////////////

// function Animal(name, energy=10){
//     let animal = {}; // creating an empty object (dict)
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     };
//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     };
//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     };

//     return animal
// };

// let buddy = Animal("Buddy");
// buddy.eat(10);
// buddy.play(15);

// let leo = Animal("Buddy");
// leo.eat(25);
// leo.play(15);

// console.log(buddy);
// console.log(leo);


// Function Instantiation with Shared Methods ////////////////////

// const animalMethods = {
//     eat: function(amount){ 
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }
// };


// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = animalMethods.eat

//     animal.sleep = animalMethods.sleep

//     animal.play = animalMethods.play

//     return animal
// };


// let buddy = Animal("Buddy");
// buddy.eat(10);
// buddy.play(15);

// let leo = Animal("Buddy");
// leo.eat(25);
// leo.play(15);

// console.log(buddy);
// console.log(leo);



// // Object.create()

// let parent = {
//     first: 'Margaret',
//     last: "O'Reilly",
//     heritage: "Irish"
// };

// console.log(parent.first);
// console.log(parent.last);
// console.log(parent.heritage);

// let child = Object.create(parent); // this creates an object with parent passed in, inherits from parent
// child.first = 'Seamus';
// console.log(child);
// console.log(child.first);
// console.log(child.last);
// console.log(child.heritage);

// let parentObj = {
//     name: 'Hughie',
//     getInfo: function(){console.log(`Hello ${this.name}`)}
// };


// let childObj = Object.create(parentObj);

// childObj.name = 'William';



// Function Instantiation with Shared Methods ////////////////////

// const animalMethods = {
//     eat: function(amount){ 
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }
// };


// function Animal(name, energy=10){
//     let animal = Object.create(animalMethods); // this creates an object with the animalMethods as a parent (inherited by this, the child)
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// };


// let buddy = Animal("Buddy");
// buddy.eat(35);
// buddy.play(15);

// let leo = Animal("Buddy");
// leo.eat(65);
// leo.play(15);

// console.log(buddy);
// console.log(leo);




// Function prototype
function doNothing(){};
console.log(doNothing.prototype); // this is an object, just has constructor in it
console.log(typeof doNothing.prototype); // 



// Prototypal Instantiation ///////////////////////////////

// YOU CAN GET RID OF CONST ANIMALMETHODS AND JUST DO PROTOTYPE FROM MAIN FUNCTION

// const animalMethods = {
//     eat: function(amount){ 
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }
// };


// function Animal(name, energy=10){
//     let animal = Object.create(Animal.prototype); // this creates an object with the animalMethods as a parent (inherited by this, the child)
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// };

// Animal.prototype.eat = function(amount){ 
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// }


// let buddy = Animal("Buddy");
// buddy.eat(35);
// buddy.play(15);

// let leo = Animal("Buddy");
// leo.eat(65);
// leo.play(15);

// console.log(buddy);
// console.log(leo);


// Pseudoclassical Instantiation //////////////////

// function Animal(name, energy=10){
//     // let animal = Object.create(Animal.prototype); // this creates an object with the animalMethods as a parent (inherited by this, the child)
//     this.name = name; // change variable object name to 'this' (i.e. animal to this)
//     this.energy = energy;

//     // return animal
// };

// Animal.prototype.eat = function(amount){ 
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// }


// let buddy = new Animal("Buddy"); // new Animal uses the 'this' property to get results
// buddy.eat(35);
// buddy.play(15);

// let leo = new Animal("Buddy");
// leo.eat(65);
// leo.play(15);

// console.log(buddy);
// console.log(leo);



// ECMAScript 2015 - class keyword ////////////////////

class Animal{ // remove function ()...
    constructor(name, energy=10){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){ 
        this.energy += amount;
        console.log(`${this.name} is eating and energy is now ${this.energy}`)
    }

    sleep(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
    }

    play(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing and energy is now ${this.energy}`)
    }
};

let buddy = new Animal("Buddy"); // new Animal uses the 'this' property to get results
buddy.eat(35);
buddy.play(15);

let leo = new Animal("Leo", 20);
leo.eat(65);
leo.play(15);

console.log(buddy);
console.log(leo);