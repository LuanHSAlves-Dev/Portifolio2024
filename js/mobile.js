
let btnmenu = document.getElementById('abrirmenu')
let menu = document.getElementById('menu-mobile')
let overlaymenu = document.getElementById('overlay-menu')

btnmenu.addEventListener('click', ()=> {
    menu.classList.add('abrirmenu-mobile')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrirmenu-mobile')
})

overlaymenu.addEventListener('click', ()=> {
    menu.classList.remove('abrirmenu-mobile')
})