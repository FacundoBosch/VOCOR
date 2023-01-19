let card1 = document.getElementById('clickable1')
let card2 = document.getElementById('clickable2')
let card3 = document.getElementById('clickable3')

card1.addEventListener('click', () => {
  window.open(`https://www.google.com.ar/maps/place/34°42'03.2"S+58°22'48.9"W/@-34.7008977,-58.3813672,18z/data=!3m1!4b1!4m6!3m5!1s0x0:0x18f2d7d7a8d8fa3d!7e2!8m2!3d-34.7009004!4d-58.3802379`, '_blank');
})

card2.addEventListener('click', () => {
  window.open(`https://www.google.com.ar/maps/place/41°27'00.9"N+2°13'11.7"E/@41.4502373,2.2192218,18z/data=!3m1!4b1!4m6!3m5!1s0x0:0xe4b40bdab81bad3b!7e2!8m2!3d41.4502355!4d2.2199278`, '_blank')
})

card3.addEventListener('click', () => {
  window.open(`https://www.google.com.ar/maps/place/48°51'36.4"N+2°30'18.8"E/@48.8600983,2.5037606,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x89dc3eaf997e2738!7e2!8m2!3d48.8600961!4d2.5052253`, '_blank')
})