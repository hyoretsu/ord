# Método da divisão

f(x) = x % n

## Lista encadeada

## Primeira posição livre

## Dispersão dupla

h2(x) = (N - 2) - x % (N - 2)

f1(x) = (f(x) + h2(x)) % n

# Método da multiplicação

h(x) = Math.floor(N * ((A * x) % n))


# Método do hash universal

h_a,b_(x) = ((A * x + B) % P) % N

P é um número primo (maior que todas as chaves)
A é um valor entre [1, P-1]
B é um valor entre [0, P-1]

## Hash perfeito

# Tabela hash dimânica

Dobrar o tamanho quando chegar em 70%
