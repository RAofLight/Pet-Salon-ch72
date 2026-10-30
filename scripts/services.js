$("#registerService").click(function(event){

    event.preventDefault();


    // 1. Get the values -> .val();
    // Get the input fields values using jQuerry -> $("") -> val

    let serviceName = $("#serviceName").val().trim();
    let serviceDescription = $("#serviceDescription").val().trim();
    let servicePrice = $("#servicePrice").val();

    //alert(`${serviceName} - ${serviceDescription} - ${servicePrice}`)

    // 2. Use the values
    if(serviceName == ""){
       $("#serviceName").css("border", "3px solid red"); 
    }else if(serviceDescription == ""){
       $("#serviceDescription").css("border", "3px solid red");
    }else if(servicePrice == ""){
        $("#servicePrice").css("border", "3px solid red");
    }else{
    // Save to local storage -> 
    localStorage.setItem("serviceNameKey", serviceName);
    localStorage.setItem("serviceDesriptionKey", serviceDescription);
    localStorage.setItem("servicePriceKey", servicePrice);

    // Remove the red border
    $("#serviceName").css("border", "");
    $("#serviceDescription").css("border", "");
    $("#servicePrice").css("border", "");

    // Clear the fields
    $("#serviceName").val("");
    $("#serviceDescription").val("");
    $("#servicePrice").val("");

    // Notify the user
    alert("Services Registered");
    }
});