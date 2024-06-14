import { entropy } from '../../src/array/entropy';

describe('entropy', () => {
  it('calculates entropy of an array', () => {
    expect(entropy([1,1,2,2,2,3])).toBeGreaterThan(0);
  });
});
