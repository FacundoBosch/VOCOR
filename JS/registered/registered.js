let regbut = document.getElementById("b2log")
let userplace = document.getElementById("account")
let a = document.getElementById("a")
let botnew = document.getElementById("botnew")
let container = document.getElementById("containerm1-1")
let container2 = document.getElementById("containerm1-2")

let userdet = localStorage.getItem("user")
userdet = JSON.parse(userdet)
let fullname = userdet.nombre + ' ' + userdet.apellido

let logged = false

if (localStorage.getItem("user") != null){
    logged = true
}

if (logged == true) {
    regbut.style.display = "none"
    userplace.style.display = "flex"
    a.textContent = fullname
    botnew.style.display = "none"
    container.style.height = "30em"
    container2.style.height = "30em"
}


