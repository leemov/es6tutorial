var someRegularFunction = function(){
    return 10;
}

console.log(someRegularFunction());

const someArrowFunction = () => {
    return 10;
}

console.log(someArrowFunction());

const someArrowFunction2 = (m:any) => 10*m;

console.log("this will print 10*m");
console.log(someArrowFunction2(5));