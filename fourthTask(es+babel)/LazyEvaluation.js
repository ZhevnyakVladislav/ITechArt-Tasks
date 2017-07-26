export default function lazyEvaluation(funct, ...args) {
    return () => funct.apply(this, args);
}
