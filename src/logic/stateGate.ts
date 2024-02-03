/**
 * Controls when a stateful effect can run based on a trigger function.
 * @author @dailker
 */
export function stateGate(triggerFn: () => boolean) {
  let lastState = false;
  return {
    canRun: () => {
      const current = triggerFn();
      const allowed = !lastState && current;
      lastState = current;
      return allowed;
    }
  };
}
