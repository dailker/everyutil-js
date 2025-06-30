export type RandArrayOptions = {
  length: number;
  dtype?: 'int' | 'float' | 'bool' | 'string';
  min?: number;
  max?: number;
  charset?: string;
  strMinLen?: number;
  strMaxLen?: number;
  boolWeight?: number; // probability of true, 0..1
};

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomString(len: number, charset: string) {
  let s = '';
  for (let i = 0; i < len; i++) {
    s += charset.charAt(randomInt(0, charset.length - 1));
  }
  return s;
}

export function randArray(opts: RandArrayOptions): any[] {
  const {
    length,
    dtype = 'int',
    min = 0,
    max = 100,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    strMinLen = 5,
    strMaxLen = 10,
    boolWeight = 0.5,
  } = opts;

  if (!Number.isInteger(length) || length < 0) throw new Error('length must be a non-negative integer');

  switch (dtype) {
    case 'int':
      return Array.from({ length }, () => randomInt(min, max));
    case 'float':
      return Array.from({ length }, () => randomFloat(min, max));
    case 'bool':
      return Array.from({ length }, () => Math.random() < boolWeight);
    case 'string':
      return Array.from({ length }, () => {
        const l = randomInt(strMinLen, strMaxLen);
        return randomString(l, charset);
      });
    default:
      throw new Error(`Unsupported dtype: ${dtype}`);
  }
}
