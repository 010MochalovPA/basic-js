const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 0) return 1;
    return Math.max(...arr.map(item => this.calculateDepth(item))) + 1;
  }
};
