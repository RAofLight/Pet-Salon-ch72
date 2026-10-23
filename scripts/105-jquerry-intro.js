// JavaScript -> Vanilla
function sayHello(){
    alert("Hola");
}

// jQuerry Approach
// select            .action
$("#triggerEventBtn").click(function(){
    alert("Hola!");
});

$("#hideP").click(function(){
    $("p").hide();
});

$("#showP").click(function(){
    $("p").show();
});

$("#toggleP").click(function(){
    $("p").toggle();
});

// innerHTML -> html
// textContent -> text
$("#changeText").click(function(){
    $("p").html("<i> Hello class! This is the new text. </i>");
});

$("#applyCSS").click(function(){
    $("p").css("color", "red")
          .css("border", "1px solid black")
          .css("padding", "10px");
});

$("#applyCSSClass").click(function(){
    $("p").addClass("my-class");
});