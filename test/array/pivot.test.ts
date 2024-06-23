import { pivot } from '../../src/array/pivot';

describe('pivot', () => {
  it('pivots an array of objects', () => {
    const data = [
      { row: 'A', value: 1 },
      { row: 'B', value: 2 }
    ];
    expect(pivot(data, 'row', 'value')).toEqual({ A: 1, B: 2 });
  });
});
