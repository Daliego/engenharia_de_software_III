import { AppError } from "./errors/appError";

export class Conta {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo?: number) {
        this.numero = numero;
        this.depositar(saldo ?? 0);
    }

    sacar(valor: number): void {
        this.validarValor(valor);

        if (this.validarValor(this.consultarSaldo - valor)){
            throw new AppError("Saldo insuficiente");
        }

        this.saldo -= valor;
    }

    depositar(valor: number): void {
        this.validarValor(valor);
        this.saldo += valor;
    }

    public get consultarNumero(): string {
        return this.numero;
    }

    public get consultarSaldo(): number {
        return this.saldo;
    }

    transferir(conta : Conta, valor : number): void{
        this.sacar(valor);
        conta.depositar(valor);
    }

    validarValor(valor: number): boolean {
        if (valor <= 0) {
            throw new AppError("Valor inválido");
        }

        return true;
    }
}