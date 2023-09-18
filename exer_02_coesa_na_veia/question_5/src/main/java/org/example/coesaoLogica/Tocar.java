package org.example.coesaoLogica;

import javax.lang.model.type.NullType;

public class Tocar {
    public Boolean haveArea;
    public double area;
    public String typeArea;
    public double side1;
    public double side2;

    public double calcularArea() {
        if (haveArea) {
            return area;
        } else if (typeArea.isEmpty()){
            return side1 * side2;
        } else {
            if (typeArea.equals("triangulo")) {
                return (side2 * side1) / 2;
            } else if (typeArea.equals("lozangulo")) {
                return (side1 * side2) / 2;
            } else {
                return side2 * side1;
            }
        }
    }
}
