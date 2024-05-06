import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();
  public historySubject = new BehaviorSubject<Task[]>([]);
  public history$ = this.historySubject.asObservable();

  constructor(private alertController: AlertController) {
    this.loadTasks();
    this.loadHistory();
  }

  private loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks: Task[] = JSON.parse(storedTasks);
      this.tasksSubject.next(tasks);
    }
  }

  private loadHistory() {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      const history: Task[] = JSON.parse(storedHistory);
      this.historySubject.next(history);
    }
  }

  public saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  private saveHistoryToLocalStorage(history: Task[]): void {
    localStorage.setItem('history', JSON.stringify(history));
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
        this.moveTaskToHistory(tasks[index]);
      }
      this.tasksSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    }
  }

  private moveTaskToHistory(task: Task): void {
    const history = this.historySubject.getValue();
    history.push(task);
    this.historySubject.next(history);
    this.saveHistoryToLocalStorage(history);
  }

  clearDoneColumn(): void {
    const tasks = this.tasksSubject.getValue();
    const updatedTasks = tasks.filter((task) => {
      if (task.status === 'done') {
        this.moveTaskToHistory(task);
        return false;
      }
      return true;
    });
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

  async showHistory() {
    const history = this.historySubject.getValue();
    console.log(history);
    const alert = await this.alertController.create({
      header: 'Task History',
      message: history.map((task) => `${task.title}`).join(''),
      buttons: ['OK'],
    });
    await alert.present();
  }
}
