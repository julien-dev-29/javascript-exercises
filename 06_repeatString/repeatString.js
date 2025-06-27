const repeatString = function (string, number) {
    if (number < 0) return "ERROR"
    let repeated = ''
    for (let index = 0; index < number; index++) {
        repeated += string
    }
    return repeated
};

// Do not edit below this line
module.exports = repeatString;
