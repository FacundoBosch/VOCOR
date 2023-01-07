let regbut = document.getElementById("subbut")

let oblig1 = document.getElementById("obl1")
let oblig2 = document.getElementById("obl2")
let oblig3 = document.getElementById("obl3")
let oblig4 = document.getElementById("obl4")

let input1 = document.getElementById("name")
let input2 = document.getElementById("surname")
let input3 = document.getElementById("mail")
let input4 = document.getElementById("pass")

try {
    let pCorreo = localStorage.getItem("correo")
    document.getElementById("mail").value = pCorreo
} catch (error){
    console.log(error);
}

regbut.addEventListener("click", () => {

  let pData = {
    nombre: document.getElementById("name").value,
    apellido: document.getElementById("surname").value,
    mail: document.getElementById("mail").value,
    pass: document.getElementById("pass").value
}

    if (pData.nombre == "") {
        oblig1.style.display = 'flex'
        input1.style.borderColor = 'red'
    } else if (pData.apellido == "") {
        oblig1.style.display = 'none'
        input1.style.borderColor = 'lightgray'
        oblig2.style.display = 'flex'
        input2.style.borderColor = 'red'
    } else if (pData.mail == "") {
        oblig2.style.display = 'none'
        input2.style.borderColor = 'lightgray'
        oblig3.style.display = 'flex'
        input3.style.borderColor = 'red'
    } else if (pData.pass.length < 6) {
        oblig3.style.display = 'none'
        input3.style.borderColor = 'lightgray'
        oblig4.style.display = 'flex'
        input4.style.borderColor = 'red'
    } else {
      
        location.href = "http://127.0.0.1:5500/index.html"
    }

    localStorage.setItem("user", JSON.stringify(pData))
    localStorage.removeItem("correo")
})