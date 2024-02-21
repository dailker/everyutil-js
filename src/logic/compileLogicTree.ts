/**
 * Turn a JSON-style expression (like mini jsonLogic) into an executable function.
 * @author @dailker
 */
export function compileLogicTree(tree: any): (context: any) => boolean {
  if (typeof tree === 'function') return tree;
  if (Array.isArray(tree)) return (ctx: any) => tree.every((t: any) => compileLogicTree(t)(ctx));
  if (tree && typeof tree === 'object') {
    if ('and' in tree) return (ctx: any) => tree.and.every((t: any) => compileLogicTree(t)(ctx));
    if ('or' in tree) return (ctx: any) => tree.or.some((t: any) => compileLogicTree(t)(ctx));
    if ('not' in tree) return (ctx: any) => !compileLogicTree(tree.not)(ctx);
    if ('var' in tree) return (ctx: any) => Boolean(ctx[tree.var]);
  }
  return () => Boolean(tree);
}
