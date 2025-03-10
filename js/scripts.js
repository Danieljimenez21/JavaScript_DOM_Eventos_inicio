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