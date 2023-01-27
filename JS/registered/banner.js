let botbeg2 = document.querySelector(".b2log")
let registered = document.getElementById('a')

botbeg2.addEventListener("click", () => {
    location.pathname = "../../register.html"
})

registered.addEventListener('click', () => {
    location.pathname = '../../editProfile.html'
})