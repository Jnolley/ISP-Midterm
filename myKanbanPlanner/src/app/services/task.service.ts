import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();
  

  constructor() { }

  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    let maxId = 0;

    for (const task of currentTasks) {
      const taskId = task.id || 0;
      if (taskId > maxId) {
        maxId = taskId;
      }
    }
    const newId = maxId + 1;
    const newTask: Task = { ...task, id: newId };
    this.tasksSubject.next([...currentTasks, newTask]);
    console.log('Task added:', newTask);
    console.log('All tasks:', this.tasksSubject.getValue());
  }

  updateTaskStatus(taskId: number, newStatus: string): void {
    const tasks = this.tasksSubject.getValue();
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      tasks[taskIndex].status = newStatus as Task['status'];
      
      this.tasksSubject.next(tasks);
    }
  }

  
}
