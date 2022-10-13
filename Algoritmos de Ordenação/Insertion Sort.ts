/**
 * 1. Dividimos o array em 2 partes: ordenada e desordenada
 * 2. Vamos checando o array da direita para a esquerda, a partir do primeiro membro desordenado, inserindo-o antes do membro do qual ele é menor
 */
export const insertionSort = (array: number[]): number[] => {
    array.forEach((element, i) => {
        for (let j = i - 1; j >= 0; j--) {
            const temp = array[j + 1];

            if (temp > array[j]) {
                array[j + 1] = temp;
                break;
            }

            array[j + 1] = array[j];
            array[j] = temp;
        }
    });

    return array;
};
