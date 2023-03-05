"use strict";
var a = localStorage.getItem('nickname');

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((json) => showProduct(json));

let BtLogOut = document.querySelector("#bt")
let BtShop = document.querySelector("#BtShop")

BtLogOut.addEventListener("click",LogOut)
BtShop.addEventListener("click",Shop)

function Shop(){
    
    document.location.href = "../Shop.html"
}

function LogOut(){
    document.location.href = "../Login.html"
}


function showProduct(json){
    // console.log(json);
    let arrProduct = json.products;
    let content = document.querySelector("#content");
    for (const product of arrProduct) {
        // console.log("--> "+product.title);
        if(product.id == "5") {
            content.innerHTML += `
            <div class="all">
            <img class ="img" src=${product["images"][0]}>
            <h1 class="s"><a href=#>${product.title}</a></h1>
            <p class="desc">  ${product.description}</p>
            <p class="s">Price: ${product.price}$</p>
            <p class="s"> Rating: ${product.rating}</p>
            </div>
            `;
        }
    }

    var elem = document.createElement("h2");
}
