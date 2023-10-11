export class ValidarImpostoDeRenda {
  static validarCPF(cpf: string): boolean {
    if (cpf === '') {
        throw new Error('CPF não pode ser vazio');
    }

    if (cpf.length !== 11) {
        throw new Error('CPF deve ter 11 dígitos');
    }

    return true
  }

  static validarRendimentosDespesas(rendimentos: number[], despesas: number[]): boolean {
    if (rendimentos.length > 5) {
        throw new Error('Não pode haver mais de 5 rendimentos');
    }
    
    rendimentos.forEach((rendimento) => { if (rendimento < 0) throw new Error('Rendimento não pode ser negativo') })

    despesas.forEach((despesa) => { if (despesa < 0) throw new Error('Despesa não pode ser negativa') })

    return true
  }
}