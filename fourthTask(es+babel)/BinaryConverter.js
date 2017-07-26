// no need to use class here
export default class BinaryConverter {
  constructor() {
    // use standard paddings
    const convertToNumber = (value, from) => {
            let result = 0;
            for (let i = 0; i < value.length; i++) {
              result += value[i] * Math.pow(from, i);
            }

            return result;
          };

    const convertToEnd = (value, to) => {
            // I prefer to use 'const' instead of 'let' if we don't reassign variable
            let array = [];
            while (value >= to) {
              let a = value % to;
              array.push(a);
              value = Math.floor(value / to);
            }

            array.push(value);
            return array;
          };

  }

  convert(value, from, to) {
    // it will not work, you don't define convertToEnd and convertToNumber as class methods
    return this.convertToEnd(this.convertToNumber(value, from), to);
  };
}
