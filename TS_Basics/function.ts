// Basic Function
/*
Syntax:
function functionName() {
    // function body
}
*/

function greet() {
    console.log("Hello, Students!");
}

greet(); // Calling the function


// Function with Parameters
/*Syntax:
function functionName(parameter1, parameter2) {
    // function body
}
*/

function greetWithParameters(name:string) {
    console.log("Hello " +name);
}

greetWithParameters("Evgeniya");
greetWithParameters("Rahul");
greetWithParameters("Divya");
greetWithParameters("Manasa");

// Function with Return Value
/*Syntax:
function functionName(parameter1, parameter2) {
    // function body
    return value;
}
*/ 

function addNumbers(a:number, b:number):number{
   return a + b;
}

console.log("Sum is: " + addNumbers(1, 2));

// Function with Default and optional Parameters
/*Syntax:
function functionName(parameter1 = defaultValue, parameter2?: optionalValue) {
    // function body
}
*/
function greetWithDefault(name:string = "Guest", age?:number) {
    if (age) {
        console.log(`Hello ${name} you are ${age} years old.`);
        // console.log('Hello ' + name + ', you are ' + age + ' years old.');
    } else {
        console.log(`Hello ${name}`);
    }
}

greetWithDefault(); // No parameters
greetWithDefault("Evgeniya"); // Only name
greetWithDefault("Rahul", 25); // Name and age

// Arrow Function
/*Syntax:
const functionName = (parameter1, parameter2) => {
    // function body
}
*/
const greetArrow = (name: string) => {
    console.log("Hello " + name);
}

// function greetArrow2(name: string){
// console.log("Hello " + name);
// }

// function addNumbers(a:number, b:number):number{
//    return a + b;
// }
const sumArrow = (a:number, b:number):number=> a + b;
// const sumArrow = (a:number, b:number):number=> {
//     return a + b
// };

type mathOperation = (a: number, b: number) => number;
const add:mathOperation = (a,b) => a + b;
const subtract:mathOperation = (a,b) => a - b;
const multiply:mathOperation = (a,b) => a * b;
const divide:mathOperation = (a,b) => a / b;