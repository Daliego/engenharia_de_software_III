package org.example;

import java.lang.reflect.Array;
import java.util.Arrays;

public class ArrayUtilitario {
        private int[] array;

        public void ordenar() {
                Arrays.stream(array).sorted();
        }

        public void embaralhar(int[] array) {
                Arrays.stream(array).unordered();
        }
}