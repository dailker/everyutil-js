/**
 * Nested rules with fallback sub-rules.
 * @author @dailker
 */
export function hierarchicalDecisionTree(tree: any, input: any): any {
  if (typeof tree === 'function') return tree(input);
  if (Array.isArray(tree)) return tree.map(t => hierarchicalDecisionTree(t, input));
  if (tree && typeof tree === 'object') {
    if ('if' in tree && 'then' in tree) {
      if (tree.if(input)) return typeof tree.then === 'function' ? tree.then(input) : tree.then;
      if ('else' in tree) return hierarchicalDecisionTree(tree.else, input);
    }
    for (const k in tree) if (tree[k]) return hierarchicalDecisionTree(tree[k], input);
  }
  return undefined;
}
