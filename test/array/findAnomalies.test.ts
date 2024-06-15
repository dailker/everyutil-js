import { findAnomalies } from '../../src/array/findAnomalies';

describe('findAnomalies', () => {
  it('finds anomalies in an array', () => {
    expect(Array.isArray(findAnomalies([1,2,100,2,1]))).toBe(true);
  });
});
