(function(){
    let num1 = 10;
    const num2 = 10; // simple variable const cannot be changed

    const obj1 = { // object const properties can be changed
        name:"Joatmon"
    }

    console.log(obj1.name);

    obj1.name = "Mamba";
    console.log(obj1.name);
})()