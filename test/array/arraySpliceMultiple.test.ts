import { arraySpliceMultiple } from '../../src/array/arraySpliceMultiple';

describe('arraySpliceMultiple', () => {
  it('splices multiple segments', () => {
    const arr = [1,2,3,4,5];
    const result = arraySpliceMultiple([...arr], [
      {start:1,deleteCount:2,items:[9,9]},
      {start:4,deleteCount:1,items:[7]}
    ]);
    expect(result).toEqual([1,9,9,4,7]);
  });

  it('handles empty splices', () => {
    expect(arraySpliceMultiple([1,2,3],[])).toEqual([1,2,3]);
  });
});
