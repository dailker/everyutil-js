import { arraySymmetricDifference } from '../../src/array/arraySymmetricDifference';

describe('arraySymmetricDifference', () => {
  it('returns elements in one array only', () => {
    expect(arraySymmetricDifference([1,2,3],[3,4,5])).toEqual([1,2,4,5]);
  });

  it('returns empty array for identical arrays', () => {
    expect(arraySymmetricDifference([1,2],[1,2])).toEqual([]);
  });

  it('returns all elements if arrays are disjoint', () => {
    expect(arraySymmetricDifference([1],[2])).toEqual([1,2]);
  });
});
