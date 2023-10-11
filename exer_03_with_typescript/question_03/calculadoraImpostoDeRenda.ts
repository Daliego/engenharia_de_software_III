export class CalculadoraImpostoDeRenda {
  calcular(rendimento: number[], despesas: number[]) {
    const rendaTotal = rendimento.reduce((acc, val) => acc + val, 0);
    const despesaTotal = despesas.reduce((acc, val) => acc + val, 0);
    const baseCalculo = rendaTotal - despesaTotal;

    if (baseCalculo <= 1903.98) {
      return 0.0;
    }

    if (baseCalculo <= 2826.65) {
      return baseCalculo * 0.075 - 142.8;
    }

    // E assim por diante, para outros intervalos...
    return baseCalculo * 0.275 - 869.36; // Para bc acima de 4664.68
  }
}
