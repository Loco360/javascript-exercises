const sumAll = function(min, max) {
    let sum = 0;
    // If one number is kleiner than 0 then return ERROR
    if (min < 0 || max < 0) {
        return "ERROR";
    }
    // If min or max is no number return ERROR
    if (typeof min !== "number" || typeof max !== "number") {
        return "ERROR";
    }
    // If min is bigger than max it does not count so i got to change min to the lower value and max to the bigger value
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    } 
    //Test 1-3 works
    for (min; min <= max; min++) {
        sum = sum + min;
        
    }
    return sum;
}

module.exports = sumAll
