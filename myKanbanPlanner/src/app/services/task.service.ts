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

  updateTask(updatedTask: Task): void {
    const tasks = this.tasksSubject.getValue();
    const index = tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      this.tasksSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    } else {
      console.error('Task not found, cannot update.');
    }
  }

  filterTasksByTag(tag: string): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks) => tasks.filter((task) => task.tags?.includes(tag)))
    );
  }

  updateTaskStatus(
    taskId: string,
    newStatus: 'todo' | 'inProgress' | 'done' | 'backlog'
  ): void {
    const tasks = this.tasksSubject.getValue();
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.status = newStatus;
      if (newStatus === 'done') {
        this.moveTaskToHistory(task);
      }
      this.tasksSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    } else {
      console.error('Task not found, cannot update status.');
    }
  }

  private moveTaskToHistory(task: Task): void {
    const history = this.historySubject.getValue();
    const taskCopy = { ...task };
    history.push(taskCopy);
    this.historySubject.next(history);
    this.saveHistoryToLocalStorage(history);
  }

  clearDoneColumn(): void {
    const allTasks = this.tasksSubject.getValue();
    const remainingTasks = allTasks.filter((task) => task.status !== 'done');
    const doneTasks = allTasks.filter((task) => task.status === 'done');

    doneTasks.forEach((task) => this.moveTaskToHistory(task));

    this.tasksSubject.next(remainingTasks);
    this.saveTasksToLocalStorage(remainingTasks);
  }

  async showHistory() {
    const history = this.historySubject.getValue();
    console.log('History items:', history);

    if (history.length === 0) {
      console.log('No history to show.');
      return;
    }

    const alert = await this.alertController.create({
      header: 'Task History',
      message: history
        .map((task) => `${task.title} - ${task.status}`)
        .join(', '),
      buttons: ['OK'],
    });
    await alert.present();
  }
}
