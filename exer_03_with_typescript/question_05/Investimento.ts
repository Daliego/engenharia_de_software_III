import { TipoInvestimento } from "./contaConrrente";
import { InvestimentoService } from "./investimentoService";

export class Investimento {
    private id: number;
    private valor: number;
    private tipo: TipoInvestimento;
    private statusRisco: string;

    constructor(id: number, valor: number, tipo: TipoInvestimento) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
        this.statusRisco = InvestimentoService.avaliarRisco(tipo, valor);
    }

    public getId(): number {
        return this.id;
    }

    public getValor(): number {
        return this.valor;
    }

    public getTipo(): TipoInvestimento {
        return this.tipo;
    }
}