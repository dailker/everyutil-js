import { compressToZip } from '../../src/compression/compressToZip';

describe('compressToZip', () => {
  it('should be a function', () => {
    expect(typeof compressToZip).toBe('function');
  });
});
