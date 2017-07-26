export default function cachingCalculator(fucnt) {
  // const
  let cache = [];
  // use standard paddings
  return (a, b) => {
        let value = cache.find(obj => obj.firstVar == a && obj.secondVar == b);
        if (value) { return value.value; };

        value = fucnt(a, b);
        cache.push({ firstVar: a, secondVar: b, value: value });
        return value;
      };
}
