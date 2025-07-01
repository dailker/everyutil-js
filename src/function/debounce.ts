/**
 * Returns a debounced version of the function.
 * @author dailker
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns The debounced function.
 * @category Function
 * @example
 * const debounced = debounce(() => console.log('hi'), 300);
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: any;
    return function(this: any, ...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
