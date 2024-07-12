import { convertDateToISOWeekString } from '../../src/date/convertDateToISOWeekString';

describe('convertDateToISOWeekString', () => {
  it('should be a function', () => {
    expect(typeof convertDateToISOWeekString).toBe('function');
  });
});
