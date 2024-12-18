import { createDiagram, createDiagramNode, createDiagramConnection } from '../../utils/diagram-helpers';
import MarkingScheme from '../../components/shared/MarkingScheme.astro';

const cameraTypes = createDiagram(
  [
    createDiagramNode('A', 'Camera Types'),
    createDiagramNode('B', 'DSLR'),
    createDiagramNode('C', 'Mirrorless'),
    createDiagramNode('D', 'Compact')
  ],
  [
    createDiagramConnection('A', 'B'),
    createDiagramConnection('A', 'C'),
    createDiagramConnection('A', 'D')
  ]
);

const markingSchemeItems = [
  {
    title: 'Camera Types',
    marks: 10,
    details: [
      'DSLR',
      'Mirrorless',
      'Compact'
    ]
  }
];

export { cameraTypes, markingSchemeItems };