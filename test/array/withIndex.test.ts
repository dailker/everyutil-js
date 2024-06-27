import { withIndex } from '../../src/array/withIndex';

describe('withIndex', () => {
  it('returns tuples of value and index', () => {
    expect(withIndex(['a','b'])).toEqual([
      { value: 'a', index: 0 },
      { value: 'b', index: 1 }
    ]);
  });
});
