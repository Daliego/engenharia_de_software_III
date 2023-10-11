import { Transacao } from "./trasacao";

export class TrasacaoService {
  static verificarFraude(trasacao: Transacao): boolean {
    let isFraudulenta = false;

    if (trasacao.getValor() > 1000) {
      return false;
    }
    return isFraudulenta;
  }
}
