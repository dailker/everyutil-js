import { darken } from '../../src/color/darken';

describe('darken', () => {
  it('darkens a hex color by a given amount', () => {
    expect(darken('#336699', 0.2)).toBe('#29527a');
    expect(darken('#ffffff', 0.5)).toBe('#808080');
    expect(darken('#000000', 0.5)).toBe('#000000');
  });
});
