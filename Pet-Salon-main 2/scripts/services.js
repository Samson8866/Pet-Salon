let inputDescription =$("#txtDescription");
let inputPrice = $("#txtPrice");

//constructor Service
function Service(description, price){
    this.description=description;
    this.price=price;
}

//validations
function validService(service){
    let isValidDescription = true;
    let isValidPrice = true;

    if(service.description ==""){
        isValidDescription = false;
        $("#txtDescription").addClass("error");
        $("#descRequiredText").show();
    }else{
        isValidDescription = true;
        $("#txtDescription").removeClass("error");
        $("#descRequiredText").hide();
    }


//service.price validation

return isValidDescription && isValidPrice;
}

function register(){
    let newService = new Service(inputDescription.val(),inputPrice.val());//the new obj
    if(validService(newService)){
      save(newService);
        $("input").val(""); // clear the form
    }
}


function init(){
    //hook events
    $("#btnRegister").on('click', register);
}



window.onload = init;