// Object
// Syntax object literal
// let variableName = { property1: value1, property2: value2, ... };

let person = {
    nameOfPerson: 'John Doe',
    age: 30,
    isEmployed: true,
}

console.log(person.age); // Accessing property using dot notation

let person2:{name:string,age:number,isEmployed:boolean};

person2 = {
    name: 'Jane Smith',
    age: 28,
    isEmployed: false,
};

type studentDetails = {
    age: number;
    isEmployed: boolean;
    city?: string;
    ishappy:boolean
}

let evgeniya: studentDetails = {
    age: 20,
    isEmployed: true,
    ishappy: true,
}

let divya = {
    age: 20,
    isEmployed: true,
    city: 'New York',
}
