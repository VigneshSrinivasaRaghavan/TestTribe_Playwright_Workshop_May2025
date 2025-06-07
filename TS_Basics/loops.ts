// For loop
/* Syntax:
for (initialization; condition; increment/decrement) {
    // code to execute
}
*/
// for(let i=1;i<=10;i++)
// {
//     console.log(i) ;
// }

// While loop
/* Syntax:
while (condition) {
    // code to execute
}
*/
// let j = 10;
// while (j >= 1) {
//     console.log(j);
//     j--;
// }

// Loop Control Statements
// 1. Break statement
for(let i=1;i<=10;i++)
{
    if(i===5){
        break; // Exits the loop when i is 5
    }
    console.log(i) ;
}

console.log("=============")

// 2. Continue statement
for(let i=1;i<=10;i++)
{
    if(i===5){
        continue; // Skips the current iteration when i is 5
    }
    console.log(i) ;
}