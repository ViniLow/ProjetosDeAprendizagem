function tocaSom(elementoAudio) {
    let elemento = document.querySelector(elementoAudio)
    if (elemento === null || elemento.localName != "audio") {
        console.log('Elemento não encontrado ou não é um seletor válido');
    } else {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let c = 0;

while (c < 9) {
    let tecla = listaDeTeclas[c];
    let instrumento = listaDeTeclas[c].classList[1];
    tecla.onclick = function() {
        tocaSom(`#som_${instrumento}`);
    }
    c++
}
*/

for (let c = 0; c < listaDeTeclas.length; c++) {
    let tecla = listaDeTeclas[c];
    let instrumento = listaDeTeclas[c].classList[1];
    tecla.onclick = function() {
        tocaSom(`#som_${instrumento}`)
    }
    tecla.onkeydown = function(evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}