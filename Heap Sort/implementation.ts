import swap from '../swap';

const heapify = (array: number[]): void => {
    array.forEach((element, i) => {
        let unordered = true;
        while (unordered) {
            const fatherIndex = Math.floor((i - 1) / 2);

            if (element > array[fatherIndex]) {
                swap(array, fatherIndex, i);

                i = fatherIndex;
                continue;
            }

            unordered = false;
        }
    });
};

export const heapSort = (array: number[]): void => {
    // Transforma em heap
    heapify(array);

    // Joga a raiz para o final do array e vai trocando se for menor que o maior filho
    for (let i = array.length - 1; i >= 0; i--) {
        let j = 0;

        swap(array, i, j);

        let unordered = true;
        while (unordered) {
            const childrenIndex = [2 * j + 1, 2 * j + 2];
            const biggestChild = childrenIndex[Number(childrenIndex[0] > childrenIndex[1])];

            if (biggestChild < i && array[j] < array[biggestChild]) {
                swap(array, biggestChild, j);

                j += 1;
                continue;
            }

            unordered = false;
        }
    }
};
