function text(userInput){
    //Regex expression to accept only strings containing a mix of numbers and letters in a range from 5 to 7 characters
    var letterNumber =/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{5,7})$/;
    if (letterNumber.test(userInput.value)){
        return $("#results").html(` Pharmacies near `+ userInput.value);
    }
    return $("#results").html(`Invalid Postcode`);
}

$(document).ready(function(){
    
});