function navbar() {
    return `
    
    <div id = "nav1">
    <a href = ""><p>Asia's first brand with MADE SAFE certified products</p></a>
    <a href = ""><p id = "navt">Free Shippping above 399 | COD Available | Ertra 5% OFF
        on prepaid orders | Shop Now
    </p></a>
    <i class="far fa-user"></i>
</div>
<div id = "nav2">
    <img id = "logo" src = "https://media.loylty.com/movies/bannerimg_20210730184309563.jpg">
    <input id = "srch" type = "text" placeholder = "Search for products.."><button id = "btn"><i class="fas fa-search"></i>Search</button>
    <a href="cart.html"> <i class="fas fa-shopping-cart fa-lg"></i></a> Cart
    <i class="fas fa-user-alt fa-lg"></i> Login
</div>
<div id = "nav3">
    <p id="homet">HOME</p>
    
    <div class="dropdown"> <p>BABY</p> <div id="babita" class="dropdown-content">
        <ul class="inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>
        
        <ul class="inline">
            <li class="bold">Baby</li>
            <li>Baby Shampoo</li>
            <li>Baby Oralcare</li>
            <li>Baby Oil</li>
            <li>Baby Skin</li>
            <li>Baby Bath</li>
            <li>Baby Diaper</li>
        </ul>

        <ul class="inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>


    <div  id="beauty" class="dropdown"> <p>BEAUTY</p> <div class="dropdown-content">
        <ul class="inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class="inline">
            <li class="bold">Beauty</li>
            <li>Face</li>
            <li>Hair</li>
            <li>Body</li>
        </ul>

        <ul class="inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>


    <div  id="hair" class="dropdown"> <p>HAIR</p> <div class="dropdown-content">
        <ul class="inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class="inline">
            <li class="bold">Hair</li>
            <a id="shampoo" href="Products.html"><li>Shampoo</li></a>
            <li>conditioner</li>
            <li>Hair Oil</li>
            <li>Hair Mask</li>
            <li>Hair Serum</li>
        </ul>

        <ul class="inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>


    <div  id="face" class="dropdown"> <p>FACE</p> <div class="dropdown-content">
        <ul class="inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class="inline">
            <li class="bold">Face</li>
            <li>Face Wash</li>
            <li>Face Mask</li>
            <li>Face Cream</li>
            <li>Face Serum</li>
            <li>Face Scrum</li>
            <li>Face Toner</li>
            <li>Face Gel</li>
            <li>Face Sheet Mask</li>
        </ul>

        <ul class="inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>


    <div  id="body" class="dropdown"> <p>BODY</p> <div class="dropdown-content">
      <div class="display">
        <ul class="inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>
        </div>

        <div class="display">
        <ul class="inline">
            <li class="bold">Bodyy</li>
            <li>Body Butter</li>
            <li>Body Wash</li>
            <li>Body Lotion</li>
            <li>Body Scrub</li>
            <li>Hand Cream</li>
        </ul>
        </div>

        <div class="display">
        <ul class="inline">
            <li class="blue">See All</li>
        </ul>
        </div>

    </div> </div>

    <p id="gift" class="hometxt">GIFT PACKS</p>
    <p class="hometxt">ALL PRODUCTS</p>
    <p class="hometxt">BLOG</p>
    <p class="hometxt">PLANT GOODNESS</p>
    <p class="hometxt">STORE LOCATOR</p>
</div>
`
}

export default navbar;