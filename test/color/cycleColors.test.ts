import { cycleColors } from '../../src/color/cycleColors';

describe('cycleColors', () => {
  it('cycles through colors', () => {
    const colors = ['#fff', '#000', '#333'];
    expect(typeof cycleColors(colors, 1)).toBe('function');
    expect(typeof cycleColors(colors, 3)).toBe('function');
  });
});
