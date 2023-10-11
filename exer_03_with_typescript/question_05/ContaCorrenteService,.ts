import { Transacao } from "./trasacao";
import { TrasacaoService } from "./trasacaoService";

export class ContaCorrenteService {
    static filtrarTransacoesInvalidas(trasacaoes: Transacao[]): Transacao[] {

        const transacoesInvalidas: Transacao[] = trasacaoes.filter((trasacao) => {!TrasacaoService.verificarFraude(trasacao)});

        return transacoesInvalidas;
    }
}