let deleverbtn = document.getElementById("deliver");

deleverbtn.addEventListener("click",saveaddress);

function saveaddress(){
}



let cartpage= document.getElementById("return")
cartpage.addEventListener("click",cartpage)
  
function cartpage(){
    location.href="../CartPage/Dcartpage.html"
}



// document.getElementById("deliver").addEventListener("submit",()=>{
//     let email=document.getElementById("email").value;
//     let country=document.getElementById("country").value;
//     let fisrtname=document.getElementById("fisrtname").value;
//     let lastname=document.getElementById("email").value;
//     let address=document.getElementById("country").value;
//     let apartment=document.getElementById("fisrtname").value;
//     let city=document.getElementById("email").value;
//     let state=document.getElementById("country").value;
//     let pincode=document.getElementById("fisrtname").value;

//     if(email==""){
//         email.style.border="red"
//     }
// })
// document.getElementById("deliver").addEventListener("submit",()=>{
//     console.log("i am clicked by you")
// })
