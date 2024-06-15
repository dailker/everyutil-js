import { findMostFrequent } from '../../src/array/findMostFrequent';

describe('findMostFrequent', () => {
  it('finds the most frequent element', () => {
    expect(findMostFrequent([1,2,2,3,3,3,2])).toEqual([2, 3]);
  });
});
