let apply= document.getElementById("apply");


apply.addEventListener("click",offer)

function offer(){


    const couponcode =document.getElementById("couponcode").value;
   if(couponcode==="Masai30"){
    document.getElementById("SubtotalPrice").innerText="$ 500";
   }
}

let close=document.getElementById("close")
close.addEventListener("click",closepage);
function closepage(){
   window.location.href="../payment/Dpayment.html"
   
}
close.addEventListener("mouseover",function(){
   
    document.getElementById("close").innerText="➖"
   })
   close.addEventListener("mouseout",function(){
    document.getElementById("close").textContent="✖";
    

   })

   let homebtn=document.getElementById("homepage")

   homebtn.addEventListener("click",homepage)

   function homepage(){
      window.location.href="../AddToCart/Daddtocart.html"
   }

   let checkoutpagebtn=document.getElementById("checkoutpage").addEventListener("click",()=>{
      window.location.href="../Checkout/Dpayment.html"
   })
