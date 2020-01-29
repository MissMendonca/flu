function text(userInput){
    var letterNumber = /^[0-9a-zA-z]{5,7}$/;
    var isLetter = /^[a-zA-Z]+$/;
    if ( !(isLetter.test(userInput)) && userInput.match(letterNumber)){
        return true;
    }
    return false;
}