// Recursively flattens an array.
export function flattenDeep<T>(arr: any[]): T[] {
    return arr.reduce(
        (flat: T[], toFlatten: any) =>
            flat.concat(Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten),
        []
    );
}
