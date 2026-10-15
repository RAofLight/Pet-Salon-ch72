// Object Literal

let pet1 = {
    name: "Apollo",
    age: 3,
    gender: "male",
    service: "Pizzazz Package",
    breed: "Brussels Griffon"
}

console.log(pet1.name);
console.log(pet1.age);
console.log(pet1.gender);
console.log(pet1.service);
console.log(pet1.breed);

let pet2 = {
    name: "Egypt",
    age: 7,
    gender: "male",
    service: "Glow & Flow Package",
    breed: "Elf cat"
}

console.log(pet2.name);
console.log(pet2.age);
console.log(pet2.gender);
console.log(pet2.service);
console.log(pet2.breed);

let pet3 = {
    name: "Brooklyn",
    age: 1,
    gender: "female",
    service: "Pamper Package",
    breed: "Frech Bulldog"
}

console.log(pet3.name);
console.log(pet3.age);
console.log(pet3.gender);
console.log(pet3.service);
console.log(pet3.breed);

function displayPets(){
    console.log(`${pet1.name}`);
}

    let li = document.getElementById("petNames");
li.innerHTML = `<li>${pet1.name}</li><li>${pet2.name}</li><li>${pet3.name}</li>`;
