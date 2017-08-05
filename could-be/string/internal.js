var stringHash = {
    '"': true,
    '\'': true
};
module.exports = function couldBeString(obj, length) {
    var first;
    return length >= 2 && stringHash[(first = obj[0])] && first === obj[length - 1];
};