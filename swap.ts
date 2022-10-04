const swap = (array: any[], firstIndex: number, secondIndex: number): void => {
    const temp = array[firstIndex];
    // eslint-disable-next-line prefer-destructuring
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

export default swap;
