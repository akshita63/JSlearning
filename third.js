

//outer function
function hello(){

    let s=20;


    //inner function
    function inner(){
        console.log(s);



       
    }

     return inner();
}


const greet=hello();
greet();



function hi(){
    console.log("hello");
}

function greet(callback){
    console.log(callback );
    callback();

}

const variable=greet(hi);
variable();
