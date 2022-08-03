var agora = new Date();
var diaSem = agora.getDay(); // obtem o dia da semana em numero conforme abaixo

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

// diaSem = 7 // poderá simular outros dia da semana aqui.

console.log(diaSem);

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break // esse break é obrigatorio em toda case. Se não, ele execultará todos os cases que aparecem logo abaixo.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: // caso nenhuma case acima seja verdades, será execultado o default.
        console.log('[Erro] Data inválida')
        break // opicional
}