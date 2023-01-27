let modifyBut = document.getElementById('editInfo')
let logoutBut = document.getElementById('logoutBut')
let botText = document.getElementById('changedInfo')
let botErrorText = document.getElementById('errorInfo')

if (localStorage.getItem('user') === null){
    location.href = "https://facundobosch.github.io/VOCOR/register.html"
}

let prevUserData = localStorage.getItem('user')
let userData = JSON.parse(prevUserData)

document.getElementById("newname").value = userData.nombre
document.getElementById("newsurname").value = userData.apellido
document.getElementById('mailDisplay').innerText = userData.mail

modifyBut.addEventListener('click', () => {
    if (document.getElementById("newname").value == '' || document.getElementById("newsurname").value == ''){
        botErrorText.style.display = 'flex'
    } else {
        let pData = {
            nombre: document.getElementById("newname").value,
            apellido: document.getElementById("newsurname").value,
            mail: userData.mail,
            pass: userData.pass
        }

        botErrorText.style.display = 'none'
        botText.style.display = 'flex'
        localStorage.setItem("user", JSON.stringify(pData))
        setTimeout(function(){
            location.href = "https://facundobosch.github.io/VOCOR/editProfile.html"
        }, 1500)
    }
})

logoutBut.addEventListener('click', () => {
    localStorage.removeItem('user')
    localStorage.removeItem('profilePic')
    setTimeout(function(){
        location.href = "https://facundobosch.github.io/VOCOR/index.html"
    }, 500)
})
