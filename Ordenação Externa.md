# Ordenação Externa

Aplicada quando o conjunto a ser ordenado é maior do que a memória principal (MP, ex: RAM)

Os dados são armazenados em Memória Externa (ME), com tempo de **acesso** muito maiores do que a MP. Os algoritmos devem **diminuir o acesso à ME**.

Principal custo:

## Intercalação balanceada de vários caminhos

Complexidade: O(log<sub>f</sub>(n/m))

> MP composta por n elementos:
>
> - f fitas = n elementos (dados)
> - f fitas = n elementos (intercalação)
>
> 2f fitas / f = n

Passa um ponteiro em cada fita de dados, e realiza Merge Sort até o fim de cada bloco para uma fita de intercalação

## Intercalação polifásica

Quando alguma fita fica vazia, a saída vira a entrada.

## Por seleção

Lê o arquivo em um heap de mínimo.

Bloco = quantidade de elementos que cabem na memória

Retira a raiz e bota na fita, pega outro elemento do arquivo e coloca no lugar da raiz.

Se o elemento for menor, inverte a marcação e reconstrói o heap.

Marcação = o que for diferente do atual é maior que todos os outros elementos e comparáveis entre si.

O novo bloco começa quando um valor com marcação diferente da atual sai da raiz.

Intercala na fita restante. A fita vazia vira a saída e os blocos que restam.
