let botbeg = document.getElementById("begbut")

botbeg.addEventListener("click", () => {
    let correo = document.getElementById("mailbut").value
    if (correo == ""){
        alert("El correo es obligatorio.")
    } else {
        location.href = "http://127.0.0.1:5500/register.html"
        localStorage.setItem("correo", correo)
    }
})

