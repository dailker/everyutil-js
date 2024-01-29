/**
 * One-way gate: once turned "on", stays on.
 * @author @dailker
 */
export function createBinaryLatch() {
  let latched = false;
  return {
    trigger: () => { latched = true; },
    get value() { return latched; }
  };
}
