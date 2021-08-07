"use strict";
// this code will output 6 for 5 times
// because var is scoped globally then since i is passed by reference, it still refer var
// since for loop is faster than 1 seconds timeout, then when timeout run the function, the value of i already changed by loop increment
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
// the correct one if we want to output 1-5
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
