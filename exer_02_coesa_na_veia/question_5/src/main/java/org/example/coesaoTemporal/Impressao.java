package org.example.coesaoTemporal;

public class Impressao {
    private String tipoDePapel;
    private String cor;
    private String fonte;

    private String titulo;

    private Integer quantidade;


    public void imprimir() {
        tipoDePapel = "A4";
        cor = "PRETO";
        fonte = "ARIAL";
        titulo = "PAPEL4";
        quantidade = 10;
    }

}
