/**
 * Minimizes expressions using boolean algebra (e.g., A && true => A).
 * @author @dailker
 */
export function simplifyLogicTree(tree: any): any {
  if (typeof tree === 'function') return tree;
  if (Array.isArray(tree)) return tree.map(simplifyLogicTree);
  if (tree && typeof tree === 'object') {
    if ('and' in tree) {
      const simplified = tree.and.map(simplifyLogicTree).filter((t: any) => t !== true);
      if (simplified.length === 1) return simplified[0];
      if (simplified.includes(false)) return false;
      return { and: simplified };
    }
    if ('or' in tree) {
      const simplified = tree.or.map(simplifyLogicTree).filter((t: any) => t !== false);
      if (simplified.length === 1) return simplified[0];
      if (simplified.includes(true)) return true;
      return { or: simplified };
    }
    if ('not' in tree) return { not: simplifyLogicTree(tree.not) };
    if ('var' in tree) return tree;
  }
  return tree;
}
