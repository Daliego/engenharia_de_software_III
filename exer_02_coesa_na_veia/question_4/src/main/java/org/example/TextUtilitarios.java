package org.example;

public class TextUtilitarios {
    private String text;
    public String removerEspacos() {
        return text.trim();
    }
    public String[] quebrarEmPalavras(String texto) {
        return  text.split(" ");
    }
}
