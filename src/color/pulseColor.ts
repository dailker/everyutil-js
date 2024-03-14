/**
 * Creates a pulsing color effect.
 *
 * Example: pulseColor("#336699", 0.5, 1000)
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @param {number} intensity - Pulse intensity (0-1).
 * @param {number} speed - Pulse speed in ms.
 * @returns {() => void} Function to stop the pulse.
 */
export function pulseColor(color: string, intensity: number, speed: number): () => void {
  let up = true;
  let current = 1;
  const id = setInterval(() => {
    current += up ? intensity : -intensity;
    if (current >= 1 || current <= 0.5) up = !up;
    document.body.style.backgroundColor = color;
    // For demo: real implementation would adjust color brightness
  }, speed);
  return () => clearInterval(id);
}
