/**
 * Outputs human-readable logic evaluation explanation (for debugging AI rules, etc).
 * @author @dailker
 */
export function explainLogicTree(tree: any): string {
  if (typeof tree === 'function') return '[Function]';
  if (Array.isArray(tree)) return '(' + tree.map(explainLogicTree).join(' AND ') + ')';
  if (tree && typeof tree === 'object') {
    if ('and' in tree) return '(' + tree.and.map(explainLogicTree).join(' AND ') + ')';
    if ('or' in tree) return '(' + tree.or.map(explainLogicTree).join(' OR ') + ')';
    if ('not' in tree) return 'NOT ' + explainLogicTree(tree.not);
    if ('var' in tree) return String(tree.var);
  }
  return String(tree);
}
