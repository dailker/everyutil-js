import { mode } from '../../src/array/mode';

describe('mode', () => {
  it('returns the mode of an array', () => {
    expect(mode([1,2,2,3])).toEqual([2]);
  });
});
