import { TipoTransacao } from "./contaConrrente";

export class Transacao {
    private id: number;
    private valor: number;
    private tipo: TipoTransacao;

    constructor(id: number, valor: number, tipo: TipoTransacao) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }

    public getId(): number {
        return this.id;
    }

    public getValor(): number {
        return this.valor;
    }

    public getTipo(): TipoTransacao {
        return this.tipo;
    }
}
