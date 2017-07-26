export default class BinaryConverter {
  constructor() {
    const convertToNumber = (value, from) => {
            let result = 0;
            for (let i = 0; i < value.length; i++) {
              result += value[i] * Math.pow(from, i);
            }

            return result;
          };

    const convertToEnd = (value, to) => {
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
    return this.convertToEnd(this.convertToNumber(value, from), to);
  };
}
