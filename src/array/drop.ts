// Creates a slice of array with n elements dropped from the beginning.
export function drop<T>(arr: T[], n = 1): T[] {
    return arr.slice(n);
}
