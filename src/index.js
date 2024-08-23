import './styles/main.css'

document.querySelector('.homeButton').addEventListener('click', ()=>{
    document.querySelector('.menu').style.display = "none"
    document.querySelector('.contact').style.display = "none"
    document.querySelector('.home').style.display = "block"
})

document.querySelector('.menuButton').addEventListener('click', ()=>{
    document.querySelector('.contact').style.display = "none"
    document.querySelector('.home').style.display = "none"
    document.querySelector('.menu').style.display = "grid"
})

document.querySelector('.ContactButton').addEventListener('click', ()=>{
    document.querySelector('.menu').style.display = "none"
    document.querySelector('.home').style.display = "none"
    document.querySelector('.contact').style.display = "block"
})