
//add you js files here in script so that we can understand 


document.getElementById('btn').addEventListener('click',function(){
    alert("button is clicked");
});


//this is used to fetch from backend and give the result
fetch('http://localhost:8090/food')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
 })
        .catch(error => {
        console.error("Error fetching data:", error);
    });
   

