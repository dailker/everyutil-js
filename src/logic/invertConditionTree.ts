/**
 * Inverts a nested condition object structure (true <-> false for all predicates).
 * @author @dailker
 */
export function invertConditionTree(tree: any): any {
  if (typeof tree === 'function') return (...args: any[]) => !tree(...args);
  if (Array.isArray(tree)) return tree.map(invertConditionTree);
  if (tree && typeof tree === 'object') {
    const result: any = {};
    for (const k in tree) result[k] = invertConditionTree(tree[k]);
    return result;
  }
  return tree;
}
