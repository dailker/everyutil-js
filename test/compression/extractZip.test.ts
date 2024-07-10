import { extractZip } from '../../src/compression/extractZip';

describe('extractZip', () => {
  it('should be a function', () => {
    expect(typeof extractZip).toBe('function');
  });
});
