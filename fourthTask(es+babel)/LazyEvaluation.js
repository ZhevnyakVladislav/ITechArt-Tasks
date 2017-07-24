export default function lazyEvaluation(funct) {
    const params = Array.prototype.slice.call(arguments, 1);
    return () => funct.apply(this, params);
}