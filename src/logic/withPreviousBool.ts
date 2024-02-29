/**
 * Enhances a boolean callback with access to previous state.
 * @author @dailker
 */
export function withPreviousBool(fn: (current: boolean, previous: boolean) => void) {
  let prev = false;
  return (current: boolean) => {
    fn(current, prev);
    prev = current;
  };
}
