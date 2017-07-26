export default function cachingCalculator(fucnt) {
    const cache = [];
    return (a, b) => {
        let value = cache.find(obj => obj.firstVar == a && obj.secondVar == b);
        if (value) { return value.value; };
        value = fucnt(a, b);
        cache.push({ firstVar: a, secondVar: b, value: value });
        return value;
    };
}
