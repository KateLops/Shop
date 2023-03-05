"use strict";
var a = localStorage.getItem('nickname');

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((json) => showProduct(json));

let BtLogOut = document.querySelector("#bt")
let count = 1

BtLogOut.addEventListener("click",LogOut)

function LogOut(){
    document.location.href = "Login.html"
}

function showProduct(json){
    // console.log(json);
    let arrProduct = json.products;
    let content = document.querySelector("#content");
    for (const product of arrProduct) {
        // console.log("--> "+product.title);
        if(product.category == "smartphones") {
            content.innerHTML += `
            <div class="all">
            <img class ="img" src=${product["images"][0]}>
            <h1 class="s"><a href=Smartphones/${count}.html>${product.title}</a></h1>
            <p>Price: ${product.price}$</p>
            <p> Rating: ${product.rating}</p>
            <button class="bt">Buy</button>
            </div>
            `;
        }
        count++;
    }

    var elem = document.createElement("h2");
}
