const hamburgerBtn = document.querySelector(".hamburger")
const navLinks = document.querySelector(".class-links")

hamburgerBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('open')
})
