import { CalculadoraImpostoDeRenda } from "../../question_03/calculadoraImpostoDeRenda";
import { RelatorioImpostoDeRenda } from "../../question_03/relatorioImpostoDeRenda";

export class ImpostoDeRendaWithValidacoes {
  private cpfContribuinte: string;
  private rendimentos: number[];
  private despesas: number[];

  constructor(
    cpfContribuinte: string,
    rendimentos: number[],
    despesas: number[]
  ) {
    this.validarCPF(cpfContribuinte)
    this.validarRendimentosDespesas(rendimentos, despesas)
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

  validarCPF(cpf: string): boolean {
    if (cpf === '') {
        throw new Error('CPF não pode ser vazio');
    }

    if (cpf.length !== 11) {
        throw new Error('CPF deve ter 11 dígitos');
    }

    return true
  }

  validarRendimentosDespesas(rendimentos: number[], despesas: number[]): boolean {
    if (rendimentos.length > 5) {
        throw new Error('Não pode haver mais de 5 rendimentos');
    }
    
    rendimentos.forEach((rendimento) => { if (rendimento < 0) throw new Error('Rendimento não pode ser negativo') })

    despesas.forEach((despesa) => { if (despesa < 0) throw new Error('Despesa não pode ser negativa') })

    return true
  }

  processar(): void {
    const calculadora: CalculadoraImpostoDeRenda =
      new CalculadoraImpostoDeRenda();
    const impostoDevido = calculadora.calcular(this.Rendimentos, this.Despesas);

    const relatorio: RelatorioImpostoDeRenda = new RelatorioImpostoDeRenda();
    const relatorioGerado = relatorio.gerarRelatorio(
      impostoDevido,
      calculadora
    );
  }
}
