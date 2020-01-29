function text(userInput){
    var letterNumber =/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{5,7})$/;
    if (userInput.match(letterNumber)){
        return true;
    }
    return false;
}