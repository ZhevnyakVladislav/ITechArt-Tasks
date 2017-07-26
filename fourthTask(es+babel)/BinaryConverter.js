const convertToNumber = (value, from) => {
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += value[i] * Math.pow(from, i);
    }
    return result;
};

const convertToEnd = (value, to) => {
    const array = [];
    while (value >= to) {
        let a = value % to;
        array.push(a);
        value = Math.floor(value / to);
    }

    array.push(value);
    return array;
};

export default function convert(value, from, to) {
    return convertToEnd(convertToNumber(value, from), to);
};
