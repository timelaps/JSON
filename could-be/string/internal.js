var isStrictlyEqual = require('@timelaps/is/strictly-equal'),
    stringHash = {
        '"': true,
        '\'': true
    };
module.exports = function couldBeString(obj, length) {
    var first;
    return length >= 2 && stringHash[(first = obj[0])] && isStrictlyEqual(first, obj[length - 1]);
};