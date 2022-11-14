/**
 *  1. Checa se o próximo é menor que o atual
 *  2. Se sim, troca e vai para o próximo
 *  3. Repete até o array acabar
 *  4. Repete o processo, terminando 1 casa antes, até terminar o array
 *  5. Caso não troque nenhuma vez, o array já está ordenado
 */
export const bubbleSort = (array: number[]): number[] => {
    let swapCount = 0;
    let unorderedIndex = array.length - 1;

    while (unorderedIndex > 0 && swapCount <= 0) {
        for (let i = 0; i < unorderedIndex; i++) {
            if (array[i + 1] < array[i]) {
                const temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;

                swapCount += 1;
            }
        }

        swapCount = swapCount === 0 ? -1 : 0;
        unorderedIndex -= 1;
    }

    return array;
};
