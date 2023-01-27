let botbeg2 = document.querySelector(".b2log")
let registered = document.getElementById('a')

botbeg2.addEventListener("click", () => {
    location.pathname = "../../registerENG.html"
})

registered.addEventListener('click', () => {
    location.pathname = '../../editProfileENG.html'
})