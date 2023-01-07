let botbeg = document.getElementById("begbut")

botbeg.addEventListener("click", () => {
    let correo = document.getElementById("mailbut").value
    if (correo == ""){
        alert("El correo es obligatorio.")
    } else {
        location.href = "https://facundobosch.github.io/VOCOR/register.html"
        localStorage.setItem("correo", correo)
    }
})
