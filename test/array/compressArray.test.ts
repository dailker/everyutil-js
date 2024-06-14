import { compressArray } from '../../src/array/compressArray';

describe('compressArray', () => {
  it('compresses consecutive duplicates', () => {
    expect(compressArray([1,1,2,2,2,3])).toEqual([[1,2],[2,3],[3,1]]);
  });
});
