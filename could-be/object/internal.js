var objectHash = {
    '{': '}',
    '[': ']'
};
module.exports = function couldBeObject(obj, length) {
    return objectHash[obj[0]] === obj[length - 1];
};