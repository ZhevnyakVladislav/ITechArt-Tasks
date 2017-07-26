export default function partialApplication(...args) {
    const funct = args.pop();
    return (...childArgs) => {
            return funct.apply(null, [...args, ...childArgs]);
        };
}
