

 //===================== Display Products from local Storage Start============================//

var data = JSON.parse(localStorage.getItem("mamaEarthProducts"));
// var data = JSON.parse(localStorage.getItem("mamaEarthProducts")) || [];
console.log(data);
var main = document.getElementById("main");

showProducts(data);
function showProducts(data){
    main.innerHTML = "";
        data.forEach(item => {
            main.innerHTML += 
            `
            <div class="card">
                <div class="tagsName tag">Best Seller</div>
                <img src="${item.imgUrl[0]}">
                <h1>${item.title}</h1>
                <h4>${item.rating}<span class="iconify" data-icon="dashicons:star-filled"></span></h4>
                <h3><span class="iconify" data-icon="icons8:rupee"></span>${item.price}</h3>
                <button onclick = "addToCart('${item.id}')">Add to Cart</button>
             </div>
            `
        });
    }
 //=================== Display Products from local Storage END=============================//    


 //======================= Add Products To Cart Start==================================//


 var userDetails = JSON.parse(localStorage.getItem("userDetail"));
//  var userdetails = JSON.parse.localStorage.getItem("userDetails");

 var cart = [];

//  console.log(userDetails);

 function addToCart(id){
     console.log(id);
     console.log(userDetails.email);

     var e = userDetails.email;
     

     var obj = {
         userEmail: e,
         productId: id,
     }

     console.log(obj);     
     var flag = false;
        for(var i=0;i<cart.length;i++){
             if(cart[i].userEmail == e && cart[i].productId == id){
                 flag = true;
                 break;
             }

        //    console.log(cart[i].userEmail , cart[i].productId);

        }
          if(flag ){
              alert("Item successfully added again");
              cart.push(obj);
              localStorage.setItem("CartItems", JSON.stringify(cart));

          } else {
              alert(" Successfully added in the cart !")
              cart.push(obj);
              localStorage.setItem("CartItems", JSON.stringify(cart));       
              
          }
 }

//============================ Add Products To Cart End=================================// 



 //================================= Sort function=========================================//
 
 
 function sortBy()
        {
            
            var temp = document.getElementById("sortByValue").value;
            if(temp == "low")
                {
                    var sorted = data;
                    sorted.sort(function (a,b)
                     {
                       return a.price - b.price;
                    });
                    showProducts(sorted);
                }
           else if(temp == "high")
                {
                    var sorted = data;
                    sorted.sort(function (a,b)
                     {
                        return b.price - a.price;
                    });
                   showProducts(sorted);
                }
            else if(temp == "rate")
            {
                var sorted = data;
                sorted.sort(function (a,b)
                {
                    return b.rating - a.rating;
                });
            showProducts(sorted);
            }
            else if(temp == "default")
                {
                    showProducts(data);
                    
                }
            
        }
//=============================== sort function===================================//

