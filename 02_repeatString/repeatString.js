const repeatString = function(inputString, ntimes) {

    let outputString;
    
    if (ntimes < 0) {
        outputString = 'ERROR';
    }
    else {
        outputString = inputString.repeat(ntimes);
    }
    
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;