/**
 * Evaluates a nested logic tree like {"and": [{"or": [...]}, ...]}.
 * @author @dailker
 */
export function resolveLogicalTree(tree: any, context?: any): boolean {
  if (typeof tree === 'function') return tree(context);
  if (Array.isArray(tree)) return tree.every((t: any) => resolveLogicalTree(t, context));
  if (tree && typeof tree === 'object') {
    if ('and' in tree) return tree.and.every((t: any) => resolveLogicalTree(t, context));
    if ('or' in tree) return tree.or.some((t: any) => resolveLogicalTree(t, context));
    if ('not' in tree) return !resolveLogicalTree(tree.not, context);
  }
  return Boolean(tree);
}
