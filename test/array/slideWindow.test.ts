import { slideWindow } from '../../src/array/slideWindow';

describe('slideWindow', () => {
  it('returns sliding windows of given size', () => {
    expect(slideWindow([1,2,3,4], 2)).toEqual([[1,2],[2,3],[3,4]]);
  });
});
