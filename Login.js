"use script"

var copylogin = false;
var bob = false;
let flogin = document.querySelector(".All")
let BtLogin = document.querySelector("#bt")
let flg = document.querySelector("#lg")
let fpw = document.querySelector("#pw")
let fmes = document.querySelector("#mes")

BtLogin.addEventListener("click",json)

function json(json){

    let lg = flg.value;
    let pw = fpw.value;

    let jsonUs;

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: lg,
            password: pw,
        })
    })
    .then((response) => response.json())
    .then((json) => login(json));
}

function login(json) {

    jsonUs = json;
    
    let arrProduct = json.users;
    console.log(arrProduct)

    if(json.message == "Invalid credentials"){
        fmes.innerHTML = "Unknown User"
    }
    else{
        fmes.innerHTML = ""
        localStorage.setItem('token', jsonUs.token)
        localStorage.setItem('id', jsonUs.id)
        document.location.href = "Shop.html"
    }
    
}