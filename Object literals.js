/*Object literals */
//This is to assign an empty object to avariable.
//Exp.1
// const myPhone = {
//  make :'sumsung',
// mode :'s8+',
// year :'1967',
//  };
// console.log(myPhone)
// //Computed property name
// //Here we can use square ([]) because they allow you to use the stringliterals and variables as the property names
//Exp2
// let name ='machine name';
// let machine = {
// [name]: 'server',
// 'machine hours':10000
// };
// console.log(machine[name]);

/*CONCISE METHOD SYNTAX */
//Here you need to specify the name and full definition
//Exp
let server = {
    name: "server",
    restart: function () {
        console.log("The" + this.name + "is restarting...");
    },
    'starting up'() {
        console.log("the" +this.name + "is starting up!");
    }
};
server['starting up']();
    
