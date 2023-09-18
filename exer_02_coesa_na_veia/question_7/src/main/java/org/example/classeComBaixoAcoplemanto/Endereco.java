package org.example.classeComBaixoAcoplemanto;

public class Endereco {
    private String rua;
    private String numero;
    private String bairro;

    Endereco(String rua, String numero, String bairro) {
         if (!validAddress()) {

         }

         this.rua = rua;
         this.numero = numero;
         this.bairro = bairro;
    }

    Boolean validAddress() {
        //Verifica se o endereço é válido;
    }

}
