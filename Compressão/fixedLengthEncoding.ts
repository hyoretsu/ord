type FixedLengthEncoding = (input: string) => {
    output: string;
    table: Record<string, string>;
};

const fixedLengthEncoding: FixedLengthEncoding = input => {
    let count = 0;
    const table = {};

    const uniqueCharacters = [...new Set(input)];
    const highestBinaryLength = uniqueCharacters.length.toString(2).length;

    const letters = input.split('');

    const output = letters
        .map(letter => {
            const nextEncodedLetter = count.toString(2).padStart(highestBinaryLength, '0');

            if (!Object.values(table).find(value => value === letter)) {
                table[nextEncodedLetter] = letter;

                count += 1;

                return nextEncodedLetter;
            }

            const encodedLetterIndex = Object.values(table).findIndex(value => value === letter);

            return Object.keys(table)[encodedLetterIndex];
        })
        .join('');

    return { output, table };
};

type FixedLengthDecoding = (input: string, table: Record<string, string>) => string;

const fixedLengthDecoding: FixedLengthDecoding = (input, table) => {
    const encodedLength = Object.keys(table)[0].length;

    const letters = input.split('').reduce((result, value, index, array) => {
        if (index % encodedLength === 0) {
            return [...result, array.slice(index, index + encodedLength).join('')];
        }

        return result;
    }, [] as string[]);

    const output = letters
        .map(letter => {
            return table[letter];
        })
        .join('');

    return output;
};
