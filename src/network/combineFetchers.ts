/**
 * Tries multiple fetchers in sequence, returning the first successful result.
 *
 * Example: combineFetchers(f1, f2)(...args)
 *
 * @author @dailker
 * @param {...Function[]} fetchers - Fetcher functions.
 * @returns {Function} Combined fetcher.
 */
export function combineFetchers<T = any>(...fetchers: Array<(...args: any[]) => Promise<T>>): (...args: any[]) => Promise<T> {
  return async (...args: any[]) => {
    let lastErr;
    for (const fetcher of fetchers) {
      try {
        return await fetcher(...args);
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  };
}
