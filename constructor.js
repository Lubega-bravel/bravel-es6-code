// how to us a constructor function
//this is a function that creates an instance of a class which is
// typically called an object
class Bravel{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    getAge(){
        return this.age
    }
    
}
let newRony = new Bravel("Mic", 20);
console.log(newRony.getAge())