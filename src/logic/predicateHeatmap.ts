/**
 * Diagnostic matrix of which conditions fire for which inputs.
 * @author @dailker
 */
export function predicateHeatmap(preds: Array<(x: any) => boolean>, inputs: Array<any>): number[][] {
  return preds.map(fn => inputs.map(input => Number(fn(input))));
}
