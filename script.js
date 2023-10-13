
   function digitar(elemento){
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML ='';
    texto.forEach((letra,i) => {
         setTimeout(()=>{
            elemento.innerHTML += letra;
         } ,75 * i);
    });
}
const titulo = document.querySelector('.digitando');

digitar(titulo);

const menu = document.querySelector('.fa-bars');
const nav = document.querySelector('header .nav-1');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-x')
    nav.classList.toggle('ativado')
})