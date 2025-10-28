
console.log("akshita potlacharw");
//let x="shreya sharma";
//console.log(x);
//console.log(typeof(x));


//undefined
let s;

let b=null;
console.log(b);
console.log(typeof(b));

let course={
    name:"Data structures",
    title:"Book",


};

course.name="Javascript";
console.log(course);

let courses=['DSA','JAVASCRIPT', true, null,'JAVA'];
console.log(courses[0]);
console.log(courses[1]);



let p=24;
let q=p;
//p=24
 p=45;
 //p=45
console.log(p);
//q=24   //copy by value in javascript
console.log(q);





console.log(course);
console.log(typeof(course));


console.log(course.name);





console.log(s);
s=20;
console.log(s);
console.log(typeof(s));


let a=true;
console.log(a);
console.log(typeof(a));


//functions

cretaefunc("Low level system design");


function cretaefunc(Coursename){
    console.log("creating a function " + Coursename);
}

cretaefunc("DSA");
//high level design
cretaefunc("HLD");


//hoisting in js
//memory phase-variable environment
//code phase- execution happens line by line


//this and window

//works with var 
console.log(n);
 console.log(this.n);
var n=20;


console.log(n);
console.log(this.n);
console.log(window.n);
console.log(this==window);

function hello(){
    let j=10;
    var k=11;
    console.log(j);
}








function afunc(s ,t){
    return s+t;
}

let sum=function(c,d){
    return c*d;
}

console.log(sum);
console.log()

console.log(afunc);
console.log(afunc(2,3));




j=20;

hello();
console.log(j);
//console.log(k);



//calling different functions



//first class functions
//higher order functions


 add=function(a,b){
    return a+b;
}

let sub=function(a,b){
    return a-b;
}

let mul=function(a,b){
    return a*b;
}


function operate(operfunction,a,b){
    return operfunction(a,b);
}

console.log(operate(sub,3,1));
console.log(operate(add,4,5));
console.log(operate(mul,7,3));

console.log(operate(sub,3,3));
console.log(operate(add,3,6));
console.log(operate(add,9,8));
console.log(operate(sub,7,2));
console.log(operate(add,9,10));

function pqr(){
    let x=10;


    //inner function
    function cde(){
        console.log(x);
    }

       //calling the inner function
       //the value will be x=10  here the inner function 
        cde();
    }


    //calling the outer function
    pqr();













