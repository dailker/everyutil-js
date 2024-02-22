/**
 * Turns true only if true-state persists for X ms.
 * @author @dailker
 */
export function createBooleanTimer(thresholdTime: number) {
  let timer: any = null, state = false;
  return {
    set: (val: boolean) => {
      if (val) {
        if (!timer) timer = setTimeout(() => { state = true; }, thresholdTime);
      } else {
        clearTimeout(timer);
        timer = null;
        state = false;
      }
    },
    get value() { return state; }
  };
}
