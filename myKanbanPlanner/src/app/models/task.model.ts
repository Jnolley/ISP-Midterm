export interface Task {
  id?: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'inProgress' | 'done' | 'backlog';
  tags: string[];
}
