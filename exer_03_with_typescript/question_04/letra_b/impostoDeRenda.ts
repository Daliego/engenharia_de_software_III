import { CalculadoraImpostoDeRenda } from "../../question_03/calculadoraImpostoDeRenda";
import { RelatorioImpostoDeRenda } from "./relatorioImpostoDeRenda";
import { ValidarImpostoDeRenda } from "./validarImpostoDeRenda";

export class ImpostoDeRendaWithValidacoesInOtherClass {
  private cpfContribuinte: string;
  private rendimentos: number[];
  private despesas: number[];

  constructor(
    cpfContribuinte: string,
    rendimentos: number[],
    despesas: number[]
  ) {
    ValidarImpostoDeRenda.validarCPF(cpfContribuinte)
    ValidarImpostoDeRenda.validarRendimentosDespesas(rendimentos, despesas)
    this.cpfContribuinte = cpfContribuinte;
    this.rendimentos = rendimentos;
    this.despesas = despesas;
  }

  get CpfContribuinte(): string {
    return this.cpfContribuinte;
  }

  set CpfContribuinte(cpf: string) {
    this.cpfContribuinte = cpf;
  }

  get Rendimentos(): number[] {
    return this.rendimentos;
  }

  set Rendimentos(rendimentos: number[]) {
    this.rendimentos = rendimentos;
  }

  get Despesas(): number[] {
    return this.despesas;
  }
  processar(): void {
    const calculadora: CalculadoraImpostoDeRenda =
      new CalculadoraImpostoDeRenda();
    const impostoDevido = calculadora.calcular(this.Rendimentos, this.Despesas);

    const relatorio: RelatorioImpostoDeRenda = new RelatorioImpostoDeRenda();
    const relatorioGerado = relatorio.gerarRelatorio(
      this,
      calculadora
    );
  }
}
