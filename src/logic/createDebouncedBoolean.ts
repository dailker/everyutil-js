/**
 * Debounced true/false state useful for flapping signals.
 * @author @dailker
 */
export function createDebouncedBoolean(delay: number) {
  let state = false, timeout: any = null;
  return {
    set: (val: boolean) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => { state = val; }, delay);
    },
    get value() { return state; }
  };
}
