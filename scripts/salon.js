// Object Literal //

let salon = {
    name: "Paws-n-Treats",
    hours: "10am - 8pm",
    phone: 3236269114,
    address: "963 N Crescent Heights Dr, West Hollywood, CA 90036"
};

console.log(salon.name);
console.log(salon.hours);
console.log(salon.phone);
console.log(salon.address);

function displaySalonInfo(){
    console.log(``);

    let p = document.getElementById("aboutUS");
    aboutUs.innerHTML = `Namaste and welcome to ${salon.name}, your pets Oasis! We are loctated at 
    ${salon.address}.  Our hours of operation are from ${salon.hours}.  Reserve your pets treatment today, call and book now at ${salon.phone}.`;
};

displaySalonInfo();