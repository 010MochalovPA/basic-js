const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let check = parseFloat(sampleActivity);
    if (sampleActivity < 0 || !sampleActivity ||  MODERN_ACTIVITY < sampleActivity || !(check) || typeof sampleActivity != 'string') return false;    
    return Math.ceil( Math.log( MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
};
