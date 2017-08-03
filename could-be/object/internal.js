var isStrictlyEqual = require('@timelaps/is/strictly-equal');
var objectHash = {
    '{': '}',
    '[': ']'
};
module.exports = function couldBeObject(obj, length) {
    return isStrictlyEqual(objectHash[obj[0]], obj[length - 1]);
};