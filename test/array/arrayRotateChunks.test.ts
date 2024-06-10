import { arrayRotateChunks } from '../../src/array/arrayRotateChunks';

describe('arrayRotateChunks', () => {
  it('rotates chunks of an array', () => {
    // Rotate by 1 chunk to the right
    expect(arrayRotateChunks([1,2,3,4,5,6], 2, 1)).toEqual([5,6,1,2,3,4]);
  });
});
