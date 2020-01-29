function text(userInput){
    var letterNumber = /^[0-9a-zA-z]+$/;
    if (userInput.match(letterNumber)){
        return true;
    }
    return false;
}