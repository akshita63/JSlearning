

a();
b();
//function statement or function declaration both are same
function a(){
    console.log("a function is called");
}

//function statement
var res=function(){
    console.log("hey there how are yoy all");
}




//function expression
//named function expression

var res=function b(){
    console.log("this is function which is b");
}


//anonymous function
//function without its name
//anonymous fucntion


//first class functions


//in the above case I am giving sayhi as an argument to the abov3 function
function abc(func){
    func();
}



function sayhi(){
    console.log("hey there")

}



function abc(name){
    return function hello(){
        console.log("hello, my name is " +name);
    }
}


var cons=abc(akshita);
cons();




