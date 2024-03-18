import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.page.html',
  styleUrls: ['./add-task-modal.page.scss'],
})
export class AddTaskModalPage {
  task: Task = {
    title: '',
    description: '',
    priority: 'low',
    status: 'todo',
  };

  constructor(private modalCtrl: ModalController, private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.task);
    this.dismissModal();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}