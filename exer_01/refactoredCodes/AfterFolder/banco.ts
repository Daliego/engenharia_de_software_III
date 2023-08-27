import { Conta } from "./conta";
import { Poupanca } from "./contaPoupanca";
import { AppError } from "./errors/appError";

export class Banco {
  private contas: Conta[] = [];

  inserir(c: Conta): void {
    if (this.contaExistente(c.consultarNumero)) {
      throw new AppError(`Número de conta existente`);
    }
    
    this.contas.push(c);
  }

  consultar(numero_da_conta: string): Conta {
    const conta: Conta | undefined = this.findConta(numero_da_conta);

    if (!conta) {
      throw new AppError("Conta Inexistente");
    }
  
    return conta
  }

  private contaExistente(numero_da_conta: string): boolean {
    return this.contas.some(
      (conta) => conta.consultarNumero === numero_da_conta
    );
  }

  private findConta(numero_da_conta: string): Conta | undefined {
    return this.contas.find(
      (conta) => conta.consultarNumero === numero_da_conta
    );

  }

  private consultarPorIndice(numero_da_conta: string): number {
    const index: number = this.contas.findIndex((conta) => {
      conta.consultarNumero === numero_da_conta;
    });

    if (index === -1) {
      throw new AppError("Conta Inexistente");
    }
    
    return index;
  }

  alterar(c: Conta): void {
    let indice = this.consultarPorIndice(c.consultarNumero);
    this.contas[indice] = c;
  }

  excluir(numero_da_conta: string): void {
    const index = this.consultarPorIndice(numero_da_conta);

    this.contas.splice(index, 1);
  }

  depositar(numero_da_conta: string, valor: number): void {
    let indice: number = this.consultarPorIndice(numero_da_conta);
    this.contas[indice].depositar(valor);
  }

  sacar(numero: string, valor: number): void {
    let indice = this.consultarPorIndice(numero);
    this.contas[indice].sacar(valor);
  }

  transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
    let contaCreditada = this.consultar(numeroCredito);
    let contaDebitada = this.consultar(numeroDebito);
    contaCreditada.transferir(contaDebitada, valor);
  }

  totalDeContas(): number {
    return this.contas.length;
  }

  totalDepositos(): number {
    let total: number = 0;

    this.contas.map((conta) => (total += conta.consultarSaldo));

    return total;
  }

  mediaSaldos(): number {
    return this.totalDepositos() / this.totalDeContas();
  }

  rederJuros(numero: string): void {
    let conta: Conta = this.consultar(numero);

    if (conta instanceof Poupanca) {
      (<Poupanca>conta).renderJuros();
    }

    throw new AppError("Conta diferente de poupança");
  }

  showContas(): Conta[] {
    return this.contas;
  }
}
