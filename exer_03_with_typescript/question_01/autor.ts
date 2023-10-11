export class Autor {
    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    // Getter para o atributo 'id'
    get Id(): number {
        return this.id;
    }

    // Setter para o atributo 'id'
    set Id(id: number) {
        this.id = id;
    }

    // Getter para o atributo 'nome'
    get Nome(): string {
        return this.nome;
    }

    // Setter para o atributo 'nome'
    set Nome(nome: string) {
        this.nome = nome;
    }

    // Getter para o atributo 'email'
    get Email(): string {
        return this.email;
    }

    // Setter para o atributo 'email'
    set Email(email: string) {
        this.email = email;
    }
}