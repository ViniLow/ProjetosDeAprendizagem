// const enviarNotas = document.querySelector('#calcular');

// enviarNotas.addEventListener('click', function() {
//     console.log('Fui clicado');
// })


const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
    resultado.innerHTML = "Fui clicado"
})