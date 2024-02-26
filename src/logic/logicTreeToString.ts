/**
 * Serializes logic into readable boolean algebra.
 * @author @dailker
 */
export function logicTreeToString(tree: any): string {
  if (typeof tree === 'function') return '[Function]';
  if (Array.isArray(tree)) return '(' + tree.map(logicTreeToString).join(' && ') + ')';
  if (tree && typeof tree === 'object') {
    if ('and' in tree) return '(' + tree.and.map(logicTreeToString).join(' && ') + ')';
    if ('or' in tree) return '(' + tree.or.map(logicTreeToString).join(' || ') + ')';
    if ('not' in tree) return '!' + logicTreeToString(tree.not);
    if ('var' in tree) return String(tree.var);
  }
  return String(tree);
}
