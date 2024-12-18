import type { TopicMarkingScheme } from '../../types/marking-scheme';
import { createDiagram, createDiagramNode, createDiagramConnection } from '../../utils/diagram-helpers';
import MarkingScheme from '../../components/shared/MarkingScheme.astro.js';

const cameraFunctions = createDiagram(
  [
    createDiagramNode('A', 'Camera Functions'),
    createDiagramNode('B', 'Exposure Control'),
    createDiagramNode('C', 'Focus System'),
    createDiagramNode('D', 'Image Processing'),
    createDiagramNode('E', 'Storage Management')
  ],
  [
    createDiagramConnection('A', 'B'),
    createDiagramConnection('A', 'C'),
    createDiagramConnection('A', 'D'),
    createDiagramConnection('A', 'E')
  ]
);

const markingSchemeItems = [
  {
    title: 'Camera Functions',
    marks: 20,
    details: [
      'Exposure mechanisms',
      'Focus systems',
      'Image processing',
      'Storage functions'
    ]
  }
];

export const historyMarkingScheme: TopicMarkingScheme = {
  items: [
    {
      title: "Early Photography",
      marks: 5,
      details: [
        "Camera obscura principles",
        "First permanent photographs",
        "Early photographic processes"
      ]
    },
    {
      title: "Technical Development",
      marks: 5,
      details: [
        "Evolution of camera technology",
        "Film development",
        "Digital transition"
      ]
    },
    ...markingSchemeItems
  ],
  totalMarks: 30
};

export { cameraFunctions };