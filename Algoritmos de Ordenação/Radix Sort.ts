import { quicksort } from './Quicksort';

const digitMerge = (numbers: number[]): number => {
    return Number(numbers.join);
};

const digitSplit = (number: number): number[] => {
    return number
        .toString()
        .split('')
        .map(str => Number(str));
};

/**
 * Radix Sort O(n * log(n)
 *
 * Serve para string
 *
 * Bugged.
 */
export const radixSort = (arr: number[]): number[] => {
    const maxNumberLength = Math.max(...arr.map(number => number.toString().length));

    const digitSplittedArray = arr.map(number => digitSplit(number));

    const sortingArray = [];

    for (let i = maxNumberLength - 1; i >= 0; i--) {
        const digitSlotArray = digitSplittedArray.map(digit => digit[i] || 0);

        // Arruma uma forma de manejar os arrays de dígitos junto da ordenação
        quicksort(digitSlotArray).forEach((digit, j) => {
            sortingArray[j] = digit;
        });
    }

    const sortedArray = sortingArray.map(number => digitMerge(number));

    return sortedArray;
};
