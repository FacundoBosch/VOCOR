const btns = document.querySelectorAll(".btn_buy");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add('process')
        btn.textContent = "Procesando..."
        setTimeout(function(){
          btn.classList.remove('process')
          btn.classList.add("bought")
          btn.textContent = "¡Comprado!"
        }, 2500)
    })
})
