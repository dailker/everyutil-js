import { compactMap } from '../../src/array/compactMap';

describe('compactMap', () => {
  it('removes null and undefined values', () => {
    expect(compactMap([1, null, 2, undefined, 3], x => x)).toEqual([1, 2, 3]);
  });
});
