export const exposureTriangleDiagram = {
  nodes: [
    { id: "A", label: "Exposure" },
    { id: "B", label: "Aperture" },
    { id: "C", label: "Shutter Speed" },
    { id: "D", label: "ISO" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "B", to: "C" },
    { from: "C", to: "D" },
    { from: "D", to: "B" }
  ]
};