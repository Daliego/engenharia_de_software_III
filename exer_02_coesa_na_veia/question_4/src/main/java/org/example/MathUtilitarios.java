package org.example;

import org.apache.commons.math3.stat.descriptive.moment.Variance;

import java.util.Arrays;
import java.util.Optional;
import java.util.OptionalDouble;

public class MathUtilitarios {
    private double[] numeros;

    public double calcularMedia() {
        OptionalDouble average = Arrays.stream(numeros).average();

        if (average.isEmpty()) {
            return -1;
        }

        return average.getAsDouble();
    }

    public double calcularDesvioPadrão() {
        return Math.sqrt(new Variance().evaluate(numeros));
    }
}
