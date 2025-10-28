
function capitalize(str){
   

    if(!str){
        return '';
    }


    return str.charAt(0).toUpperCase()+str.slice(1);
}



console.log(capitalize("hello"));
console.log(capitalize("divya"));

