// Gets the last element of array.
export function last<T>(arr: T[]): T | undefined {
    return arr.length ? arr[arr.length - 1] : undefined;
}
