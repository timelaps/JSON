var couldBe = checker(JSONCouldBe);
module.exports = couldBe;
couldBe.object = checker(couldBeObject);
couldBe.string = checker(couldBeString);
couldBe.number = checker(couldBeNumber);
couldBe.boolean = checker(couldBeBoolean);
var isStrictlyEqual = require('@timelaps/is/strictly-equal'),
    toNumber = require('@timelaps/hacks/to-number'),
    isNumber = require('@timelaps/is/number'),
    isString = require('@timelaps/is/string'),
    isNan = require('@timelaps/is/nan'),
    tru = true,
    booleanHash = {
        true: tru,
        false: tru
    },
    objectHash = {
        '{': '}',
        '[': ']'
    },
    stringHash = {
        '"': tru,
        '\'': tru
    };

function checker(fn) {
    return function (obj) {
        var length;
        return !!(obj && (length = obj.length) && isString(obj)) && !!fn(obj, length);
    };
}

function JSONCouldBe(obj, length) {
    return couldBeObject(obj, length) || couldBeNumber(obj, length) || couldBeString(obj, length) || couldBeBoolean(obj, length);
}

function couldBeObject(obj, length) {
    return isStrictlyEqual(objectHash[obj[0]], obj[length - 1]);
}

function couldBeNumber(obj) {
    return isNumber(toNumber(obj));
}

function couldBeString(obj, length) {
    var first;
    return length >= 2 && stringHash[(first = obj[0])] && isStrictlyEqual(first, obj[length - 1]);
}

function couldBeBoolean(obj) {
    return booleanHash[obj];
}