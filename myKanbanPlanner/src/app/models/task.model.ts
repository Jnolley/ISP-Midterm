export interface Task {
  id?: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'inProgress' | 'done' | 'backlog';
  categoryId: number;
}