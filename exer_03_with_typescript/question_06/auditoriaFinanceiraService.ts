import { exec } from "child_process";
import { Investimento } from "../question_05/Investimento";
import { ContaCorrente } from "../question_05/contaConrrente";
import { Transacao } from "../question_05/trasacao";

type Auditaveis = ContaCorrente | Investimento | Transacao;
 

interface Auditavel {
    auditar(): void;
}

export class ContaCorrenteAuditar implements Auditavel {
    contaCorrente: ContaCorrente;

    constructor(contaCorrente: ContaCorrente) {
        this.contaCorrente = contaCorrente;
    }

    auditar(): void {
        // Lógica de auditoria para Conta Corrente...
    }
}

export class InvestimentoAuditar implements Auditavel {
    auditar(): void {
        // Lógica de auditoria para Investimento...
    }
}

export class TrasacaoAuditar implements Auditavel {

    auditar(): void {
        // Lógica de auditoria para Transacao...
    }
}


class AuditoriaFinanceiraService {

    public executar(auditaveis: Auditavel[]): void {
        auditaveis.forEach(auditavel => {
            auditavel.auditar();
        });
    }
}
