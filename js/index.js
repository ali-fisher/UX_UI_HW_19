console.log("Your index.js file is loaded correctly!");

$(".myButton").on("click", function(){
    $(".content").fadeToggle("slow");
    console.log("You clicked on button")
});