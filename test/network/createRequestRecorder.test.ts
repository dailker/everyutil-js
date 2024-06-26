import { createRequestRecorder } from '../../src/network/createRequestRecorder';

describe('createRequestRecorder', () => {
  it('records fetch requests and responses', async () => {
    global.fetch = jest.fn(async () => 'ok') as any;
    const recorder = createRequestRecorder();
    await fetch('/api');
    expect(recorder.history.length).toBe(1);
    expect(recorder.history[0].input).toBe('/api');
    recorder.stop();
  });
});
