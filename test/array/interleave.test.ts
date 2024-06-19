import { interleave } from '../../src/array/interleave';

describe('interleave', () => {
  it('interleaves two arrays', () => {
    expect(interleave([1,2,3],[4,5,6])).toEqual([1,4,2,5,3,6]);
  });
});
