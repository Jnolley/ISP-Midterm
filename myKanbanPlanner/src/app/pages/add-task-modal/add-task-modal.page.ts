import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.page.html',
  styleUrls: ['./add-task-modal.page.scss'],
})
export class AddTaskModalPage {
  task: Task = {
    id: '',
    title: '',
    description: '',
    priority: 'low',
    status: 'todo',
    tags: [],
  };
  selectedTags: string[] = [];
  availableTags: string[] = ['Homework', 'Chores', 'Other'];
  isEditing: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private taskService: TaskService,
    private navParams: NavParams
  ) {
    const passedTask = this.navParams.get('task');
    if (passedTask) {
      this.task = { ...passedTask };
      this.selectedTags = this.task.tags ? this.task.tags.slice() : [];
      this.isEditing = true;
    }
  }

  saveTask() {
    this.task.tags = this.selectedTags;
    if (this.isEditing) {
      this.taskService.updateTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    this.taskService.saveTasksToLocalStorage(
      this.taskService.tasksSubject.getValue()
    ); // Save tasks to local storage
    this.dismissModal();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
