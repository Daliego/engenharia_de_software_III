package org.example.coesaoProcedural;

import java.util.Arrays;

public class Pessoa {
    private String nome;
    private String idade;

    private String[] likedMovies = {
        "Batman: Cavaleiro das trevas", "O homem de aço"
    };

    private String escolherFilme() {
        return Arrays.stream(likedMovies).unordered().findFirst().get();
    }
}
