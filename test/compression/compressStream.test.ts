import { compressStream } from '../../src/compression/compressStream';

describe('compressStream', () => {
  it('should be a function', () => {
    expect(typeof compressStream).toBe('function');
  });
});
