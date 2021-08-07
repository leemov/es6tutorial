ES6 + Features ( 2016 tutorial series )
Lil bit of theory : 

Javascript => implementation of ECMA Script
current version of JS is Version 5
Supported by major browser out there

New version of ECMA Script -> ECMA Script 2015
ES2015 = ES6
ES2015 = ES5 + New Features

Typescript => Opensource , maintained by microsoft
Typed superset of js
Compiles to plain javascript
have types => optional
Safer code 

Transpilers 
to convert ES6 into ES5 which understandable by major browser
ES6 code -> transpiled -> ES5 code
known transpiler => Traceur, Babel, Typescript

Learn typescript
1. installation
npm install typescript -g
2. create this folder
3. init the typescript (config)
tsc --init
4. configure as you want
6. code the .ts
7. compile the .ts into .js using local config
tsc --build tsconfig.json
8. create html file to import the .js 
9. to host locally the html file, can install lite-server
npm install lite-server -g
10. run the lite server inside the directory
lite-server
11. To have in browser plugin for transpiling ES6 -> ES5 , we can install ScratchJS

===> feature ES6 :
hoisting of var keyword
var keyword used to declare a variable
- functional scope. no matter where it's declared inside the function
- it can cause wrong logic as coded on iife.ts https://wesbos.com/es6-block-scope-iife/
function abc(name){
    if(name  == "John"){
        var greet = "hi John";
    } else {
        var greet = "hi there";
    }

    console.log(greet);
}
ES6
let : 
- is not hoisted, this is block scope
- cannot be re-declared in the same level of block
const : 
- simple type const cannot be changed, however object type const property can be changed, but not the entire object.
- use let if new value of declaration is expected, use const if new value of declaration is not expected

this :
- when we create an object and call this inside it's method, this is refering to the object


