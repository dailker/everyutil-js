import { calculateBusinessHoursBetween } from '../../src/date/calculateBusinessHoursBetween';

describe('calculateBusinessHoursBetween', () => {
  it('should be a function', () => {
    expect(typeof calculateBusinessHoursBetween).toBe('function');
  });
});
