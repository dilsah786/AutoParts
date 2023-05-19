

let cartpage= document.getElementById("return")
cartpage.addEventListener("submit",()=>{
    location.href="../bagpage/bag.html"

})
 
   



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

   // var mobileNumber = document.getElementById("mobileNumber").value;
   document.querySelector("form").addEventListener("submit",SubmitForm);

   var detailArr=JSON.parse(localStorage.getItem("addressdetail")) ||[];
   function SubmitForm(event){
       event.preventDefault();
       email=document.getElementById("email").value;
       country=document.getElementById("country").value;
       fisrtname=document.getElementById("fisrtname").value;
       lastname=document.getElementById("lastname").value;
       mobileno=document.getElementById("mobileno").value;
       address=document.getElementById("address").value;
       apartment=document.getAnimations("apartment").value;
       city=document.getElementById("city").value;
       state=document.getElementById("state").value;
       pin=document.getElementById("pincode").value;
   
   
   var detailobj={
    email:email,
    country:country,
    fisrtname:fisrtname,
    lastname:lastname,
    mobileno:mobileno,
    address:address,
    apartment:apartment,
    city:city,
    state:state,
    pin:pin,







   }
   if(email=="" || country=="" || fisrtname=="" || lastname=="" || mobileno =="" || address==""|| apartment==""||city=="" ||pin=="" || state==""){
   alert("Fill all the Details");
   } else{
   detailArr.push(detailobj);
   
   alert("Address saved Successfully");
   localStorage.setItem("addressdetail",JSON.stringify(detailArr));
   
   }
   }
  