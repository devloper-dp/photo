export const lightPropertiesDiagram = {
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