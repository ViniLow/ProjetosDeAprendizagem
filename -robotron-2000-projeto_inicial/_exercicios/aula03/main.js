let buttonEsconder = document.createElement('button');
buttonEsconder.innerHTML = "Esconder"

function mostraTintas() {
    document.querySelector('[data-display]').dataset.display = "mostrar"
    document.body.appendChild(buttonEsconder);
}

buttonEsconder.addEventListener('click', (evento) => {
    document.querySelector('[data-display]').dataset.display = 'none'
    document.body.removeChild(buttonEsconder)
})