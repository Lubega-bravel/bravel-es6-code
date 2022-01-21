/*inheritance */
//javascript inheritance using extends and super in es6
// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on' + this.legs + 'legs');
//     }
// } 
// class Bird extends Animal {
//     constructor(legs) {
//         super(legs);
//     }
//     fly() {
//         console.log('flying');
//     }
// }
// let bird = new Bird(2);
// //bird.walk();
// bird.fly(); 

//Exp2
// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
//     walk() {
//         super.walk();
//         console.log(`go walking`);
//     }
// }
// let bingo = new Dog();
// bingo.walk(); 

// //Inheriting static members
 class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on' + this.legs + 'legs');
    }
    static helloworld() {
        console.log('hello world');
    }
}
class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}
Bird.helloworld()











