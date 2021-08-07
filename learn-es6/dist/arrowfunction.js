"use strict";
var someRegularFunction = function () {
    return 10;
};
console.log(someRegularFunction());
var someArrowFunction = function () {
    return 10;
};
console.log(someArrowFunction());
var someArrowFunction2 = function (m) { return 10 * m; };
console.log("this will print 10*m");
console.log(someArrowFunction2(5));
