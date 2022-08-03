import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(cliente, agencia, saldo) {
        super(cliente, agencia, saldo)
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}