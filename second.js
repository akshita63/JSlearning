
//block


let b=100 //global scope
{
 var a=10;  //block scope
 let b=20;
 const c=30;


 console.log(a);   //10  

 console.log(b);  //20
 console.log(c);  //30

//const and let are block scoped means they are defined in a sep emmory sccope which is the block scope


}


console.log(a);  //10
console.log(b);   //cant access
console.log(c);    //cant access


//block scope  what all variables we can access in the block

//comboning multiple statements



const s=20;{   //seperate block
    const s=100;{   //seperate b;lock
        const s=200;{    //seperate block
            console.log(s);
        }
    }
}





