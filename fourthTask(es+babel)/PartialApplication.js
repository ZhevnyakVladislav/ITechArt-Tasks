export default function partialApplication() {
  // you don't need to save context, arrow functions do all the work for you
  const _this = this;
  // can be done with spread operator
  const params = Array.prototype.slice.call(arguments);
  const funct = params.pop();
  // paddings
  return () => {
        // can be done with spread operator, it will be more explicit
        const childParams = Array.prototype.slice.call(arguments);
        const newParams = params.concat(childParams);
        return funct.apply(_this, newParams);
      };
}
