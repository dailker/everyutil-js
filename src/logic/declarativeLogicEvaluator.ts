/**
 * Evaluates rules like jsonLogic expressions.
 * @author @dailker
 */
export function declarativeLogicEvaluator(jsonLogic: any, context: object): any {
  // Minimal jsonLogic-like evaluator
  if (typeof jsonLogic === 'function') return jsonLogic(context);
  if (Array.isArray(jsonLogic)) return jsonLogic.map(j => declarativeLogicEvaluator(j, context));
  if (jsonLogic && typeof jsonLogic === 'object') {
    if ('and' in jsonLogic) return jsonLogic.and.every((j: any) => declarativeLogicEvaluator(j, context));
    if ('or' in jsonLogic) return jsonLogic.or.some((j: any) => declarativeLogicEvaluator(j, context));
    if ('not' in jsonLogic) return !declarativeLogicEvaluator(jsonLogic.not, context);
    if ('var' in jsonLogic) return (context as any)[jsonLogic.var];
  }
  return jsonLogic;
}
