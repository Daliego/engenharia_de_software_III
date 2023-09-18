package org.example.classeComBaixoAcoplemanto;

public class Pessoa {
    private String cpf;
    private String nome;

    //Address will only be accepted if is a valid one
    private Endereco endereco;

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}
