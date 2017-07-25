export default function partialApplication() {
    const context = this;
    const params = Array.prototype.slice.call(arguments);
    const funct = params.pop();
    return () => {
        const childParams = Array.prototype.slice.call(arguments);
        const newParams = params.concat(childParams);
        return funct.apply(context, newParams);
    }
}