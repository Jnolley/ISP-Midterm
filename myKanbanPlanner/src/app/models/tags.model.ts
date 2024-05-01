export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate?: Date;
  tags: string[];
}
