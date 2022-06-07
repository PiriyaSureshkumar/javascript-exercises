const reverseString = function(string) {

    let array = Array.from(string);
    let outputString = "";
    let length = array.length

    for (let i=0; i < length; i++) {
        outputString += array[length - i-1];
    }

    return outputString
};

// Do not edit below this line
module.exports = reverseString;
