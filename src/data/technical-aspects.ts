import { FlowchartData } from '../utils/flowchart-configs';

export const depthOfFieldData: FlowchartData = {
  nodes: [
    { id: "A", label: "Depth of Field Factors" },
    { id: "B", label: "Aperture" },
    { id: "C", label: "Focal Length" },
    { id: "D", label: "Subject Distance" },
    { id: "E", label: "Sensor Size" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" }
  ]
};

export const lensesData: FlowchartData = {
  nodes: [
    { id: "A", label: "Lens Types" },
    { id: "B", label: "Wide Angle" },
    { id: "C", label: "Standard" },
    { id: "D", label: "Telephoto" },
    { id: "E", label: "Macro" },
    { id: "F", label: "Specialty" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "A", to: "F" }
  ]
};

export const compositionData: FlowchartData = {
  nodes: [
    { id: "A", label: "Composition Rules" },
    { id: "B", label: "Rule of Thirds" },
    { id: "C", label: "Leading Lines" },
    { id: "D", label: "Symmetry" },
    { id: "E", label: "Framing" },
    { id: "F", label: "Balance" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "A", to: "F" }
  ]
};