export default function lazyEvaluation(funct) {
  // this can be done with spread operator
  const params = Array.prototype.slice.call(arguments, 1);
  return () => funct.apply(this, params);
}
