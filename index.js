// querySelector()

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

button.addEventListener('click', addInputValues)

function addInputValues(event) {
    const addInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + addInputs;

}

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo'; 
// h1.classList.add('rojo'); 
// h1.classList.remove('verde'); 
// input.value = "456"
// const img = document.createElement('img'); 
// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png'); //modificar una clase 
// console.log(img); 
// pid.innerHTML = ""; 
// pid.appendChild(img);