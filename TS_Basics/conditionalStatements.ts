// If Block
/*
Syntax: 
if (condition) 
{ 
code to execute if condition is true 
}
*/

// let myAge10 = 10;
// if(myAge10>=18){
//     console.log("You are an adult.");
// }

// If-Else Block
/*
Syntax: 
if (condition) 
{ 
code to execute if condition is true 
}
else
{
    code to execute if condition is false
}
*/

let myAge10 = 10;
if(myAge10>=18){
    console.log("You are an adult.");
}
else {
    console.log("You are not an adult.");
}   

// If-Else-If Block
/*
Syntax: 
if (condition) 
{ 
code to execute if condition is true 
}
else if (anotherCondition)
{
    code to execute if another condition is true
}
    else if (anotherCondition)
{
    code to execute if another condition is true
}
else
{
    code to execute if none of the conditions are true
}   
*/

let grade = 40;
if (grade >= 90) {
    console.log("You got an A.");
}
else if (grade >= 80 && grade < 90) {
    console.log("You got a B.");
}
else if (grade >= 70 && grade < 80) {
    console.log("You got a C.");
}
else if (grade >= 60 && grade < 70) {
    console.log("You got a D.");
}
else {
    console.log("You got an E.");
}


// Nested If Block
/*Syntax: 
if (condition)
{
    if (anotherCondition) {
        code to execute if both conditions are true
    }
}
    else {
        code to execute if the first condition is false
    }
*/

let gradeNested = 85;
if (gradeNested >= 60) {
    console.log("You passed the exam.");
    if (gradeNested >= 80) {
        console.log("You did well.");
    }
}
else {  
    console.log("You failed the exam.");
}