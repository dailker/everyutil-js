// Creates a slice of array with n elements dropped from the end.
export function dropRight<T>(arr: T[], n = 1): T[] {
    return arr.slice(0, arr.length - n);
}
