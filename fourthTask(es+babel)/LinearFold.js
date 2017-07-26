// typo 'initialVAlue'
export default function linearFold(array, funct, initialVlue) {
  if (Array.isArray(array) && typeof funct != 'function') {
    throw 'error parameters';
  }

  let previousValue = initialVlue;
  let start = 0;
  // use === to let it work with null initial value
  if (initialVlue == undefined) {
    start = 1;
    previousValue = array[0];
  }

  for (let i = start; i < array.length; i++) {
    previousValue = funct(previousValue, array[i], i, array);
  }

  return previousValue;
}
