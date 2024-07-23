import { changeFilePermissions } from '../../src/fs/changeFilePermissions';

describe('changeFilePermissions', () => {
  it('should be a function', () => {
    expect(typeof changeFilePermissions).toBe('function');
  });
});
