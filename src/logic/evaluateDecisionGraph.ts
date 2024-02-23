/**
 * Walk a graph of boolean-based nodes and follow rules.
 * @author @dailker
 */
import { Node, Edge } from './createDecisionGraph';
export function evaluateDecisionGraph(graph: { nodes: Node[], edges: Edge[] }, input: any): string[] {
  const path: string[] = [];
  let current = graph.nodes.find(n => n.fn(input));
  while (current) {
    path.push(current.id);
    const edge = graph.edges.find(e => e.from === current!.id);
    if (!edge) break;
    current = graph.nodes.find(n => n.id === edge.to && n.fn(input));
  }
  return path;
}
