/**
 * Stores recent boolean evaluations, like a rolling buffer.
 * @author @dailker
 */
export function booleanMemory(length: number) {
  const buffer: boolean[] = [];
  return {
    push: (val: boolean) => {
      buffer.push(val);
      if (buffer.length > length) buffer.shift();
    },
    get values() { return [...buffer]; }
  };
}
