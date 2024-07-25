import { compareDirectories } from '../../src/fs/compareDirectories';

describe('compareDirectories', () => {
  it('should be a function', () => {
    expect(typeof compareDirectories).toBe('function');
  });
});
