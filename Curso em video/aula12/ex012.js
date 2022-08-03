var agora = new Date();
var hora = agora.getHours(); // Ele obtem a hora que está indicado no seu computador ou servidor.
//var hora = 13
console.log(`Agora são ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}