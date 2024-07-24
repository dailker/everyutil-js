import { clearCache } from '../../src/fs/clearCache';

describe('clearCache', () => {
  it('should be a function', () => {
    expect(typeof clearCache).toBe('function');
  });
});
