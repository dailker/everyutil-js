/**
 * Once true, stays true for a time period before reverting.
 * @author @dailker
 */
export function boolSustain(ms: number) {
  let state = false, timeout: any = null;
  return {
    set: (val: boolean) => {
      if (val) {
        state = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => { state = false; }, ms);
      }
    },
    get value() { return state; }
  };
}
