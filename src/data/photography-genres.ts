import { FlowchartData } from '../utils/flowchart-configs';

export const photographyGenresData: FlowchartData = {
  nodes: [
    { id: "A", label: "Photography Genres" },
    { id: "B", label: "Portrait" },
    { id: "C", label: "Landscape" },
    { id: "D", label: "Documentary" },
    { id: "E", label: "Street" },
    { id: "F", label: "Fashion" }
  ],
  connections: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "A", to: "F" }
  ]
};

export const genreMarkingScheme = [
  {
    title: "Portrait Photography",
    marks: 5,
    details: ["Studio portraits", "Environmental portraits", "Candid photography"]
  },
  {
    title: "Landscape Photography",
    marks: 5,
    details: ["Nature landscapes", "Urban landscapes", "Seascapes"]
  },
  {
    title: "Documentary Photography",
    marks: 5,
    details: ["Photojournalism", "Social documentary", "War photography"]
  },
  {
    title: "Specialized Genres",
    marks: 5,
    details: ["Fashion photography", "Street photography", "Wildlife photography"]
  }
];