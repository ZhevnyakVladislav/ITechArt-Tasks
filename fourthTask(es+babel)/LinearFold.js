export default function linearFold(array, funct, initialValue) {
    if (Array.isArray(array) && typeof funct != 'function') {
        throw 'error parameters';
    }
    let previousValue = initialValue;
    let start = 0;
    if (initialVlue === undefined) {
        start = 1;
        previousValue = array[0];
    }
    for (let i = start; i < array.length; i++) {
        previousValue = funct(previousValue, array[i], i, array);
    }
    return previousValue;
}
