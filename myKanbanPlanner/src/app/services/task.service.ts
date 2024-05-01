import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs'; // Import Observable
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks: Task[] = JSON.parse(storedTasks);
      this.tasksSubject.next(tasks);
    }
  }

  private saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const tasks = [...this.tasksSubject.getValue(), task];
    this.tasksSubject.next(tasks);
    this.saveTasksToLocalStorage(tasks);
  }

  filterTasksByTags(tags: string[]): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks: Task[]) =>
        tasks.filter((task) => tags.every((tag) => task.tags.includes(tag)))
      )
    );
  }

  updateTaskStatus(
    taskId: string,
    newStatus: 'todo' | 'inProgress' | 'done' | 'backlog'
  ): void {
    const tasks = this.tasksSubject.getValue();
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      const updatedTask = { ...tasks[taskIndex], status: newStatus };
      tasks.splice(taskIndex, 1, updatedTask);
      this.tasksSubject.next([...tasks]);
      this.saveTasksToLocalStorage(tasks);
    }
  }
}
