import { isUniform } from '../../src/array/isUniform';

describe('isUniform', () => {
  it('returns true if all elements are the same', () => {
    expect(isUniform([1,1,1])).toBe(true);
    expect(isUniform([1,2,1])).toBe(false);
  });
});
