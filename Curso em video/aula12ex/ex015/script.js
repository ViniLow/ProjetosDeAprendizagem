function Verificar() {
    var agora = new Date();
    var ano = agora.getFullYear();
    var infAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (infAno.value.length == 0 || Number(infAno.value) > ano) {
        alert('[ERRO] Verifique as informações fornecidas!')
    } else {
        var infSex = document.getElementsByName('radSex');
        var idade = ano - Number(infAno.value);
        genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (infSex[0].checked) {
            genero = 'Homem'
            if (idade <= 12) {
                img.setAttribute('src', 'foto-menino.png');
                genero = 'um menino'
            } else if (idade <= 21) {
                img.setAttribute('src', 'foto-garoto.png');
                genero = 'um rapaz'
            } else if (idade <= 50) {
                img.setAttribute('src', 'foto-homem.png');
                genero = 'um homem'
            } else {
                img.setAttribute('src', 'foto-idoso.png');
                genero = 'um idoso'
            }
        } else if (infSex[1].checked) {
            genero = 'Mulher'
            if (idade <= 12) {
                img.setAttribute('src', 'foto-menina.png');
                genero = 'uma menina';
            } else if (idade <= 21) {
                img.setAttribute('src', 'foto-garota.png');
                genero = 'uma jovem';
            } else if (idade <= 50) {
                img.setAttribute('src', 'foto-mulher.png');
                genero = 'uma mulher'
            } else {
                img.setAttribute('src', 'foto-idosa.png');
                genero = 'uma idosa';
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos de idade</p>`;
        res.appendChild(img)
    }
}