/**
 * Merges confidence scores into a decision.
 * @author @dailker
 */
export function confidenceMerge(confidences: number[], method: 'mean' | 'max' | 'vote'): number {
  switch (method) {
    case 'mean': return confidences.reduce((a, b) => a + b, 0) / confidences.length;
    case 'max': return Math.max(...confidences);
    case 'vote': return confidences.filter(c => c > 0.5).length / confidences.length;
    default: return 0;
  }
}
