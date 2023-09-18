package org.example.coesaoFuncional;

public class Conta {
    private double saldo;
    private String numero;

    void debitar(double valor) {
        if (saldo - valor >= 0) {
            saldo -= valor;
        }

        throw new RuntimeException();
    }

}
