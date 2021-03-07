const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    } else if (isNaN(date.getMonth()) || !(Object.prototype.toString.call(date) === "[object Date]")) {
        throw new Error('Invalid Date');
    }
    if (date.getMonth() >= 2 && date.getMonth() <= 4 ) return 'spring';
    else if (date.getMonth() >= 5 && date.getMonth() <= 7 ) return 'summer';
    else if (date.getMonth() >= 8 && date.getMonth() <= 10 ) return 'autumn';
    else if (date.getMonth() == 11 || (date.getMonth() >= 0 && date.getMonth() <= 1 )) return 'winter';
};
