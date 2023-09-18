package org.example.coesaoSequencial;

public class calcularAposta {
    Integer apostadores;
    double valorAposta;
    double resultado;

    public void calcularResultado() {
        calcularResultado(apostadores, valorAposta);
        duplicarResulto();
        dividirResultado();
        exibirResultado();
    }

    private void calcularResultado(int numeroDePessoas, double valor) {
        resultado = numeroDePessoas * valor;
    }

    private void duplicarResulto() {
        resultado *= 2;
    }

    private void dividirResultado() {
        resultado /= 3;
    }

    private void exibirResultado() {
        System.out.println("O resultado é: " + resultado);
    }
}
