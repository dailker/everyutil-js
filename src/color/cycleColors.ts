/**
 * Cycles through an array of colors in an animation loop.
 *
 * Example: cycleColors(["#336699", "#ff0080"], 1000)
 *
 * @author @dailker
 * @param {string[]} colors - Array of color strings.
 * @param {number} interval - Interval in ms.
 * @returns {() => void} Function to stop the cycle.
 */
export function cycleColors(colors: string[], interval: number): () => void {
  let i = 0;
  const id = setInterval(() => {
    document.body.style.backgroundColor = colors[i % colors.length];
    i++;
  }, interval);
  return () => clearInterval(id);
}
