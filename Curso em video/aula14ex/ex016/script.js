function Contar() {
    var res = document.getElementById('res')
    var contando = document.getElementById('contando')
    var inicio = document.getElementById('inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.getElementById('passo')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    contando.innerHTML = ""

    if (fim.value.length == 0 || inicio.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<p>Impossível contar</p>'
    } else if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1;
    } else if (i < f) {
        res.innerHTML = 'Contando:'
        for (i; i <= f; i += p) {
            contando.innerHTML += (i + ` \u{1F449} `)
        }
    } else {
        res.innerHTML = 'Contando:'
        for (i; i >= f; i -= p) {
            contando.innerHTML += (i + ` \u{1F449} `)
        }
    }
    contando.innerHTML += `\u{1F3C1}`
}