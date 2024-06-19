import { isSorted } from '../../src/array/isSorted';

describe('isSorted', () => {
  it('returns true if array is sorted', () => {
    expect(isSorted([1,2,3,4])).toBe(true);
    expect(isSorted([4,3,2,1])).toBe(false);
  });
});
