# Pseudo-código

Varre o array e substitui o índice atual pelo que for menor dos restantes.

```c
// Incompleto

swap(vetor v, i, j) {
    temp = v[i]
    v[i] = v[j];
    v[j] = temp;
}

selection_sort(vetor v, size n) {
    for (i = 0; i < n; i++) {
        indice_menor = achar_menor(vetor, i, n)

        if (indice_menor != i) {
            swap(v, indice_menor, i);
        }
    }
}
```
