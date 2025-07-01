/**
 * Returns a throttled version of the function that only invokes the original function at most once per wait period.
 * @author dailker
 * @param func - The function to throttle.
 * @param wait - The number of milliseconds to throttle invocations to.
 * @returns The throttled function.
 * @category Function
 * @example
 * const throttled = throttle(() => console.log('hi'), 1000);
 */
export function throttle<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let last = 0;
    let timeout: any;
    return function(this: any, ...args: any[]) {
        const now = Date.now();
        if (now - last >= wait) {
            last = now;
            func.apply(this, args);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                last = Date.now();
                func.apply(this, args);
            }, wait - (now - last));
        }
    };
}
