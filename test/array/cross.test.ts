import { cross } from '../../src/array/cross';

describe('cross', () => {
  it('returns the cartesian product', () => {
    expect(cross([1,2],[3,4])).toEqual([[1,3],[1,4],[2,3],[2,4]]);
  });
});
