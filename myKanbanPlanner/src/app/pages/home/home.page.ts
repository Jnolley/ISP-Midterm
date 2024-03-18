import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private taskService: TaskService,
    private modalController: ModalController
  ) {}

  async presentAddTaskModal() {
    const modal = await this.modalController.create({
      component: AddTaskModalPage,
    });
    await modal.present();
  }
}
