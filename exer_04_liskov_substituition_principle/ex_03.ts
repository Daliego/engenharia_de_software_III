class Eletrodomestico {
    private nome: string;
    private voltagem: number;
    private conectadoNaTomada: boolean = false;
    private ligado: boolean = false;

    constructor(nome: string, voltagem: number) {
        this.nome = nome;
        this.voltagem = voltagem;
    }

    getNome(): string {
        return this.nome;
    }
    
    setNome(nome: string): void {
        this.nome = nome;
    }

    getVoltagem(): number {
        return this.voltagem;
    }

    setVoltagem(voltagem: number): void {
        this.voltagem = voltagem;
    }


    conectarTomada(): void {
        this.conectadoNaTomada = true;
    }

    ligar(): void  {
        if (this.conectadoNaTomada) {
            this.ligado = true;
        } else {
            console.log("Não é possível ligar o aparelho, pois ele não está conectado na tomada.");
        }
    }
}



class Ventilador extends Eletrodomestico {
    private velocidade: number = 0;

    constructor(nome: string, voltagem: number, velocidade: number) {
        super(nome, voltagem);
        this.velocidade = velocidade;
    }

    getVelocidade(): number {
        return this.velocidade;
    }

    setVelocidade(velocidade: number): void {
        this.velocidade = velocidade;
    }

    aumentarVelocidade(): void {
        if (this.getVelocidade() < 3) {
            this.setVelocidade(this.getVelocidade() + 1);
        } else {
            console.log("O ventilador já está na velocidade máxima.");
        }
    }

    diminuirVelocidade(): void {
        if (this.getVelocidade() > 0) {
            this.setVelocidade(this.getVelocidade() - 1);
        } else {
            console.log("O ventilador já está na velocidade mínima.");
        }
    }
}

// Um abajur de mesa funciona a base de pilhas, então não precisa ser conectado na tomada.
class AbajurDeMesa extends Eletrodomestico {
    private corDaLuz: string = "branca";

    constructor(nome: string, voltagem: number, corDaLuz: string) {
        super(nome, voltagem);
        this.corDaLuz = corDaLuz;
    }

    getCorDaLuz(): string {
        return this.corDaLuz;
    }

    setCorDaLuz(corDaLuz: string): void {
        this.corDaLuz = corDaLuz;
    }
}
