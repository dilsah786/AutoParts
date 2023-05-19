
let updatecartbtn =document.querySelectorAll("#addtocart");

let products=[
    {
        name:"Blue jeans shirt",
        tag:"Denim shirt",
        price:25,
        incart:0
    },
    {
        name:"navy blue shirt",
        tag:"casual shirt",
        price:30,
        incart:0
    }, 
    {
        name:"check shirt",
        tag:"Denim shirt",
        price:12,
        incart:0
    }

]

for(let i=0; i<updatecartbtn.length; i++){
    updatecartbtn[i].addEventListener("click",()=>{
        console.log("hello");
      
        cartnumbers()
    })
}

function onloadcartnumbers(){
 let productnumbers=JSON.parse(localStorage.getItem("cartnumbers"));


    document.getElementById("cartcount").textContent=localStorage.getItem("cartnumbers")
 
}

function cartnumbers(){
    let productnumbers= JSON.parse( localStorage.getItem("cartnumbers"))
    
    if(productnumbers){
        localStorage.setItem("cartnumbers",JSON.stringify( productnumbers+1))
        document.getElementById("cartcount").textContent=productnumbers+1;
    } else{
        localStorage.setItem("cartnumbers",1)
        document.getElementById("cartcount").textContent="1";
    }
    
}
onloadcartnumbers()