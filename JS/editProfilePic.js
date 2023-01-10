const imageInput = document.querySelector('.imageInput')
const newImage = document.getElementById('frontprofilePic')
var uploadImg = ''

imageInput.addEventListener('change', function(){
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    uploadImg = reader.result
    newImage.style.backgroundImage = `url(${uploadImg})`
    localStorage.setItem('profilePic', reader.result)
  })
  reader.readAsDataURL(this.files[0])
})

document.addEventListener('DOMContentLoaded', () => {
  const newImageURL = localStorage.getItem('profilePic')
  if (newImageURL){
    newImage.style.backgroundImage = `url(${newImageURL})`
  }
})