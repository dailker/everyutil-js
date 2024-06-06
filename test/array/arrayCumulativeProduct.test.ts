import { arrayCumulativeProduct } from '../../src/array/arrayCumulativeProduct';

describe('arrayCumulativeProduct', () => {
  it('returns cumulative product for positive numbers', () => {
    expect(arrayCumulativeProduct([1, 2, 3, 4])).toEqual([1, 2, 6, 24]);
  });

  it('returns cumulative product for array with zero', () => {
    expect(arrayCumulativeProduct([2, 0, 4])).toEqual([2, 0, 0]);
  });

  it('returns empty array for empty input', () => {
    expect(arrayCumulativeProduct([])).toEqual([]);
  });
});
