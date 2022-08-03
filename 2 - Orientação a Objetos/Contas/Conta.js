export class Conta {

    constructor(cliente, agencia, saldo) {
        if (this.constructor == Conta) {
            throw new Error("Voce não deve instanciar um objeto do tipo Conta");
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        throw new Error("O método sacar da Conta é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo > valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        conta.depositar(this.sacar(valor));
    }
}