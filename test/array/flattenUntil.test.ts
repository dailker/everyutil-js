import { flattenUntil } from '../../src/array/flattenUntil';

describe('flattenUntil', () => {
  it('flattens nested arrays', () => {
    expect(flattenUntil([1,[2,[3]]], x => typeof x === 'number')).toEqual([1, [2, [3]]]);
  });
});
