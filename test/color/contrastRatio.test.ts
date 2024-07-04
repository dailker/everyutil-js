import { contrastRatio } from '../../src/color/contrastRatio';

describe('contrastRatio', () => {
  it('calculates contrast ratio between two colors', () => {
    expect(contrastRatio('#000', '#fff')).toBeCloseTo(1, 1);
    expect(contrastRatio('#333', '#333')).toBeCloseTo(1, 1);
  });
});
