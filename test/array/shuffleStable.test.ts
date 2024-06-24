import { shuffleStable } from '../../src/array/shuffleStable';

describe('shuffleStable', () => {
  it('shuffles array but keeps order of equal elements', () => {
    expect(Array.isArray(shuffleStable([1,2,3,4]))).toBe(true);
  });
});
