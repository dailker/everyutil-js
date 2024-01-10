/**
 * Generator that yields numbers oscillating between min and max in a sine-wave–like motion.
 * @author @dailker
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @param {number} [speed=0.1] - The speed of oscillation.
 * @yields {number} The next oscillated value.
 */
export function* oscillate(min: number, max: number, speed = 0.1): Generator<number> {
  let t = 0;
  while (true) {
    yield (max - min) / 2 * Math.sin(t) + (max + min) / 2;
    t += speed;
  }
}
