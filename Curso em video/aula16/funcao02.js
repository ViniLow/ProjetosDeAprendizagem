function soma(n1 = 0, n2 = 0) { // caso não seja enviado os parametros necessários, podemos atruibuir um valor default. Nesse caso evitará o retorno NaN
    return n1 + n2
}

let resposta = soma(7, 3);

console.log(resposta)