import { TipoInvestimento } from "./contaConrrente";

export class InvestimentoService {

// Método que viola o SRP, pois avaliar risco não é responsabilidade do investimento
static avaliarRisco(tipo: TipoInvestimento, valor: number): string {
    if (valor > 200 && tipo === TipoInvestimento.RENDA_VARIAVEL) {
        return "Investimento inválido";
    }

    return 'Investimento válido';
}

}