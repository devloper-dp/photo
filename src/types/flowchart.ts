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