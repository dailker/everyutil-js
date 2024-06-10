import { arrayStableSort } from '../../src/array/arrayStableSort';

describe('arrayStableSort', () => {
  it('sorts numbers ascending', () => {
    expect(arrayStableSort([3,1,2], (a,b) => a-b)).toEqual([1,2,3]);
  });

  it('is stable for equal elements', () => {
    const arr = [{v:1,id:1},{v:2,id:2},{v:1,id:3}];
    const sorted = arrayStableSort(arr, (a,b) => a.v-b.v);
    expect(sorted[0].id).toBe(1);
    expect(sorted[1].id).toBe(3);
  });
});
