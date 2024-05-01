import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  selectedTags: string[] = [];
  availableTags: string[] = ['Homework', 'Chores', 'Other'];

  constructor(private taskService: TaskService) {}

  onStatusChange(newStatus: 'todo' | 'inProgress' | 'done' | 'backlog') {
    if (this.task && this.task.id != null) {
      this.taskService.updateTaskStatus(this.task.id, newStatus);
    }
  }
}
