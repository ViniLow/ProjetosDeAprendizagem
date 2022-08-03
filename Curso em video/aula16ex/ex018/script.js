let valores = []
let maiorValor = "";
let menorValor = 101;
let soma = 0;
let comprimento = ""; // essa variavel usar só na função Finalizar
let media = ""; // essa variavel usar só na função Finalizar
let caixaValores = document.getElementById('caixaValores')

function Adicionar() {
    res.innerHTML = "";
    let txtn = document.getElementById("txtn")
    let num = Number(txtn.value)

    if (txtn.value.length == 0 || num < 1 || num > 100 || valores.indexOf(num) != -1) {
        alert("Você tentou adicionar um valor inválido ou já adicionado!")
    } else {
        valores.push(num)
        caixaValores.innerHTML = ""
            //window.alert(`Você pegou o valor ${valores[3]}`)
        if (num > maiorValor) {
            maiorValor = num
        }
        if (num < menorValor) {
            menorValor = num
        }
        soma += num;
        for (let pos in valores) {
            let option = document.createElement('option')
            option.text = `Valor ${valores[pos]} adicionado`
            option.value = valores[pos]
            caixaValores.appendChild(option)
        }
        txtn.value = ""
        txtn.focus();
    }
}

function Finalizar() {

    if (soma == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let res = document.getElementById('res');
        let comprimento = valores.length
        let media = soma / comprimento;
        res.innerHTML += `<p>Ao todo, temos ${comprimento} números cadastrados</p><p>O maior valor informado foi ${maiorValor}.</p><p>O menor valor informado foi ${menorValor}.</p><p>Somando todos os valores, temos ${soma}.</p><p>A média dos valores digitados é ${media}.</p>`;
    }
}