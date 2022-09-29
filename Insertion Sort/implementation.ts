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
