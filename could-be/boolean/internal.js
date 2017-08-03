var booleanHash = {
    true: true,
    false: true
};
module.exports = function couldBeBoolean(obj) {
    return booleanHash[obj];
};