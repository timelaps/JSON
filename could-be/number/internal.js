var isNumber = require('@timelaps/is/number');
var toNumber = require('@timelaps/hacks/to-number');
module.exports = function couldBeNumber(obj) {
    return isNumber(toNumber(obj));
};