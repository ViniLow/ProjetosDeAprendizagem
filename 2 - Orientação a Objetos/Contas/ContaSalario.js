import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(cliente, 1001, 0);
    }

    sacar(valor) {
        const taxa = 1.15;
        return this._sacar(valor, taxa);
    }
}