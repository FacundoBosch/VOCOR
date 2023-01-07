let botbeg2 = document.querySelector(".b2log")
let registered = document.getElementById('a')

botbeg2.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/registerENG.html"
})

registered.addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5500/editProfileENG.html'
})