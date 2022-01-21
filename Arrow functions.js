/*ARR0W FUNCTIONS*/ 
//Es6 arrow function provide you with an alternativeway to write a shorter syntax compared to the function expression.
let add = function (x,y) {
  return x + y;
};
console.log(add(10, 80));

//OR
let add = (x,y) => {x + y;}
console.log(add(30, 70));
console.log(typeof add);
console.log(add instanceof Function);


//JAVASCRIPT ARROW FUNCTIONS WITH MULYIPLE PARAMETERS  
    //For example, to sort an array of numbers inthe descending order,you can the sort()method of the array object.
    let number = [4,2,6];
    number.sort(function(a,b){
      return b-a;
})          
    console.log(number)

    //js arrows functions with a single parameter
    // syntax is (p1) => {statements}
    //exampl  Use an arraw function as an argument of the map() method that transforms an array of strings into an array of the strings length.
    // let names = ['ronald','bravel','mac','peter'];
    // let lengths =names.map(names => names.length);
    // console.log(lengths)

    //javascript arrow functions and object literals
    // let setColor = function (color) {
    //   return {value: color}
    // };
    // let backgroundColor = setColor('red');
    // console.log(backgroundColor.value);
    // //or
    // let setColor = color => ({value: color});