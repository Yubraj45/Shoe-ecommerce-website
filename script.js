 let addTo=document.querySelectorAll(".add-to");

addTo.forEach((button)=>{
    button.addEventListener("click",()=>{
   alert("You are addding the item in the cart.")
})
})

let buy=document.querySelectorAll(".buy-now");

buy.forEach((button)=>{
    button.addEventListener("click",()=>{
    alert("You are buying this item.")
})
})     