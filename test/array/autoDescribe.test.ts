import { autoDescribe } from '../../src/array/autoDescribe';

describe('autoDescribe', () => {
  it('describes a number array', () => {
    expect(autoDescribe([1,2,3])).toMatch(/Array of 3 number/);
  });

  it('describes a string array', () => {
    expect(autoDescribe(['a','b','a'])).toMatch(/Array of 3 string/);
  });

  it('mentions mean for numbers', () => {
    expect(autoDescribe([2,4,6])).toMatch(/mean: 4.00/);
  });

  it('mentions sorted for sorted arrays', () => {
    expect(autoDescribe([1,2,3])).toMatch(/sorted ascending/);
  });
});
