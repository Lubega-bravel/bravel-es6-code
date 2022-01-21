/*Destructuring assignment */
//This allows you to destructure of an object or elements of 
// an array into individual variables
//exap1 of ARRAY DESTRUCTURING 
// function getScores() {
//     return [25, 78 ,56,89]
// }
// let scores = getScores();
// let [bravel, emma, john, moses] = scores;

// //console.log(moses);
// console.log(bravel);

// //Exp2 using array destructuring assignment and rest syntax
// /let personalDetails = {
//     personName: "Ronald",
//     country: "uganda",
//     job: "developer",
//     email: "ron01@gmail.com"
// }

// let {personName, country, job, email} = personalDetails
// console.log(personName)
// console.log(country)
// console.log(job)
// console.log(email)


// //let {personName, country, job, email} = personalDetails
// //console.log(personName)
// //console.log(country)
// //console.log(job)
//console.log(email)
  //Exp2
//   /let personalDetails = {
//     personName: "Ronald",
//     country: "uganda",
//     job: "developer",
//     email: "ron01@gmail.com"
// }

// let {personName, country, job, email} = personalDetails
// console.log(personName)
// console.log(country)
// console.log(job)
// console.log(email)


//Exp4
//Nested array destructuring
//function returns an array that contains an element which is another array
function getProfile() {
    return[
        'bravel',
        'paddy',
        ['Red','green','black']
    ];
}
let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3,
    ]
] = getProfile();

console.log(color1,color2,color3);
