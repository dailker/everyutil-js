import { cacheFile } from '../../src/fs/cacheFile';

describe('cacheFile', () => {
  it('should be a function', () => {
    expect(typeof cacheFile).toBe('function');
  });
});
