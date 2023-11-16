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

class Pasageiro {
  private pessoa: Pessoa;
  private numeroSmiles: number;

  constructor(pessoa: Pessoa, numeroSmiles: number) {
    this.pessoa = pessoa;
    this.numeroSmiles = numeroSmiles;
  }

  public getNome(): string {
    return this.pessoa.getNome();
  }

  public setNome(nome: string): void {
    this.pessoa.setNome(nome);
  }

  public getNumeroSmiles(): number {
    return this.numeroSmiles;
  }

  public setNumeroSmiles(numeroSmiles: number): void {
    this.numeroSmiles = numeroSmiles;
  }

  public getEndereco(): string {
    return this.pessoa.getEndereco();
  }

  public setEndereco(endereco: string): void {
    this.pessoa.setEndereco(endereco);
  }
}


//Nesse caso se eu quiser adicionar um novo tipo de pessoa, como um piloto, eu não preciso alterar a nenhuma outra classe que tenha pessoa como composição.
//E todos os métodos de mudanças da classe pessoa, são delegados para ela.