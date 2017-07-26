export default function partialApplication(...args) {
    // you can define 'funct' in arguments list just like in LazyExaluation
    const funct = args.pop();
    return (...childArgs) => {
            return funct.apply(null, [...args, ...childArgs]);
        };
}
