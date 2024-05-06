import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();
  public finishedTasks: Task[] = [];

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

  public saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const tasks = this.tasksSubject.getValue();
    tasks.push(task);
    this.tasksSubject.next(tasks);
    this.saveTasksToLocalStorage(tasks);
  }

  filterTasksByTag(tag: string): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks) => tasks.filter((task) => task.tags?.includes(tag)))
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
      if (newStatus === 'done') {
        this.moveTaskToFinished(tasks[index]);
      }
      this.tasksSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    }
  }

  private moveTaskToFinished(task: Task): void {
    this.finishedTasks.push(task);
  }

  clearDoneColumn(): void {
    const tasks = this.tasksSubject.getValue();
    const updatedTasks = tasks.filter((task) => task.status !== 'done');
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.tasksSubject.getValue();
    const index = tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      this.saveTasksToLocalStorage(tasks);
      this.tasksSubject.next(tasks);
    }
  }
}
