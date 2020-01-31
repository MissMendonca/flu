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
            return $("#results").html('Invalid Postcode');
        }
        response.json()
        .then(function(data) {
            var latitude = data.result.latitude;
            var longitude = data.result.longitude;
            var locationData = [latitude, longitude];
            fetchPharmaciesInfo(locationData);
        })
        .catch(function(err) {
            console.log('Error:', err);
        });
    });
}

function fetchPharmaciesInfo(postArray){
    var url = `https://api.foursquare.com/v2/venues/explore?client_id=LAXJFATFWWAWOJR4MNAMTXYPHPBJFCZLXXLEF0WHNHIYRBDZ&client_secret=5M4HU3K12I2FXB1C0T43MUZETLL14DCUEEPW55ZBMM5DFRSY&v=20180323
        &intent=checkin&limit=15&ll=${postArray[0]},${postArray[1]}&query=pharmacy`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        $("#results").html(data.response.groups[0].items.map(function(item){
        return `<div class="container"> 
                    <h4>${item.venue.name}</h4>
                    <p>${item.venue.location.formattedAddress[0]}</p>
                    <p>${item.venue.location.formattedAddress[1]}</p>
                    <p>${item.venue.location.formattedAddress[2]}</p>
                    <p>${item.venue.location.formattedAddress[3]}</p>
                    <p>${item.venue.location.formattedAddress[4]}</p>
                </div>`;
        }));
    })
    .catch(function(err) {
        console.log('Error:', err);
    });
}



$(document).ready(function(){
    
});