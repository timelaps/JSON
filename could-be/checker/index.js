var isString = require('@timelaps/is/string');
module.exports = function checker(fn) {
    return function (obj) {
        var length;
        return !!(obj && (length = obj.length) && isString(obj)) && !!fn(obj, length);
    };
};