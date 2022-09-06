# Propriedades

-   Todo nó é vermelho ou preto
-   A raiz é preta
-   Toda folha é preta
-   Se um nó é vermelho, então seus filhos são pretos
-   Todo caminho da raiz até as folhas tem o mesmo número de nós pretos

# Inserção

O novo nó sempre é inserido como vermelho.

1.  Se o pai é preto, não faz nada
2.  Se o pai é vermelho
    > -   e o tio é vermelho, recolore ambos para preto e o avô para vermelho
    > -   e o tio é preto, você rotaciona e inverte as cores dos nós que mudaram de posição
