/**
 * Keeps last N boolean values for trend analysis.
 * @author @dailker
 */
export function createBooleanBuffer(size: number) {
  const buffer: boolean[] = [];
  return {
    push: (val: boolean) => {
      buffer.push(val);
      if (buffer.length > size) buffer.shift();
    },
    get values() { return [...buffer]; },
    get last() { return buffer[buffer.length - 1]; }
  };
}
