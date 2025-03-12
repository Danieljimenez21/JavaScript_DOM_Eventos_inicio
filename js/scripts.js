//querySelector
const heading = document.querySelector('#heading');//retorna 0 o 1 elemento 
heading.textContent = "nuevo heading";
heading.classList.add('Nueva-clase');

console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para el enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

//getElementById
// const heading2 = getElementById('heading');
// console.log(heading2);
//generar un nuevo en lace 
const nuevoEnlace = document.createElement('A') //solo etiquetas en mayusculas

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agragarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// console.log(nuevoEnlace);

console.log(1);

window.addEventListener('load', x);

window.onload = function(){
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){//solo se espera que se descarge el HTML, peor no el CSS o imagenes
    console.log(4);
})

console.log(5);

function x() {
    console.log(3);
}

window.onscroll = function(e) {
    console.log(e);
}

//seleccionar elementos y asociarles un evanto 
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();
    console.log('Enviando formulario..')
})

//validar un formulario