import { tailUntil } from '../../src/array/tailUntil';

describe('tailUntil', () => {
  it('returns tail until condition is met', () => {
    expect(tailUntil([1,2,3,4], x => x > 2)).toEqual([3,4]);
  });
});
