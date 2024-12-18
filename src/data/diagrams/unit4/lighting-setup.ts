export const lightingSetupDiagram = {
  nodes: [
    { id: "A", label: "Lighting Setup" },
    { id: "B", label: "Key Light" },
    { id: "C", label: "Fill Light" },
    { id: "D", label: "Back Light" },
    { id: "E", label: "Background Light" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" }
  ]
};