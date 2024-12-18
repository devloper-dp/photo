export const compositionRulesDiagram = {
  nodes: [
    { id: "A", label: "Composition Rules" },
    { id: "B", label: "Rule of Thirds" },
    { id: "C", label: "Leading Lines" },
    { id: "D", label: "Symmetry" },
    { id: "E", label: "Golden Ratio" },
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