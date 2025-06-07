// Declare an array

// Way 1
// Array Litreal Syntax
// let variableName:datatype[] = [element1, element2, element3, ...];
let fruits:string[] = ['Apple', 'Banana', 'Cherry'];

// Way 2
// Using the Array constructor
// Syntax: let variableName: datatype[] = new Array(element1, element2, element3, ...);
let vegetables: string[] = new Array('Carrot', 'Broccoli', 'Spinach');
console.log(fruits);
fruits[2] = 'Orange'; // Update the third element
console.log(fruits);

// Array Methods
// 1. push() - Adds one or more elements to the end of an array
fruits.push('Mango','Pineapple');
console.log(fruits);

// 2. pop() - Removes the last element from an array and returns it
fruits.pop();
console.log(fruits);

// 3. unshift() - Adds one or more elements to the beginning of an array
fruits.unshift('Strawberry');
console.log(fruits);

// 4. shift() - Removes the first element from an array and returns it
fruits.shift();
console.log(fruits);

// 5. slice() - Returns a shallow copy of a portion of an array into a new array object
let citrusFruits = fruits.slice(1, 3); // Gets elements from index 1 to 2 (3 is not included)
console.log(citrusFruits);

let numberArray: number[] = [1, 2, 3, 4, 5];
// 6. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
let multipliedArray = numberArray.map(num => num * 2);
console.log(multipliedArray);

// 7. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let greaterThanFive = multipliedArray.filter(num => num >5);
console.log(greaterThanFive);

// 8. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(numberArray);
numberArray.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
console.log(numberArray);