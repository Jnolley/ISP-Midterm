import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { AddTaskModalPage } from 'src/app/pages/add-task-modal/add-task-modal.page';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  selectedTags: string[] = [];
  availableTags: string[] = ['Homework', 'Chores', 'Other'];

  constructor(
    private modalCtrl: ModalController,
    private taskService: TaskService
  ) {}

  onStatusChange(newStatus: 'todo' | 'inProgress' | 'done' | 'backlog') {
    if (this.task && this.task.id) {
      this.taskService.updateTaskStatus(this.task.id, newStatus);
      this.taskService.saveTasksToLocalStorage(
        this.taskService.tasksSubject.getValue()
      );
    }
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalPage,
      componentProps: {
        task: this.task,
      },
    });
    modal.present();
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'low':
        return 'low-priority';
      case 'medium':
        return 'medium-priority';
      case 'high':
        return 'high-priority';
      default:
        return '';
    }
  }
}
