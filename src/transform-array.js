const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!arr) throw new Error('arr is not an Array');
    let result = arr.slice();
    if (result[0] === '--discard-prev' || result[0] === '--double-prev') result.shift();
    if (result[result.length - 1] === '--discard-next' || result[result.length - 1] === '--double-next') result.pop();  
    for (let i = 0; i < result.length; i++ ) {
        if (result[i].toString() === '--discard-next' ) result.splice(i, 2, "deletedItem"); 
        else if (result[i].toString() === '--discard-prev') result.splice(i - 1, 2, "deletedItem");
        else if (result[i].toString() === '--double-next') result.splice(i, 1, result[i + 1]);
        else if (result[i].toString() === '--double-prev' ) result.splice(i, 1, result[i - 1]);
    }
    return result.filter(item => item != 'deletedItem');
};