import { windowedReduce } from '../../src/array/windowedReduce';

describe('windowedReduce', () => {
  it('reduces over windows', () => {
    // Sums each window of size 2, accumulating the sum
    const result = windowedReduce([1,2,3,4], (acc, window) => acc + window.reduce((a, b) => a + b, 0), 0, 2);
    expect(result).toBe(15); // (1+2)+(2+3)+(3+4) = 3+5+7=15
  });
});
