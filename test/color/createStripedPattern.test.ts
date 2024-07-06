import { createStripedPattern } from '../../src/color/createStripedPattern';

describe('createStripedPattern', () => {
  it('creates a striped pattern', () => {
    expect(Array.isArray(createStripedPattern(['#fff', '#000'], 2))).toBe(true);
  });
});
