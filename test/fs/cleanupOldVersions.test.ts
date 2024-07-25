import { cleanupOldVersions } from '../../src/fs/cleanupOldVersions';

describe('cleanupOldVersions', () => {
  it('should be a function', () => {
    expect(typeof cleanupOldVersions).toBe('function');
  });
});
