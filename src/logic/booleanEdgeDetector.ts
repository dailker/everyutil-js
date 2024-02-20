/**
 * Detects rising/falling edges: true → false, false → true.
 * @author @dailker
 */
export function booleanEdgeDetector(input: boolean, previous: boolean): { rising: boolean, falling: boolean } {
  return {
    rising: !previous && input,
    falling: previous && !input
  };
}
