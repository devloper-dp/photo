import { FlowchartData } from '../utils/flowchart-configs';

export const lightPropertiesData: FlowchartData = {
  nodes: [
    { id: "A", label: "Light Properties" },
    { id: "B", label: "Intensity" },
    { id: "C", label: "Quality" },
    { id: "D", label: "Direction" },
    { id: "E", label: "Color Temperature" },
    { id: "F", label: "Contrast" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "A", to: "F" }
  ]
};

export const lightTypesData: FlowchartData = {
  nodes: [
    { id: "A", label: "Light Types" },
    { id: "B", label: "Natural Light" },
    { id: "C", label: "Continuous" },
    { id: "D", label: "Strobe/Flash" },
    { id: "E", label: "LED" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" }
  ]
};

export const lightingToolsData: FlowchartData = {
  nodes: [
    { id: "A", label: "Lighting Tools" },
    { id: "B", label: "Reflectors" },
    { id: "C", label: "Diffusers" },
    { id: "D", label: "Flags/Cutters" },
    { id: "E", label: "Gels" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" }
  ]
};