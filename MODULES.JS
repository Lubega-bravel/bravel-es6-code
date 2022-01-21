//modules
//modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one;
//export: keyword lebels varriables and functions that should be accessible from outside the current module.
//import: allows the import of functionality from other modules
//example 1 sayHi.js
export function sayHi(user) {
    alert('hello, ${user}!');
}

//example main.js
import {sayHi} from './sayHi.js';

alert(sayHi);
sayHi('john');

//CLASS: These are a template for creating objects
//note: one way to define a class is using a 