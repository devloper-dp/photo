import { createDiagram, createDiagramNode, createDiagramConnection } from '../../utils/diagram-helpers';
import MarkingScheme from '../../components/shared/MarkingScheme.astro.js';

export const lightPropertiesMarks = [
  {
    title: "Basic Properties",
    marks: 5,
    details: [
      "Light intensity and measurement",
      "Hard vs soft light quality",
      "Directional characteristics"
    ]
  },
  {
    title: "Advanced Properties",
    marks: 5,
    details: [
      "Color temperature control",
      "Contrast management",
      "Light falloff patterns"
    ]
  }
];

export const lightTypesMarks = [
  {
    title: "Natural Light",
    marks: 5,
    details: [
      "Sunlight characteristics",
      "Golden/Blue hour",
      "Weather effects"
    ]
  },
  {
    title: "Artificial Light",
    marks: 5,
    details: [
      "Studio strobes",
      "Continuous lighting",
      "LED technology"
    ]
  }
];

const lightingTools = createDiagram(
  [
    createDiagramNode('A', 'Lighting Tools'),
    createDiagramNode('B', 'Reflectors'),
    createDiagramNode('C', 'Diffusers'),
    createDiagramNode('D', 'Light Sources')
  ],
  [
    createDiagramConnection('A', 'B'),
    createDiagramConnection('A', 'C'),
    createDiagramConnection('A', 'D')
  ]
);

const markingSchemeItems = [
  {
    title: 'Lighting Tools',
    marks: 10,
    details: [
      'Reflectors',
      'Diffusers',
      'Light sources'
    ]
  }
];

export const lightingToolsMarks = [
  {
    title: "Modifiers",
    marks: 5,
    details: [
      "Reflector types and uses",
      "Diffusion materials",
      "Flag and cutter techniques"
    ]
  },
  {
    title: "Creative Tools",
    marks: 5,
    details: [
      "Color gel applications",
      "Specialty modifiers",
      "DIY solutions"
    ]
  },
  ...markingSchemeItems
];

export { lightingTools, markingSchemeItems };