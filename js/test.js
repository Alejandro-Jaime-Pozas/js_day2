function Animal(name, energy=10){
    // let animal = Object.create(Animal.prototype); // this creates an object with the animalMethods as a parent (inherited by this, the child)
    this.name = name; // change variable object name to 'this' (i.e. animal to this)
    this.energy = energy;

    // return animal
};

Animal.prototype.eat = function(amount){ 
    this.energy += amount;
    console.log(`${this.name} is eating and energy is now ${this.energy}`)
}

Animal.prototype.sleep = function(amount){
    this.energy += amount;
    console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
}

Animal.prototype.play = function(amount){
    this.energy -= amount;
    console.log(`${this.name} is playing and energy is now ${this.energy}`)
}


let buddy = new Animal("Buddy"); // new Animal uses the 'this' property to get results
buddy.eat(35);
buddy.play(15);

let leo = new Animal("Buddy");
leo.eat(65);
leo.play(15);

console.log(buddy);
console.log(leo);