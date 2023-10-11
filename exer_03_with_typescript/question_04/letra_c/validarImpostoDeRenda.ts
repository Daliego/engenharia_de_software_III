import { ImpostoDeRendaWithValidacoesInOtherClass } from "./impostoDeRenda";

interface Validacoes {
  validar(impostoDeRensda: ImpostoDeRendaWithValidacoesInOtherClass): boolean;
}

class ValidarCpfVazio implements Validacoes {
  validar(impostoDeRenda: ImpostoDeRendaWithValidacoesInOtherClass): boolean {
    if (impostoDeRenda.CpfContribuinte === "") {
      return true;
    }
    return false;
  }
}

class ValidarCpfTamanho implements Validacoes {
  validar(impostoDeRenda: ImpostoDeRendaWithValidacoesInOtherClass): boolean {
    if (impostoDeRenda.CpfContribuinte.length !== 11) {
      return true;
    }
    return false;
  }
}

class validarNumeroDeRendimentos implements Validacoes {
  validar(impostoDeRenda: ImpostoDeRendaWithValidacoesInOtherClass): boolean {
    if (impostoDeRenda.Rendimentos.length > 5) {
      return true;
    }
    return false;
  }
}

class validarRendimentosDespesas implements Validacoes {
  validar(impostoDeRenda: ImpostoDeRendaWithValidacoesInOtherClass): boolean {
    impostoDeRenda.Rendimentos.forEach((rendimento) => {
      if (rendimento < 0) return true;
    });

    impostoDeRenda.Despesas.forEach((despesa) => {
      if (despesa < 0) return true;
    });

    return false;
  }
}

export class ValidarImpostoDeRenda {
  validacoes: Validacoes[];

  constructor(validacoes: Validacoes[]) {
    this.validacoes = validacoes;
  }

  validarImpostoDeRenda(
    impostoDeRenda: ImpostoDeRendaWithValidacoesInOtherClass
  ): boolean {
    this.validacoes.forEach((validacao) => {
      if (validacao.validar(impostoDeRenda)) {
        throw new Error("Erro de validação");
      }
    });

    return false;
  }
}
