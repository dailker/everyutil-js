import { transpose } from '../../src/array/transpose';

describe('transpose', () => {
  it('transposes a 2D array', () => {
    expect(transpose([[1,2,3],[4,5,6]])).toEqual([[1,4],[2,5],[3,6]]);
  });
});
