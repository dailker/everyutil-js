/**
 * Debounces a boolean-returning function.
 * @author @dailker
 */
export function debouncePredicate(fn: (...args: any[]) => boolean, delayMs: number): (...args: any[]) => void {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delayMs);
  };
}
