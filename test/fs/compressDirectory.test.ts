import { compressDirectory } from '../../src/fs/compressDirectory';

describe('compressDirectory', () => {
  it('should be a function', () => {
    expect(typeof compressDirectory).toBe('function');
  });
});
