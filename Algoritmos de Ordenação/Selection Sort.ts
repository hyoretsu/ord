/**
 * Varre o array e substitui o índice atual pelo que for menor dos restantes.
 */
export const selectionSort = (array: number[]): number[] => {
    array.forEach((element, i) => {
        let smallestIndex = i;

        array.slice(i + 1).forEach((number, j) => {
            if (number < array[smallestIndex]) smallestIndex = j + i + 1;
        });

        if (smallestIndex !== i) {
            array[i] = array[smallestIndex];
            array[smallestIndex] = element;
        }
    });

    return array;
};
