import { averageColor } from '../../src/color/averageColor';

describe('averageColor', () => {
  it('returns #000000 for stub', () => {
    expect(averageColor(null)).toBe('#000000');
  });
});
