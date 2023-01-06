const btns = document.querySelectorAll(".btn_buy");

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        let el = btn
        while(el){
            if(el.tagName === "BUTTON"){
                el.classList.remove("bought")
            }
            el = el.nextElementSibling
        }
        btn.classList.add("bought")
        btn.textContent = "¡Comprado!";
    })
})
