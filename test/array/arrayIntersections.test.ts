import { arrayIntersections } from '../../src/array/arrayIntersections';

describe('arrayIntersections', () => {
  it('returns intersection of two arrays', () => {
    expect(arrayIntersections([1,2,3], [2,3,4])).toEqual([2,3]);
  });
  it('returns empty array if no intersection', () => {
    expect(arrayIntersections([1,2], [3,4])).toEqual([]);
  });
});
