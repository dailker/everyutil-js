/**
 * Flattens a nested array recursively.
 * @author dailker
 * @param arr - The array to flatten.
 * @returns The flattened array.
 */
export function flatten<T>(arr: any[]): T[] {
    return arr.reduce(
        (flat: T[], toFlatten: any) =>
            flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
        []
    );
}
