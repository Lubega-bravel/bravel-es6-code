/*for of loop */
//This iterates over an iterable object because iterable is an object
//whose iterble properties are iterated.
//Exp1
// let marks = [70, 45, 67, 32];

// for ( let mark of marks ) {
// mark =mark + 15;
// console.log(mark);
// }

//Exp2
//To access the index of the array elements inside the loop,you can use
//the for...of statement with the entries() method of an array.

// let names = ['bravel','andrew','ronald','rose'];

// for (const [index, name] of names.entries()) {
//     console.log(`${name} is at index ${index}`);
// }

//Exp3 
let aggregates = [
    {user: 'lowrence',score: 14},
    {user: 'robert',score: 34},
    {user: 'harriet',score: 23},
    {user: 'steven',score: 22},
    {user: 'mathew',score: 9},
];
let sum = 0;
for (let {score} of aggregates) {
    sum += aggregates
}
console.log(`Total scores: ${sum}`);