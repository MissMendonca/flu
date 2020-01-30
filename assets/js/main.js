function text(userInput){
    //Regex expression to accept only strings containing a mix of numbers and letters in a range from 5 to 7 characters
    var letterNumber =/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{5,7})$/;
    if (letterNumber.test(userInput.value)){
        return postcodeValidator(userInput.value.toUpperCase());
    }
    else{
        return $("#results").html(`Invalid Postcode`);
    }
}

function postcodeValidator(info){
    var url = "https://api.postcodes.io/postcodes/"+info;
    fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
            return $("#results").html(`Invalid Postcode`);
        }
        response.json()
        .then(function(data) {
            var latitude = data.result.latitude;
            var longitude = data.result.longitude;
            var locationData = [latitude, longitude];
            console.log(locationData);
        })
        .catch(function(err) {
            console.log('Error:', err);
        })
    });
}




$(document).ready(function(){
    
});