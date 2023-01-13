const btns = document.querySelectorAll(".btn_buy");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add('process')
        btn.textContent = "Processing..."
        setTimeout(function(){
          btn.classList.remove('process')
          btn.classList.add("bought")
          btn.textContent = "¡Bought!"
        }, 2500)
    })
})
