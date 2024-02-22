/**
 * Graph-based logic flows (like decision trees or flowcharts).
 * @author @dailker
 */
export interface Node { id: string, fn: (input: any) => boolean }
export interface Edge { from: string, to: string }
export function createDecisionGraph(nodes: Node[], edges: Edge[]) {
  return { nodes, edges };
}
