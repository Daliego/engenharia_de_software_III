import { Autor } from "./autor";

export class Post {
    private id: number;
    private texto: string;
    private autor: Autor;
    private data: Date;
    private quantidadeDeLikes: number;

    constructor(id: number, texto: string, autor: Autor, data: Date) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.data = new Date(data.getTime());
        this.quantidadeDeLikes = 0;
    }

    get Id(): number {
        return this.id;
    }

    get Texto(): string {
        return this.texto;
    }

    get Autor(): Autor {
        return this.autor;
    }

    get Data(): Date {
        return new Date(this.data.getTime());
    }

    get QuantidadeDeLikes(): number {
        return this.quantidadeDeLikes;
    }
}
