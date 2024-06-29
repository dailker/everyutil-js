import { blendModes } from '../../src/color/blendModes';

describe('blendModes', () => {
  it('returns multiply blend', () => {
    expect(blendModes('#ff0000', '#00ff00', 'multiply')).toBe('#000000');
  });

  it('returns screen blend', () => {
    expect(blendModes('#000000', '#ffffff', 'screen')).toBe('#ffffff');
  });

  it('returns overlay blend', () => {
    expect(blendModes('#808080', '#808080', 'overlay')).toBe('#808080');
  });

  it('returns first color if parse fails', () => {
    expect(blendModes('notacolor', '#ff0080', 'multiply')).toBe('notacolor');
  });
});
