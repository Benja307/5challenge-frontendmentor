const abrir = document.querySelector('#abrir-menu');
const cerrar = document.querySelector('#cerrar-menu');
const menu = document.querySelector('.nav-bar');

abrir.addEventListener('click', (event)=>{
    menu.style.display = 'flex';
});

cerrar.addEventListener('click', ()=>{
    menu.style.display = 'none';
})