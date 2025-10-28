

//memory is allocate dhere and the value is undefined
let a;
 a=5;

const b=1000;//in const the declaration and assignment should be done in the same line



//got a button and then when the button is clicked you just need to toggle
<button id="button" >click</button>






//the function present inside the evenListener is my callback function
document.getElementById("click")
.addEventListener("click",function abc()
    {
    console.log("button is clicked finally");
}
)




//we need to print the evem numbers


function hello(name, callback){
    console.log("my name is " + name);

    callback();
}

function sayhi(){
    console.log("this is hi function");
}


hello("naina",sayhi);







