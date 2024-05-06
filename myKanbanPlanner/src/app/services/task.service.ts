import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadTasks();
  }

  private loadTasks() {
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
    const tasks = this.tasksSubject.getValue();
    tasks.push(task);
    this.tasksSubject.next(tasks);
    this.saveTasksToLocalStorage(tasks);
  }

  filterTasksByTag(tag: string): Observable<Task[]> {
    return of(
      this.tasksSubject.getValue().filter((task) => task.tags?.includes(tag))
    );
  }

  getAvailableTags(): Observable<string[]> {
    const tasks = this.tasksSubject.getValue();
    const tags = new Set<string>();
    tasks.forEach((task) => task.tags?.forEach((tag) => tags.add(tag)));
    return of(Array.from(tags));
  }

  updateTaskStatus(
    taskId: string,
    newStatus: 'todo' | 'inProgress' | 'done' | 'backlog'
  ): void {
    const tasks = this.tasksSubject.getValue();
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      tasks[index].status = newStatus;
      this.tasksSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    }
  }
}
