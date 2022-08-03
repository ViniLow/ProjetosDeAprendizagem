function Carregar() {
    var agora = new Date();
    var hora = agora.getHours();
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = `Olá! Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = 'fotomanha.png'
        document.body.style.background = '#bbb795'
    } else if (hora <= 18) {
        // tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#cb803c'
    } else {
        // noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#061e21'
    }
}