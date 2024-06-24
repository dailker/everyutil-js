import { skipUntil } from '../../src/array/skipUntil';

describe('skipUntil', () => {
  it('skips elements until condition is met', () => {
    expect(skipUntil([1,2,3,4], x => x > 2)).toEqual([3,4]);
  });
});
