import { decompressStream } from '../../src/compression/decompressStream';

describe('decompressStream', () => {
  it('should be a function', () => {
    expect(typeof decompressStream).toBe('function');
  });
});
