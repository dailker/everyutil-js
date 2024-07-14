import { dateDiffInBusinessDays } from '../../src/date/dateDiffInBusinessDays';

describe('dateDiffInBusinessDays', () => {
  it('should be a function', () => {
    expect(typeof dateDiffInBusinessDays).toBe('function');
  });
});
