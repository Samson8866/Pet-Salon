console.log("Welcome to jQuery");

/*
JS vs jQuery

js......document.getElementByID("results")
jQuery.....$("#result")

js.....document.getElementByTagName("p");
jQuery.....$("p");

js.....documentgetElementByClassName("text");
jQuery....$(".text");
*/

//ID Selectors
//let redParagraph =document.getElementById("red");
let redParagraph = $("#red").css("background", "red").css("color", "white");
console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue")
.css("background", "blue")
.css("color", "white")

//Class Selectors
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border", "5px dashed yellow");

myParagraphWithBorder.click(function(){
    console.log("clicked");


$(this).addClass("bg-gray");
});

//Tag Selectors
let paragraph = $("p");
paragraph.css("cursor", "pointer");

//simple and common function
function register(){
    console.log("Registering Function");

    let testEntry = $("#testInput").val();
    $("#results").append(`<li>${testEntry}</li>`);
    $("#testInput").val(""); //clear input

    //testEntry.val() = ""
}

//Events
$("#btnRegister").on("click", register)

function clickMe() {
    console.log("ClickMe btn");
    $("p:first").hide();
    $("p:last").css("border", "5px solid skyblue")
}
 $("#newBtn").on("click", clickMe);

 //ANIMATIONS
 function showName(){
    $("#user-name").slideDown();
 }

 function hideName(){
    $("#user-name").slideUp();
 }