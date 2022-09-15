- Os nós de uma árvore B podem ter muitos filhos.
- Toda árvore com n filhos possui altura O(log n).
- Possui altura menor do que árvores vermelho-preto.
- A ordem (m) é definida como o número mínimo de chaves que um nó de uma árvore B pode conter. Excessão: raíz.

# Propriedades

1. Um nó com k chaves possui `k+1` filhos. Excessão: raíz e folhas.
2. Um nó pode ter, no máximo, `2m` chaves. `2m >= k >= m`
3. As chaves são armazenadas em ordem **crescente**.
4. Todas as folhas estão na mesma profundidade, que é a altura da árvore. (elas são auto-balanceadas)

# Inserção

Nota: sempre ocorre na folha.

1. Localizar a folha que receberá a chave.
2. Se a folha não estiver completa, insira a chave mantendo a ordenação.
3. Se a folha estiver cheia, aplica-se a cisão da página.

**Página cheia**: o nó possui 2m chaves

**Cisão**: Particiona-se a página em 2, considerando `2m+1` chaves, cada uma com `m` valores e o elemento central vai para o nó pai. As páginas criadas serão irmãs e filhas do valor que subiu.

# Remoção

Se a chave não está em uma folha, substitua ela pelo maior valor à esquerda ou o menor valor à direita.

Se a chave está em uma folha, ela é removida.

- Se um dos nós ficar com menos de `m` chaves, concatene e redistribua.

# Concatenação

Se duas páginas irmãs P e Q, adjacentes, juntas possuem menos que 2m chaves:

1. Junte as páginas em uma só.
2. A chave do pai é removida e adicionada nesta união.

# Redistribuição

Ocorre quando as páginas irmãs possuem o número de chaves >= 2m.

1. Concatena-se P e Q.
2. Efetua-se a cisão da página resultante.
