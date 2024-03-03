/**
 * Converts color temperature in Kelvin to RGB.
 *
 * Example: colorTemperatureToRgb(6500) → { r: 255, g: 249, b: 253 }
 *
 * @author @dailker
 * @param {number} tempKelvin - Color temperature in Kelvin.
 * @returns {{ r: number, g: number, b: number }} RGB object.
 */
export function colorTemperatureToRgb(tempKelvin: number): { r: number; g: number; b: number } {
  let temp = tempKelvin / 100;
  let r = 255, g = 255, b = 255;
  if (temp <= 66) {
    r = 255;
    g = Math.max(0, Math.min(255, 99.47 * Math.log(temp) - 161.12));
    b = temp <= 19 ? 0 : Math.max(0, Math.min(255, 138.52 * Math.log(temp - 10) - 305.04));
  } else {
    r = Math.max(0, Math.min(255, 329.7 * Math.pow(temp - 60, -0.133) ));
    g = Math.max(0, Math.min(255, 288.12 * Math.pow(temp - 60, -0.0755) ));
    b = 255;
  }
  return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}
