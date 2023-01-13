let botbeg = document.getElementById("begbut")

botbeg.addEventListener("click", () => {
    let correo = document.getElementById("mailbut").value
    if (correo == ""){
        alert("E-Mail is required.")
    } else {
        location.href = "https://facundobosch.github.io/VOCOR/registerENG.html"
        localStorage.setItem("correo", correo)
    }
})
