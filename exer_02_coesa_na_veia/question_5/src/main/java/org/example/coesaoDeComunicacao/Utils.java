package org.example.coesaoDeComunicacao;

import java.time.LocalDate;

public class Utils {
    static public Integer ebcryptPassword(String password) {
        return password.hashCode();
    }

    static Boolean isValidEmail(String email) {
        return email.contains("@gmail.com");
    }

    static Boolean isLowerDate(LocalDate maxDate, Integer mounths) {
        return maxDate.isAfter(LocalDate.now().plusMonths(mounths));
    }
}
