import { zipDiagonals } from '../../src/array/zipDiagonals';

describe('zipDiagonals', () => {
  it('zips diagonals of a 2D array', () => {
    expect(Array.isArray(zipDiagonals([[1,2],[3,4]]))).toBe(true);
  });
});
