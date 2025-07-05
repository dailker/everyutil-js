/**
 * Returns a function that can only be called once. Repeated calls return the first result.
 * @author dailker
 * @param func - The function to restrict.
 * @returns The new restricted function.
 * @category Function
 * @example
 * const initialize = once(() => createApp());
 */
export function once<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T> | undefined {
    let called = false;
    let result: ReturnType<T>;
    return function(this: any, ...args: any[]) {
        if (!called) {
            called = true;
            result = func.apply(this, args);
            return result;
        }
        return result;
    };
}
