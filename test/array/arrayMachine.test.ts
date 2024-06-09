import { arrayMachine } from '../../src/array/arrayMachine';

describe('arrayMachine', () => {
  it('applies instructions to the array', () => {
    // Example: set index 0 to 2, add 2 to index 1, swap 0 and 1
    const result = arrayMachine([1,2,3], [
      { op: 'set', i: 0, value: 2 },
      { op: 'add', i: 1, value: 2 },
      { op: 'swap', i: 0, j: 1 }
    ]);
    expect(result).toEqual([4,2,3]);
  });
});
