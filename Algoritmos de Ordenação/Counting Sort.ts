/**
 * Counting Sort O(n)
 *
 * Não pode ter número negativo.
 * Aconselhável não usar com números muito grandes.
 */
export const countingSort = (arr: number[]): number[] => {
    const count: number[] = [];
    const result: number[] = [];

    // 1. Cria um array de contagem para cada número, guardando-a em seu índice (arr[i] = j)
    arr.forEach(number => {
        if (number < 0) {
            throw new Error("Counting sort doesn't support negative numbers");
        }

        count[number] = (count[number] || 0) + 1;
    });

    // 2. Faz a frequência acumulada deles
    for (let i = 0; i < count.length; i++) {
        count[i] = (count[i] || 0) + (count[i - 1] || 0);
    }

    // 3. Lê o array original de trás pra frente

    arr.reverse().forEach(number => {
        // 4. Coloca o número atual no índice da frequência acumulada
        result[count[number] - 1] = number;

        // Subtrai a frequência acumulada por 1
        count[number] -= 1;
    });

    return result;
};
