import { timeSeriesDelta } from '../../src/array/timeSeriesDelta';

describe('timeSeriesDelta', () => {
  it('returns deltas between elements', () => {
    expect(timeSeriesDelta([1,3,6])).toEqual([2,3]);
  });
});
