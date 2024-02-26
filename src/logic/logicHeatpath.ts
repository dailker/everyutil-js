/**
 * Returns the path most likely to trigger based on confidence weights.
 * @author @dailker
 */
import { Node, Edge } from './createDecisionGraph';
export function logicHeatpath(graph: { nodes: Node[], edges: Edge[], confidences: Record<string, number> }): string[] {
  const path: string[] = [];
  let current = graph.nodes.reduce((a, b) => (graph.confidences[a.id] > graph.confidences[b.id] ? a : b));
  while (current) {
    path.push(current.id);
    const edge = graph.edges.find(e => e.from === current!.id);
    if (!edge) break;
    const next = graph.nodes.find(n => n.id === edge.to);
    if (!next) break;
    current = next;
  }
  return path;
}
