// Counting Sort O(n)
// cria uma array de contagem
// Guarda a quantidade de cada arr[i] = i
// Faz a frequência acumulada deles
// Lê o array original de trás pra frente, coloca no índice da frequência acumulada e subtrai 1

// Radix Sort O(n * log(n)
// - Serve para string

// Bucket Sort O(n)
// - Valores entre 0 e 1, decimais
// - Valores bem distribuidos (Distribuição normal)
// - Usa um outro algoritmo, simples (insertion sort)

// 2022-11-1

/**
 * Não pode ter número negativo.
 * Aconselhável não usar com números muito grandes.
 */
export const countingSort = (arr: number[]): number[] => {
    const count: number[] = [], result: number[] = [];

    arr.forEach(number => {
        count[number] = (count[number] || 0) + 1;
    })

    console.log(count)

    count.forEach((number, i) => {
        console.log([(number || 0),(count[i - 1] || 0)])

        count[i] = (number || 0) + (count[i - 1] || 0);
    })

    console.log(count)

    arr.reverse().forEach(()=>{
        result[--count[arr.pop()]] = arr.pop();
    }
};
