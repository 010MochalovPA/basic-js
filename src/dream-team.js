const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = new Array();
    if (!members || !Array.isArray(members)) return false;
    for (let member of members){
        if (typeof member != 'string') continue ;
        result.push(member.toUpperCase().trim()[0]);
    }
    return result.sort().join('');
};
