import { FlowchartData } from '../utils/flowchart-configs';

export const modernTrendsData: FlowchartData = {
  nodes: [
    { id: "A", label: "Current Trends" },
    { id: "B", label: "Computational Photography" },
    { id: "C", label: "AI Enhancement" },
    { id: "D", label: "Mobile Photography" },
    { id: "E", label: "Virtual Reality" },
    { id: "F", label: "Drone Photography" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "A", to: "F" }
  ]
};

export const trendMarkingScheme = [
  {
    title: "Technological Innovations",
    marks: 5,
    details: ["Computational photography", "AI-powered editing", "Advanced sensors"]
  },
  {
    title: "Mobile Photography",
    marks: 5,
    details: ["Smartphone capabilities", "Mobile editing apps", "Social media integration"]
  },
  {
    title: "New Perspectives",
    marks: 5,
    details: ["Drone photography", "360-degree imaging", "Virtual reality"]
  },
  {
    title: "Stylistic Trends",
    marks: 5,
    details: ["Minimalism", "Authenticity", "Environmental awareness"]
  }
];