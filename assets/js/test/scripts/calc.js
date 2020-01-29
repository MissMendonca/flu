function text(userInput){
    var letterNumber = /^[0-9a-zA-z]{5,7}$/;
    var isLetter = /^[a-zA-Z]+$/;
    var isNumber = /^\d+$/;
    if ( !(isLetter.test(userInput) || isNumber.test(userInput)) && userInput.match(letterNumber)){
        return true;
    }
    return false;
}