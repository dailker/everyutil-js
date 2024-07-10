import { splitArchive } from '../../src/compression/splitArchive';

describe('splitArchive', () => {
  it('should be a function', () => {
    expect(typeof splitArchive).toBe('function');
  });
});
