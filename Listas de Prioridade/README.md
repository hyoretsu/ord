Uma lista de prioridade é uma estrutura capaz de inserir e remover, o maior ou menor elemento do conjunto de dados armazenado.

Exemplos: servidor para tratamento de solicitações de impressão ou execução de processos.

# Implementações

1. Vetor ordenado

    > Acesso: O(1)
    >
    > Inserção: O(n)
    >
    > Remoção: O(1)

2. Vetor desordenado

    > Acesso: O(n)
    >
    > Inserção: O(1)
    >
    > Remoção: O(n)

3. Lista ordenada

    > Acesso: O(1)
    >
    > Inserção: O(n)
    >
    > Remoção: O(1)

4. Lista desordenada

    > Acesso: O(n)
    >
    > Inserção: O(1)
    >
    > Remoção: O(n)

5. Árvore binária

    > Custos: O(log(n))
    >
    > ## Propriedades
    >
    > - A estrutura da árvore é sempre cheia, todas as folhas estão, no máximo, a 1 nível de diferença e são organizadas da esquerda para a direita no último nível.
    > - A prioridade do nó pai é maior do que a dos filhos.
    > - As prioridades dos filhos não têm relação entre si.
    > - O maior valor está na raiz.
    > ***
    > **Como a árvore é sempre cheia, é possível representá-la por vetor. (heap)**
    >
    > Dado um índice p, do pai:
    >
    > `Fe = 2p + 1` e `Fd = 2p + 2`
    >
    > Dado um nó que ocupe o índice x do vetor, seu pai está no índice `p = (x - 1) / 2` (arredondado para baixo)
    >
    > ## Inserção
    >
    > 1. Inserir o elemento no fim do vetor.
    > 2. Se o pai for menor que o filho, troque suas posições e repita.
    >
    > ## Remoção
    >
    > 1. Elimine o valor da raíz.
    > 2. Pegue o último elemento do vetor e coloque na raíz.
    > 3. Compare o valor do nó corrente (raíz) com o maior filho. Caso seja menor que o filho, troque-os e repita o processo.
    >
    > ## Atualização
    > Igual à remoção, caso atualize para menos compare para cima, caso atualize para mais compare para baixo.
