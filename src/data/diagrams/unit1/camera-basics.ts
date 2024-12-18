export const cameraBasicsDiagram = {
  nodes: [
    { id: "A", label: "Camera Basics" },
    { id: "B", label: "Light Capture" },
    { id: "C", label: "Image Formation" },
    { id: "D", label: "Digital Processing" },
    { id: "E", label: "Storage" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "C", to: "D" },
    { from: "D", to: "E" }
  ]
};