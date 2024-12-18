import type { FlowchartData } from '../types/flowchart';

export const createDiagramConnection = (from: string, to: string) => ({
  from,
  to
});

export const createDiagramNode = (id: string, label: string) => ({
  id,
  label
});

export const createDiagram = (nodes: Array<{id: string, label: string}>, connections: Array<{from: string, to: string}>): FlowchartData => ({
  nodes,
  connections
});