/*REST PARAMETERS*/
//This syntax allows functions to accept an indefinite number of arguments as an array, providing away to present
// function sum(...args){
/*example*/     
function show(...args){
    let sum = 0
for(let i of args){
    sum += i;
}
console.log("sum=" + sum);
}
show(10,20,30);