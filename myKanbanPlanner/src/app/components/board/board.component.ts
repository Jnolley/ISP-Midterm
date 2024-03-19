import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  tasksTodo: Task[] = [];
  tasksInProgress: Task[] = [];
  tasksDone: Task[] = [];
  tasksBacklog: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasksTodo = [];
      this.tasksInProgress = [];
      this.tasksDone = [];
      this.tasksBacklog = [];
  
      tasks.forEach(task => {
        switch (task.status) {
          case 'todo':
            this.tasksTodo.push(task);
            break;
          case 'inProgress':
            this.tasksInProgress.push(task);
            break;
          case 'done':
            this.tasksDone.push(task);
            break;
          case 'backlog':
            this.tasksBacklog.push(task);
            break;
        }
      });
  
      this.sortTasksByPriority();
    });
  }
  
  sortTasksByPriority() {
    const priorityOrder = ['high', 'medium', 'low'];
    
    const sortByPriority = (task1: Task, task2: Task) => {

      const priorityIndex1 = priorityOrder.indexOf(task1.priority);
      const priorityIndex2 = priorityOrder.indexOf(task2.priority);
  
      return priorityIndex1 - priorityIndex2;
    };
    
    this.tasksTodo.sort(sortByPriority);
    this.tasksInProgress.sort(sortByPriority);
    this.tasksDone.sort(sortByPriority);
    this.tasksBacklog.sort(sortByPriority);
  }
  
  
}