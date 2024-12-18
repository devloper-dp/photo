export interface MarkingSchemeItem {
  title: string;
  marks: number;
  details: string[];
}

export interface TopicMarkingScheme {
  items: MarkingSchemeItem[];
  totalMarks: number;
}