import { chunkByCondition } from '../../src/array/chunkByCondition';

describe('chunkByCondition', () => {
  it('chunks array by condition', () => {
    expect(chunkByCondition([1,2,3,4], x => x % 2 === 0)).toEqual([[1],[2,3],[4]]);
  });
});
