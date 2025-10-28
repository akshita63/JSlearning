

function placeorder(order,callback){
    const item=order.item;
    const quantity=order.quantity;

 const message=`${item} * ${quantity}`;
        console.log(message);
    setTimeout(()=>
    {
       
        callback(message);
    },7000
    );

   
}



    function hi(message){
       console.log("callback message : "+ message);
    }

    placeorder({item: "Dosa",quantity : 2}, hi);

