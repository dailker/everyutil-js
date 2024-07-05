import { createCheckerboardPattern } from '../../src/color/createCheckerboardPattern';

describe('createCheckerboardPattern', () => {
  it('returns a checkerboard pattern', () => {
    expect(Array.isArray(createCheckerboardPattern('#fff', '#000', 2))).toBe(true);
  });
});
