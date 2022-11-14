import { quicksort } from './Quicksort';

/**
 * Bucket Sort
 *
 * Pior performance: O(n^2)
 *
 * - Valores entre 0 e 1, decimais
 * - Valores bem distribuidos (Distribuição normal)
 * - Usa um outro algoritmo, simples (insertion sort)
 */
export const bucketSort = (arr: number[], bucketsN: number): number[] => {
    let buckets: number[][] = [];

    const maximumValue = Math.max(...arr);

    arr.forEach(number => {
        const bucketIndex = Math.floor((bucketsN * number) / (maximumValue + 1));

        if (!buckets[bucketIndex]) {
            buckets[bucketIndex] = [];
        }

        buckets[bucketIndex].push(number);
    });

    buckets = buckets.map(bucket => quicksort(bucket));

    return buckets.reduce((result, bucket) => [...result, ...bucket], []);
};
