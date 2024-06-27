import { createWebSocketClient } from '../../src/network/createWebSocketClient';

describe('createWebSocketClient', () => {
  it('creates a WebSocket and attaches handlers', () => {
    const wsMock = jest.fn(() => ({ addEventListener: jest.fn() }));
    (global as any).WebSocket = wsMock;
    const handlers = { onOpen: jest.fn(), onMessage: jest.fn() };
    const ws = createWebSocketClient('ws://localhost', handlers);
    expect(wsMock).toHaveBeenCalledWith('ws://localhost');
  });
});
