import { combineFetchers } from '../../src/network/combineFetchers';

describe('combineFetchers', () => {
  it('returns first successful fetcher', async () => {
    const f1 = jest.fn().mockRejectedValue(new Error('fail'));
    const f2 = jest.fn().mockResolvedValue('ok');
    const combined = combineFetchers(f1, f2);
    await expect(combined('x')).resolves.toBe('ok');
    expect(f1).toHaveBeenCalled();
    expect(f2).toHaveBeenCalled();
  });
  it('throws if all fail', async () => {
    const f1 = jest.fn().mockRejectedValue(new Error('fail1'));
    const f2 = jest.fn().mockRejectedValue(new Error('fail2'));
    const combined = combineFetchers(f1, f2);
    await expect(combined('x')).rejects.toThrow('fail2');
  });
});
