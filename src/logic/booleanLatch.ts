/**
 * Stays latched after activation until explicitly released.
 * @author @dailker
 */
export function booleanLatch(condition: () => boolean, release: () => boolean) {
  let latched = false;
  return () => {
    if (release()) latched = false;
    else if (condition()) latched = true;
    return latched;
  };
}
