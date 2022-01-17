export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    import { Conta } from "./Conta.js";

    export class ContaPoupanca extends Conta{
        constructor(saldoInicial, cliente, agencia) {
            super(saldoInicial, cliente, agencia);
        }
    
    }