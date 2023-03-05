"use script"

var users = JSON.parse(localStorage.getItem('users'));


var copylogin = false;
var bob = false;
let flogin = document.querySelector(".All")
let btReg = document.querySelector("#btr")
let btBtl = document.querySelector("#btbtl")
let fnm = document.querySelector("#nm")
let flg = document.querySelector("#lg")
let fpw = document.querySelector("#pw")
let frpw = document.querySelector("#rpw")
let fmes = document.querySelector("#mes")

btReg.addEventListener("click",Registration);


function Registration() {
    let lg = flg.value;
    let pw = fpw.value;
    let rpw = frpw.value;
    let nm = fnm.value;

                    fetch('https://dummyjson.com/users/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        firstName: nm,
                        username: lg,
                        password: pw,
                        /* other user data */
                    })
                    })
                    .then(res => res.json())
                    .then(console.log);
                    
        btBtl.addEventListener("click",BackToLogin);

        function BackToLogin() {

                document.location.href = "Login.html";
                }
}