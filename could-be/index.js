var checker = require('./checker');
var couldBe = checker(JSONCouldBe);
module.exports = couldBe;
var couldBeObject = require('./object/internal');
var couldBeString = require('./string/internal');
var couldBeNumber = require('./number/internal');
var couldBeBoolean = require('./boolean/internal');
couldBe.object = require('./object');
couldBe.string = require('./string');
couldBe.number = require('./number');
couldBe.boolean = require('./boolean');

function JSONCouldBe(obj, length) {
    return couldBeObject(obj, length) || couldBeNumber(obj, length) || couldBeString(obj, length) || couldBeBoolean(obj, length);
}