const leapYears = function(year) {
    //use an if statement and && to make sure all the conditions are met properly
    let isleapYear;
    // Long version
    /*
    if (year % 4 == 0 && year % 100 != 0) {
        isleapYear = true;
        return isleapYear;
    } else if (year % 400 == 0) {
        isleapYear = true;
        return isleapYear;
    } else {
        isleapYear = false;
        return isleapYear;
    }*/

    //short version
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

module.exports = leapYears
