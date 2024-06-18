import { groupEvery } from '../../src/array/groupEvery';

describe('groupEvery', () => {
  it('groups array into chunks of n', () => {
    expect(groupEvery([1,2,3,4,5], 2)).toEqual([[1,2],[3,4]]);
  });
});
