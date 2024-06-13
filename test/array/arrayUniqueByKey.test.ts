import { arrayUniqueByKey } from '../../src/array/arrayUniqueByKey';

describe('arrayUniqueByKey', () => {
  it('deduplicates objects by key', () => {
    const arr = [{id:1},{id:2},{id:1}];
    expect(arrayUniqueByKey(arr, x => x.id)).toEqual([{id:1},{id:2}]);
  });

  it('works with strings', () => {
    const arr = ['a','b','a','c'];
    expect(arrayUniqueByKey(arr, x => x)).toEqual(['a','b','c']);
  });

  it('returns empty array for empty input', () => {
    expect(arrayUniqueByKey([], x => x)).toEqual([]);
  });
});
