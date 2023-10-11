import { Transacao } from "./trasacao";

export enum TipoInvestimento {
    RENDA_FIXA,
    RENDA_VARIAVEL
}

export enum TipoTransacao {
    CREDITO,
    DEBITO
}

export class ContaCorrente {
    private numero: string;
    private saldo: number;
    private transacoes: Transacao[];

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
        this.transacoes = [];
    }

    public getNumero(): string {
        return this.numero;
    }

    public getSaldo(): number {
        return this.saldo;
    }
}