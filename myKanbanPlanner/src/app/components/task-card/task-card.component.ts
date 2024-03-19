import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})

export class TaskCardComponent implements OnInit {
  @Input() task!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {}

  onStatusChange(newStatus: string) {
    if (this.task && this.task.id != null) {
      this.taskService.updateTaskStatus(this.task.id, newStatus);
    }
  }
}