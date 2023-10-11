import { CalculadoraImpostoDeRenda } from "../../question_03/calculadoraImpostoDeRenda";
import { ImpostoDeRendaWithValidacoesInOtherClass } from "./impostoDeRenda";

export class RelatorioImpostoDeRenda {
    gerarRelatorio(inpostoDeRenda: ImpostoDeRendaWithValidacoesInOtherClass, calculadoraImpostoDeRenda: CalculadoraImpostoDeRenda) {
        console.log("CPF: " + inpostoDeRenda.CpfContribuinte);
        console.log("Rendimentos: " + inpostoDeRenda.Rendimentos);
        console.log("Despesas: " + inpostoDeRenda.Despesas);
        console.log("Imposto Devido: " + calculadoraImpostoDeRenda.calcular(inpostoDeRenda.Rendimentos, inpostoDeRenda.Despesas));
    }
}