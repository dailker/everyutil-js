/**
 * Run a function only on the first truthy input.
 * @author @dailker
 */
export function onceTruthy<T>(fn: (input: T) => void): (input: T) => void {
  let called = false;
  return (input: T) => {
    if (!called && input) {
      called = true;
      fn(input);
    }
  };
}
