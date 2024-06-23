import { rotate } from '../../src/array/rotate';

describe('rotate', () => {
  it('rotates an array by n', () => {
    expect(rotate([1,2,3,4], 2)).toEqual([3,4,1,2]);
  });
});
