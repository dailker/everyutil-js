/**
 * Fetch with abort support (auto-cancels on timeout or event).
 *
 * @author @dailker
 * @param {string} url - The request URL.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} [timeoutMs] - Timeout in ms (optional).
 * @param {AbortSignal} [signal] - Optional external abort signal.
 * @returns {Promise<Response>} The fetch response.
 */
export async function fetchWithAbort(url: string, options: RequestInit = {}, timeoutMs?: number, signal?: AbortSignal): Promise<Response> {
  const controller = new AbortController();
  const signals = [controller.signal];
  if (signal) {
    signal.addEventListener('abort', () => controller.abort());
    signals.push(signal);
  }
  const opts = { ...options, signal: controller.signal };
  const timeout = timeoutMs ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    return await fetch(url, opts);
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}
