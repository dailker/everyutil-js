/**
 * Limits the number of concurrent outbound requests.
 *
 * @author @dailker
 * @param {number} max - Maximum concurrent requests.
 * @returns {(fn: () => Promise<any>) => Promise<any>} Throttled runner.
 */
export function throttleRequests(max: number): (fn: () => Promise<any>) => Promise<any> {
  let active = 0;
  const queue: (() => void)[] = [];
  return async (fn: () => Promise<any>) => {
    if (active >= max) await new Promise<void>(resolve => queue.push(resolve));
    active++;
    try {
      return await fn();
    } finally {
      active--;
      if (queue.length) queue.shift()!();
    }
  };
}
