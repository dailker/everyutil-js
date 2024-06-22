import { pluckUnique } from '../../src/array/pluckUnique';

describe('pluckUnique', () => {
  it('returns unique values by key', () => {
    expect(pluckUnique([{a:1},{a:2},{a:1}], 'a')).toEqual([1,2]);
  });
});
