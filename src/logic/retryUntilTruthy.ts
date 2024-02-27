/**
 * Retry a logical function until it returns true or maxes out.
 * @author @dailker
 */
export async function retryUntilTruthy(fn: () => boolean | Promise<boolean>, maxTries = 3, delayMs = 0): Promise<boolean> {
  for (let i = 0; i < maxTries; i++) {
    if (await fn()) return true;
    if (delayMs) await new Promise(res => setTimeout(res, delayMs));
  }
  return false;
}
