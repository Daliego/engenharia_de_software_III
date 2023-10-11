import { CalculadoraImpostoDeRenda } from "./calculadoraImpostoDeRenda";
import { ImpostoDeRenda } from "./inpostoDeRenda";

export class RelatorioImpostoDeRenda {
    gerarRelatorio(inpostoDeRenda: ImpostoDeRenda, calculadoraImpostoDeRenda: CalculadoraImpostoDeRenda) {
        console.log("CPF: " + inpostoDeRenda.CpfContribuinte);
        console.log("Rendimentos: " + inpostoDeRenda.Rendimentos);
        console.log("Despesas: " + inpostoDeRenda.Despesas);
        console.log("Imposto Devido: " + calculadoraImpostoDeRenda.calcular(inpostoDeRenda.Rendimentos, inpostoDeRenda.Despesas));
    }
}