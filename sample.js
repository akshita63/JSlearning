
function abc(dataid,newdata){

    setTimeout(()=>{
        console.log("data", dataid)

        newdata();
    },7000);


   
   
}

//callback hell(this can be solved with the help of promises)

abc(123,()=>{
    abc(456,()=>{
        abc(789,()=>{
            abc(111)
        })
    })
});
