/**
 * Like threshold logic: flips only if condition exceeds a separate enter/exit value.
 * @author @dailker
 */
export function boolHysteresis(enter: boolean, exit: boolean): () => boolean {
  let state = false;
  return () => {
    if (enter) state = true;
    else if (exit) state = false;
    return state;
  };
}
