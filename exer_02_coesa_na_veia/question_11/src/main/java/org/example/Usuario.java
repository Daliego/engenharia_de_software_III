package org.example;

import java.util.List;

public class Usuario {
    private List<Conteudo> conteudoList;

    public void addConteudo(String text) {
        Conteudo conteudo = new Conteudo();
        conteudo.add(text);
    }
}
