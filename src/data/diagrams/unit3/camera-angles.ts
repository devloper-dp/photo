export const cameraAnglesDiagram = {
  nodes: [
    { id: "A", label: "Camera Angles" },
    { id: "B", label: "Eye Level" },
    { id: "C", label: "High Angle" },
    { id: "D", label: "Low Angle" },
    { id: "E", label: "Dutch Angle" },
    { id: "F", label: "Bird's Eye" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "A", to: "F" }
  ]
};