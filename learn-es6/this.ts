var employee = {
    id:1,
    greet:function(){
        console.log(this.id);
    }
};

employee.greet(); // will output 1

// var boss = {
//     id:1,
//     greet:function(){
//         setTimeout(function(){
//             console.log(this.id); // will become undefined, because shadowed by function. we can use self which refer to this of the object
//         },1000);
//     }
// }

var boss = {
    id:2,
    greet:function(){
        var self=this;
        setTimeout(function(){
            console.log(self.id);
        }, 1000);
    }
};

boss.greet();

var otherboss = {
    id:2,
    greet:function(){
        setTimeout(() => {
            console.log(this.id); //arrow function will not create it's own this
        }, 1000);
    }
};

otherboss.greet();