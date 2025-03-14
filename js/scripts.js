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

// console.log(1);

// window.addEventListener('load', x);

// window.onload = function(){
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function(){//solo se espera que se descarge el HTML, peor no el CSS o imagenes
//     console.log(4);
// })

// console.log(5);

// function x() {
//     console.log(3);
// }

// window.onscroll = function(e) {
//     console.log(e);
// }

//seleccionar elementos y asociarles un evanto 
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault();

//     //validar un formulario
//     console.log('Enviando formulario')
// })


//eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input',leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)
//eventos de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //validar el formulario
    const {nombre, email, mensaje} = datos;

        if(nombre === "" || email === "" || mensaje === "") {
            mostrarAlerta('Todos los campos son obligatorios', true);
            return; //corta la ejecucion del codigo
        } 

        //crear la alerta de enviar correctamente
        mostrarAlerta("Mensaje enviado correctamente");
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);

     //desaparezca despues de 5 segundos
     setTimeout(() => {
        alerta.remove();
    }, 5000);
}
