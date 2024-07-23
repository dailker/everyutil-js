import { calculateDirectorySize } from '../../src/fs/calculateDirectorySize';

describe('calculateDirectorySize', () => {
  it('should be a function', () => {
    expect(typeof calculateDirectorySize).toBe('function');
  });
});
