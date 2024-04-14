/**
 * Simulates network conditions by wrapping fetch with delay and error rate.
 *
 * Example: simulateNetworkConditions({ delay: 100, errorRate: 0.1 })
 *
 * @author @dailker
 * @param {{ delay?: number, errorRate?: number }} options - Delay in ms, error rate (0-1).
 * @returns {(input: RequestInfo, init?: RequestInit) => Promise<Response>} Wrapped fetch.
 */
export function simulateNetworkConditions(options: { delay?: number, errorRate?: number }) {
  return async (input: RequestInfo, init?: RequestInit) => {
    if (options.delay) await new Promise(res => setTimeout(res, options.delay));
    if (options.errorRate && Math.random() < options.errorRate) throw new Error('Simulated network error');
    return fetch(input, init);
  };
}
