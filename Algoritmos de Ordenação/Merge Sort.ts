const mergeArrays = (array1: number[], array2: number[]): number[] => {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < array1.length || j < array2.length) {
        if (array1[i] < (array2[j] || Infinity)) {
            result.push(array1[i]);

            i += 1;
        } else if (array2[j] < (array1[i] || Infinity)) {
            result.push(array2[j]);

            j += 1;
        }
    }

    return result;
};

export const mergeSort = (array: number[]): number[] => {
    if (array.length > 1) {
        const mid = Math.floor(array.length / 2);
        let firstHalf = array.slice(0, mid);
        let secondHalf = array.slice(mid);

        firstHalf = mergeSort(firstHalf);
        secondHalf = mergeSort(secondHalf);

        return mergeArrays(firstHalf, secondHalf);
    }

    return array;
};
