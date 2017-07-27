export default function partialApplication(funct, ...args) {
    return (...childArgs) => {
            return funct.apply(null, [...args, ...childArgs]);
        };
}
