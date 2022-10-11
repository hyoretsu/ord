const getPrimes = (n: number): number[] => {
    const primes: number[] = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        primes.push(i);
      }
    }

    return primes;
};

export const shellsort = (array: number[]): number[] => {
    const gaps = [1, ...getPrimes(array.length)];

    gaps.reverse().forEach(gap => {
        for (let i = gap; i < array.length; i++) {
            const temp = array[i];
            let j = i;

            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }

            array[j] = temp;
        }
    });

    return array;
};
