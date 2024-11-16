let pets=[];//empty array

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"92154"
    }
}

//creating the pets
let pet1={
    name:"Scooby",
    age:4,
    gender:"Male",
    service:"Wash",
    breed:"Golden Retriever" 
}

let pet2={
    name:"Scrappy",
    age:2,
    gender:"Male",
    Service:"Hair cut",
    breed:"Golden Doodle" 
}

let pet3={
    name:"Midnight",
    age:8,
    gender:"Female",
    Service:"Dog Spa",
    breed:"Pitbull" 
}
//push objects into the array
pets.push(pet1,pet2,pet3);
console.log(pets);
console.log("We have " + pets.length + " pets");

function displayPetNames(){   
console.log(pets[0].name);
console.log(pets[1].name);
console.log(pets[2].name);
console.log("We have " + pets.length + " pets");
}
displayPetNames()


const names = ["Scooby", "Scrappy", "Midnight"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}    
const displayNames = document.querySelector("#display-names");
for (let i = 0; i < names.length; i++) {
    displayNames.innerHTML += `<h1>${names[i]}</h1>`
    
}    