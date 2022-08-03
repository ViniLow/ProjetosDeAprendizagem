export class Cliente {
    constructor(nome, cpf, dataNascimento, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._senha = senha;
    }

    autenticar(senha) {
        return this._senha == senha;
    }

    get cpf() {
        return this._cpf;
    }

}