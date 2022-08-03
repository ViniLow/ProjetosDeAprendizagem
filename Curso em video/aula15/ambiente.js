let vetor = [1, 9, 3, 4, 8];


console.log(vetor)

vetor.push(7) // o método push insere um valor acrescentando mais um elemento.

// Lemos um vetor como Array. Um Array é composto de elementos, sendo que um elemento é composto de um valor e uma chave (Key) ou indentificação (index).

console.log(vetor)

// o metodo sort organiza os elementos de uma array

vetor.sort()

console.log(vetor)

// o metodo indexOf retorna a chave de um determinado valor.

let pos = vetor.indexOf(4) // nesse caso o 4 está na posição ou chave 2, pois as chaves começam com o indice 0.

console.log(pos)

// se o valor não existe na array, o indexOf retornará -1:

pos = vetor.indexOf(5)

console.log(pos)

// se quisermos tornar esse retorno mais legível, podemos usar uma condicionar if:

if (pos == -1) {
    console.log(`O valor não existe no array vetor`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


//podemos descobrir quantos elementos existem em uma array usando o atributo length

console.log(`O vetor tem ${vetor.length} posições.`)

// podemos formatar a exibição da array usando uma estrutura de repetição como for, while ou do while.

for (pos = 0; pos < vetor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`);
}

// podemos usar uma versão mais simplificada do for que é exclusiva para vetores e objetos.

console.log('----------------------------------------------')

for (let posicao in vetor) {
    console.log(`A posição ${posicao} tem o valor ${vetor[posicao]}`)
}