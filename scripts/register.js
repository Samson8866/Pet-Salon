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
let pet4={
    name:"Sylus",
    age:3,
    gender:"Male",
    Service:"Vaccine",
    breed:"Doodle" 
}


//push objects into the array
pets.push(pet1,pet2,pet3,pet4);

function displayPetNames(){   
    for(let i=0;i<4;i++){
    document.getElementById("petList").innerHTML+= `<li> ${pets[i].name} </li>`;
    }
document.getElementById("petList").innerHTML+= "We have " + pets.length + " pets";
}
displayPetNames()