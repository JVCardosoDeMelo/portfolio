function escreverletra(){
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
}

escreverletra();


function menuMobol(){const menu = document.querySelector('.fa-bars');
const nav = document.querySelector('header .nav-1');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-x')
    nav.classList.toggle('ativado')
});
}

menuMobol();

function sobremim(){

  const divexperiencia = document.querySelectorAll('.experiencia-content div');
  const liexperiencia = document.querySelectorAll('.experiencia-content ul li');
  const diveducacao = document.querySelectorAll('.educacao-content div');
  const lieducacao = document.querySelectorAll('.educacao-content ul li');

  divexperiencia[0].classList.add('ativo');
  liexperiencia[0].classList.add('ativo');
  diveducacao[0].classList.add('ativo');
  lieducacao[0].classList.add('ativo');


  function slideshow(index){
    divexperiencia.forEach((div)=>{
        div.classList.remove('ativo');
    });
    liexperiencia.forEach((botao)  =>{
       botao.classList.remove('ativo')
    })
    divexperiencia[index].classList.add('ativo')
    liexperiencia[index].classList.add('ativo')
}
  function slideshow2(index){
    diveducacao.forEach((div)=>{
        div.classList.remove('ativo');
    });
    lieducacao.forEach((botao)  =>{
       botao.classList.remove('ativo')
    });
    diveducacao[index].classList.add('ativo')
    lieducacao[index].classList.add('ativo')
}

liexperiencia.forEach((evento,index) =>{
    evento.addEventListener('click', () =>{
        slideshow(index)
    });
});
lieducacao.forEach((evento,index) =>{
    evento.addEventListener('click', () =>{
        slideshow2(index)
    });
});
}

sobremim();


const listaall = document.querySelectorAll('.projetos-armazenamento ul li');
const botaogeral = document.querySelector('.projetos-navegacao ul li');
const botaoall = document.querySelector('.modelos-projetos .all')