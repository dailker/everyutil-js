/**
 * Creates a toggler with .on(), .off(), .toggle().
 * @author @dailker
 */
export function createToggleState(defaultValue = false) {
  let state = defaultValue;
  return {
    on: () => { state = true; },
    off: () => { state = false; },
    toggle: () => { state = !state; },
    get value() { return state; }
  };
}
