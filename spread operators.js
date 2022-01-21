/*Spread operators */
//This allows you to spread out elements of an iterable objects such as arrays, a mapand have thre dots(...).
//note; spread operators unpacks the elements of the odd arrays.
const odd = [1,3,5];
const combined = [2,4,6,...odd];
console.log(combined);

//Exp2
function f(a, b, ...args){
    console.log(args);
}
f(1,2,3,4,5,6);
//note:Es6 also the three dots(...) which is arest parameter that 
//collects all remaining arguments of a functioninto an array

//Exp3 USING SPREAD OPERATORS AND APPLY() METHOD
//Here to pass array of two numbers to the compare() function, you often use the apply( method).
function compare(a,b) {
    return a-b;
}
var result = compare.apply(null, [1,4]);
console.log(result)

//Exp4
var animals = ['cow','goats','dog'];
var moreAnimals = ['lion','hen'];

Array.prototype.push.apply(animals,moreAnimals);
console.log(animals)

//Exp 5
let scores = [56,78,67, 89];
let copiedScores = [...scores]
console.log(copiedScores)