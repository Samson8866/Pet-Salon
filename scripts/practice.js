var globalVariable = "I am in global scope";

function myfunction(){
    var  localVariable = "I am in local scope"
    //this fn can access to the globalVariable
    console.log(globalVariable);
    if(true){
        let blockVariable ="I am in a block scope"
        //this is limited to the block
        console.log(blockVariable)
    }
    //this is limited to the fn
    console.log(localVariable);
}

myfunction();

//name,age,gender
let student1 ={
    name: "Samson",
    age:36,
    gender:"Male"
}
console.log(student1)

//car,make,model,year,color
let car1 ={
    car: "Sedan",
    make: "infiniti",
    model: "Q50",
    year:2019,
    color: "white"
}
console.log(car1);