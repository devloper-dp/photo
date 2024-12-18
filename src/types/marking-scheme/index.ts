export interface TopicMarkingScheme {
  items: Array<{
    title: string;
    marks: number;
    details: string[];
  }>; 
  totalMarks: number;
}
