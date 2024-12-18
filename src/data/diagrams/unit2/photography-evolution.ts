export const photographyEvolutionDiagram = {
  nodes: [
    { id: "A", label: "Photography Evolution" },
    { id: "B", label: "Early Processes" },
    { id: "C", label: "Film Era" },
    { id: "D", label: "Digital Revolution" },
    { id: "E", label: "Modern Technology" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "C", to: "D" },
    { from: "D", to: "E" }
  ]
};