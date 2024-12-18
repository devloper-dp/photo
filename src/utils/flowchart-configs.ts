// Flowchart configuration types and defaults
export interface FlowchartNode {
  id: string;
  label: string;
}

export interface FlowchartConnection {
  from: string;
  to: string;
}

export interface FlowchartData {
  nodes: FlowchartNode[];
  connections: FlowchartConnection[];
}

export const createFlowchartData = (
  nodes: FlowchartNode[],
  connections: FlowchartConnection[]
): FlowchartData => ({
  nodes,
  connections,
});