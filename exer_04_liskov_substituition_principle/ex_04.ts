class Pessoa {
    private nome: string;
    private endereco: string;

    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }
}


class Passageiro extends Pessoa {
    private numeroSmiles: number;

    constructor(nome: string, endereco: string, numeroSmiles: number) {
        super(nome, endereco);
        this.numeroSmiles = numeroSmiles;
    }

    public getNumeroSmiles(): number {
        return this.numeroSmiles;
    }

    public setNumeroSmiles(numeroSmiles: number): void {
        this.numeroSmiles = numeroSmiles;
    }
}

class Piloto extends Pessoa {
    private horasDeVoo: number;

    constructor(nome: string, endereco: string, horasDeVoo: number) {
        super(nome, endereco);
        this.horasDeVoo = horasDeVoo;
    }

    public getHorasDeVoo(): number {
        return this.horasDeVoo;
    }

    public setHorasDeVoo(horasDeVoo: number): void {
        this.horasDeVoo = horasDeVoo;
    }
}

class Agente extends Pessoa {
    private codigo: number;

    constructor(nome: string, endereco: string, codigo: number) {
        super(nome, endereco);
        this.codigo = codigo;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }
}


// Problema: Uma pessoa pode ser um passageiro ou um piloto, mas não pode ser os dois ao mesmo tempo.
// Criar subclasses com multiplos papéis pode levar a um crescimento na hierarquia de classes (7 ao todo).