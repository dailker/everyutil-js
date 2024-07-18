import { dateToUnixTimestamp } from '../../src/date/dateToUnixTimestamp';

describe('dateToUnixTimestamp', () => {
  it('should be a function', () => {
    expect(typeof dateToUnixTimestamp).toBe('function');
  });
});
