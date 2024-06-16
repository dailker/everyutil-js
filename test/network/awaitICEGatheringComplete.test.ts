import { awaitICEGatheringComplete } from '../../src/network/awaitICEGatheringComplete';

describe('awaitICEGatheringComplete', () => {
  it('resolves immediately if ICE gathering is complete', async () => {
    const pc = { iceGatheringState: 'complete', addEventListener: jest.fn(), removeEventListener: jest.fn() } as any;
    await expect(awaitICEGatheringComplete(pc)).resolves.toBeUndefined();
  });

  it('waits for icegatheringstatechange event', async () => {
    let state = 'gathering';
    const listeners: any = {};
    const pc = {
      get iceGatheringState() { return state; },
      addEventListener: (event: string, cb: any) => { listeners[event] = cb; },
      removeEventListener: jest.fn()
    } as any;
    const promise = awaitICEGatheringComplete(pc);
    state = 'complete';
    listeners['icegatheringstatechange']();
    await expect(promise).resolves.toBeUndefined();
  });
});
