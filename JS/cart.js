var mamaEarthData = JSON.parse(localStorage.getItem("mamaEarthProducts"));

var data = JSON.parse(localStorage.getItem("CartItems")) || [];

var loggedUser = JSON.parse(localStorage.getItem("userDetail"));
var userID = [];

if (loggedUser != null) {
    var userID = loggedUser;
}
var usercart = []
data.forEach(element => {
    if(element.userEmail == userID[0].email)
    usercart.push(element)
});
console.log(usercart);

var container  = document.querySelector(".left-section");
if(usercart.length == 0 || usercart == undefined || usercart == null)
{
    container.innerHTML = `<h1>No Products in your cart</h1>`;
}

else{    
var totalAmount = 0;
usercart.forEach(item => {
    var tempData = []
    mamaEarthData.forEach(el => {
        if(el.id == item.productId)
            tempData.push(el);
    })
    // console.log(tempData)
    totalAmount += tempData[0].price;
    container.innerHTML += 
    `
    <div class = "card">
    <div><img src = ${tempData[0].imgUrl[0]}></div>   
    <div id="titleNprice">
    <h3>${tempData[0].title}</h3>
    <p><span class="iconify" data-icon="icons8:rupee"></span>${tempData[0].price}</p>
    </div>  
            
    `
})
var totalPrice = document.querySelectorAll("#total-price");
totalPrice[0].innerHTML = '<span class="iconify" id="priceSummaryIcon" data-icon="icons8:rupee"></span>'+ totalAmount ;
totalPrice[1].innerHTML = '<span class="iconify" id="priceSummaryIcon"data-icon="icons8:rupee"></span>'+ totalAmount;
}

function redirectToPayment() {
    window.location.href = "payment.html";
}
function redirectToProductPage() {
    window.location.href = "products.html";
}
