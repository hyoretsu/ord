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

# Remoção

Ela pode ser lógica, através de uma simples propriedade sinalizando que a informação foi excluída, ou física:

Definição: Duplo-Preto (DP) é uma marcação no `nil` que aplicamos ao eliminar um nó preto.

1.  Se um nó é folha e vermelho, basta removê-lo
2.  Se a raíz é DP, remova a marcação da raiz e torne-a preta
3.  Se o irmão de um nó DP for preto e seus sobrinhos são pretos, remova a marcação DP, mude a cor do irmão para vermelho e marque seu pai (novamente) como preto. Repita isso recursivamente com cada DP
4.  Se o irmão de um nó DP for vermelho, inverta as cores do pai e do irmão, faça uma rotação centrada no pai na direção do nó DP e verifique qual outro caso pode ser aplicado na árvore
5.  Se o irmão de um nó DP for preto, seu sobrinho esquerdo for vermelho e seu sobrinho direito for preto, inverta as cores do irmão e do sobrinho vermelho, faça uma rotação centrada no irmão na direção oposta ao nó DP e aplique o caso 6
6.  Se o irmão de um nó DP for preto e seu sobrinho direito for vermelho, troque as cores entre o pai e o irmão, faça uma rotação centrada no pai na direção do nó DP, remova a marcação DP e inverta a cor do sobrinho direito

# Características

**Pontos fortes**

1. Construção fácil

**Pontos fracos**

1. Sua remoção pode ser muito custosa
