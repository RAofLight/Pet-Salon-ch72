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

displayPets();

// Object Constructor

function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

let pet4 = new Pet("Daphne", 2, "Yorkie", "female", "Style Package");

let pet5 = new Pet("Isis", 5, "Sphinx Cat", "female", "Shine Package");

let pet6 = new Pet("Dynamite", 4, "Golden Doodle", "male", "Fluff Package");


// Table

function registerPet(event){
    event.preventDefault();


let petName = document.getElementById("petName").value;
let petAge = document.getElementById("petAge").value;
let petBreed = document.getElementById("petBreed").value;
let petGender = document.getElementById("petGender").value;
let petService = document.getElementById("petService").value;

let pet = new Pet(petName, petAge, petBreed, petGender, petService);

 let row = document.createElement("tr");
    row.innerHTML =`
        <td>${pet.name}</td>
        <td>${pet.age}</td> 
        <td>${pet.breed}</td>
        <td>${pet.gender}</td>
        <td>${pet.service}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button></td>
    `;

    let body = document.getElementById("body");
    body.appendChild(row);

    // Delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function(){

        let confirmation = confirm("Are you sure you want to delete this row?");

        if(confirmation){
        row.remove();
        }

        
    });

    // Clear the fields
    document.getElementById("petName").value = "";
    document.getElementById("petAge").value = "";
    document.getElementById("petBreed").value = "";
    document.getElementById("petGender").value = "";
    document.getElementById("petService").value = "";

}
