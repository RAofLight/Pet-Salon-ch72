// Primitive / Basic
let name = "Ryan Anthony";
let age = 43;
let isStudent = true;

let name2 = "Shanee";
let age2 = 20;
let isStudent2 = true;

// Non-Primitive / Advanvce (Complex)
// Object Literal
let student1 = {
    name: "Ryan Anthony",
    age: 43,
    isStudent: true
};

// 1. Access to the values ->
// objectName.property
student1.age

console.log(student1.age);
console.log(student1.name);
console.log(student1.isStudent);

// Exercise:
// Create 2 more objects literal -> student2, student3
// Print their name, age, and status (isStudent)

let student2 = {
    name: "Talya Rae",
    age: 36,
    isStudent: false
};

console.log(student2.name);
console.log(student2.age);
console.log(student2.isStudent);

let student3 = {
    name: "Anthony",
    age: 42,
    isStudent: false
};

console.log(student3.name);
console.log(student3.age);
console.log(student3.isStudent);

// New Concept: Interpolation
console.log(`Hello my name is ${student1.name}, I am ${student1.age} years old `);

function displayPets(){
    let p = document.getElementById("paragraph")
    p.innerHTML = `Hello my name is ${student1.name}, I am ${student1.age} years old `;
}