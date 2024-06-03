import './styles/main.css'

const mainPages = ['Homepage', 'Menu', 'About']

const titlebar = document.createElement('nav')
titlebar.className = 'titlebar'

const buttonHome = document.createElement('button')
const buttonMenu = document.createElement('button')
const buttonAbout = document.createElement('button')
buttonHome.classList.add('navButton')
buttonMenu.classList.add('navButton')
buttonAbout.classList.add('navButton')
buttonHome.innerText = 'Home'
buttonMenu.innerText = 'Menu'
buttonAbout.innerText = 'About'


titlebar.append(buttonHome, buttonMenu, buttonAbout)

document.body.appendChild(titlebar);

const home = document.createElement('main')

home.className = 'home'
const homeTitle = document.createElement('h1')
homeTitle.innerText = 'Welcome to our restourant N0-POINT'
const pTitle = document.createElement('p')
pTitle.innerText = 'This site is all about making a site in a wiered way when you have learned something new for absolutely no point at all :)'

home.append(homeTitle, pTitle)

document.body.appendChild(home)


const menu = document.createElement('main')
menu.className = 'menu' 


for(let i = 0; i < 7; i++){
    let divItem = document.createElement('div')
    divItem.className = 'menuItem'
    let h1menu = document.createElement('h1')
    h1menu.innerText = 'Random food'
    let pmenu = document.createElement('p')
    pmenu.innerText = 'random info for said item'
    divItem.append(h1menu, pmenu)
    menu.appendChild(divItem)
}

document.body.appendChild(menu)



const about = document.createElement('main')

about.className = 'about'

let h1About = document.createElement('h1')
h1About.innerText = 'If i am given such a dumb task again to use something new and not use all my skillset by limiting me only to js i am going to find the person that made this task and shove it up soo much inside that he wont be able to use webpack to rebundle his ass :)'

about.appendChild(h1About)

document.body.appendChild(about)


buttonHome.addEventListener('click', ()=>{
    home.style.display = 'flex'
    menu.style.display = 'none'
    about.style.display = 'none'
})


buttonMenu.addEventListener('click', ()=>{
    home.style.display = 'none'
    menu.style.display = 'grid'
    about.style.display = 'none'
})


buttonAbout.addEventListener('click', ()=>{
    home.style.display = 'none'
    menu.style.display = 'none'
    about.style.display = 'flex'
})