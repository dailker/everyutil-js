/**
 * Treats array like memory or tape for state-based operations.
 * @author @dailker
 * @param {any[]} array
 * @param {{op: string, [key: string]: any}[]} instructions
 * @returns {any[]}
 */
export function arrayMachine(array: any[], instructions: { op: string; [key: string]: any }[]): any[] {
  const arr = array.slice();
  for (const ins of instructions) {
    switch (ins.op) {
      case 'swap':
        [arr[ins.i], arr[ins.j]] = [arr[ins.j], arr[ins.i]];
        break;
      case 'add':
        arr[ins.i] += ins.value;
        break;
      case 'set':
        arr[ins.i] = ins.value;
        break;
      // Add more ops as needed
    }
  }
  return arr;
}
