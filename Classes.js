/*CLASSES*/
//These are syntatic sugar over the prototypal inheritence.So in the other words,es6 class are just special functions.
//EXp1
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let name = new Person("Bravel Ronald");
//console.log(name);
//console.log(typeof Person);
//console.log(bravel instanceof Person);
console.log(bravel instanceof Object);