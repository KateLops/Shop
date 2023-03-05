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
    fetch('https://dummyjson.com/users')
    .then((response) => response.json())
    .then((json) => login(json));
}

function login(json) {

   
    let arrProduct = json.users;
    console.log(arrProduct)

    let lg = flg.value;
    let pw = fpw.value;

    for (const user of arrProduct){
       
        if(lg == user.username && pw == user.password)
        {
            document.location.href = "Shop.html"
            localStorage.setItem('nickname', user.username);
            fmes.innerHTML = ""
            break;
        }
        else
        {
            fmes.innerHTML = "Unknown User"
        }
        }
}