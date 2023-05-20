

let cartpage= document.getElementById("deliver")
cartpage.addEventListener("submit",()=>{
    location.href="../bagpage/bag.html"

})
 
   

let pay= document.getElementById("valid")
cartpage.addEventListener("submit",()=>{
    location.href="#"

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

//     if(email!=""){
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
  




   //payment
   document.getElementById("payform").addEventListener("submit",SubmitPayForm);
var PayArr= JSON.parse(localStorage.getItem("paymentdetail")) ||[];


function SubmitPayForm(event){
    event.preventDefault();

    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    cardno=document.getElementById("cardno").value;
    myDate=document.getElementById("myDate").value;
    mobileNumber=document.getElementById("mobileNumber").value;
     cvv=document.getElementById("cvv").value;
     enterotp=document.getElementById("enterotp")

 PayObj={
    fname:fname,
    lname:lname,
    cardno:cardno,
    myDate:myDate,
    cvv:cvv,
    mobileNumber:mobileNumber,
    enterotp:enterotp
}


if(fname=="" || lname=="" || cardno=="" || myDate=="" ||cvv=="" || mobileNumber=="" ){
    alert("Fill all the Details");
    
}
else{
   
    alert("Otp has sent to your Mobile");
    let div=document.getElementById("otp")
    let otp =document.createElement("input");
    otp.type="text"
    otp.placeholder="Enter Your Otp"
    otp.id="enterotp"


    div.appendChild(otp)
 
PayArr.push(PayObj);
localStorage.setItem("paymentdetail",JSON.stringify(PayArr));
console.log(PayArr);
 }

 
}

document.getElementById("confirm").addEventListener("click",()=>{
    alert ("Succcessfull")
})

