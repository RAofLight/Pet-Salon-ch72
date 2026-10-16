// 1. define the Array
let namesList = ["Fernanda", "Ryan Anthony", "Shanee", "Kydani", "Thai", "John"];
let gradesList = [8, 9, 10, 6, 7, 5];

// 2. Access to an item -> index
// arrayName[index] -> namesList[0] -> Fernanda
console.log(namesList[2]);
console.log(namesList[5]);

// 3. Travel the array -> for loop
console.log("-----for loop-----")


for(let i=0; i<namesList.length; i++){
    console.log(namesList[i]);
}

//==== Array of Objects===
let studentsList = [
{
    name: "Ryan Anthony",
    age: 43
},

{
    name: "Talya Rae",
    age: 36
},

{
    name: "Anthony",
    age: 42
}
];

// Console Log the First Student Name
console.log(studentsList[0].name);

// Console Log the Third Student Age
console.log(studentsList[2].age);

// Print this sentence with first student's information
// Hey, this is_____ and I am_____ years old.

console.log(`Hey, this is ${studentsList[0].name} and I am ${studentsList[0].age} years old`);

// Create an array called gamesList with 3 game objects.
// Each object shoud have a title, platform, and release year.
// Print the first games title.
// Print the second games platform.
// Print the third games title, platform, release year in one sentence.
// print the total number of games

let gamesList = [
    {
        title: "Marvel Strike Force",
        platform: "iPhone",
        year: 2018
    },

    {
        title: "Final Fantasy",
        platform: "Playstation",
        year: 2002
    },

    {
        title: "Mortal Kombat 11",
        platform: "xbox",
        year: 2022
    }
];

console.log(gamesList[0].title);
console.log(gamesList[1].platform);
console.log(`${gamesList[2].title}, ${gamesList[2].platform}, ${gamesList[2].year}`);
console.log(gamesList.length);

