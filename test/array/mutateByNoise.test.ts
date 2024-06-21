import { mutateByNoise } from '../../src/array/mutateByNoise';

describe('mutateByNoise', () => {
  it('returns an array of the same length', () => {
    expect(mutateByNoise([1,2,3], 0.1).length).toBe(3);
  });
});
