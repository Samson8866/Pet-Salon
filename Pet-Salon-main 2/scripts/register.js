let pets=[];//empty array

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"92154"
    }
}
//object constructor
function Pet(name,age,gender,breed,service,petType){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.servive=service;
    this.petType=petType;
}

//validation
function isValid(pet){
    let validation =true;
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");

    if(pet.name==""){
        validation=false;
        inputName.classList.add("error");
    }

    if(pet.age==""){
        validation=false;
        inputAge.classList.add("error");
    }

    return validation
}

//delete function
function deletePet(){
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayPet();
    displayInfo();
}


//add breed and service
//register function

//register function
function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputPetType=document.getElementById("txtPetType").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputPetType);

    //create the object
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputPetType);

    //check validations
    if(isValid(newPet) == true) {
         //push the obj to the array
    pets.push(newPet);
    //clear an input: document.getElementById("txtName").value="";
    //display the obj on the console
    console.log(pets);
    displayPet();

    clearForm();
    //clear an input document.getElementById("txtName").value="";
    
    }



    function clearForm(){
        document.getElementById("txtName").value="";
        document.getElementById("txtAge").value="";
        document.getElementById("txtGender").value="";
        document.getElementById("txtBreed").value="";
        document.getElementById("txtService").value="";
        document.getElementById("txtPetType").value="";

    }
    
    //display the obj on the console
    console.log(pets);
}
//validation function

function init(){
    //execution code should be inside of this function
    let pet1 = new Pet("Scooby",99,"Male","retriever","groomm");//creating an obj
    //create two more pets
    let pet2 = new Pet("Scrappy",5,"Male","German Shepard","dog spa");
    let pet3 = new Pet("Midnight",8,"Female","Pitbull","Bath");
    pets.push(pet1,pet2,pet3);
    console.log(pet1,pet2,pet3);

    displayPet();
}

function registeredPets(){
$("#btnRegister").on('click', register);
}

window.onload=init;//wait to render the HTML


