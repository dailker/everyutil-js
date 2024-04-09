/**
 * Polls an endpoint until a condition is met or timeout occurs.
 *
 * Example: pollUntil(url, res => res.status === 'ready', 1000, 10000)
 *
 * @author @dailker
 * @param {string} url - The endpoint to poll.
 * @param {(data: any) => boolean} conditionFn - Condition function.
 * @param {number} interval - Poll interval in ms.
 * @param {number} timeout - Timeout in ms.
 * @returns {Promise<any>} The response data if condition met.
 */
export async function pollUntil(url: string, conditionFn: (data: any) => boolean, interval: number, timeout: number): Promise<any> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (conditionFn(data)) return data;
    } catch {}
    await new Promise(res => setTimeout(res, interval));
  }
  throw new Error('Timeout');
}
