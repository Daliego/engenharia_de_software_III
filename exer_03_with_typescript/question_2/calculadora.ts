import { Operacao } from "./operacao";

export class Calculadora {
  private readonly a: number;
  private readonly b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  calcular(operacoes: Operacao[]): number[] {
    const resultados: number[] = [];

    for (const operacao of operacoes) {
      const resultado: number = operacao.executar(this.a, this.b);

      resultados.push(resultado);
    }

    return resultados;
  }
}
