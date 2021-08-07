"use strict";
(function () {
    var num1 = 10;
    var num2 = 10; // simple variable const cannot be changed
    var obj1 = {
        name: "Joatmon"
    };
    console.log(obj1.name);
    obj1.name = "Mamba";
    console.log(obj1.name);
})();
