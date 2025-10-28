

function outer(){
    var x=20;

    //this function acts as closure since it remembers its lexical environment
    function inner(){
        console.log(x);
    }


    return inner;
}
//so when  execution comes on line no 15 outer function is called and it just returns the inner , basically the outer function is
//removed from the call stack, so we are storing the output or the return function and this inner func remembers 
//the scope and that is called lexical scope
const output=outer();
console.log(output)