import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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

  constructor(
    private taskService: TaskService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadAllTasks();
  }

  loadAllTasks() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.categorizeAndSortTasks(tasks);
    });
  }

  async openTagFilter() {
    const alert = await this.alertController.create({
      header: 'Select a Tag',
      inputs: [
        {
          name: 'tag',
          type: 'text',
          placeholder: 'Enter tag to filter',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.filterTasksByTag(data.tag);
          },
        },
      ],
    });

    await alert.present();
  }

  filterTasksByTag(tag: string) {
    this.taskService.filterTasksByTag(tag).subscribe((tasks) => {
      this.categorizeAndSortTasks(tasks);
    });
  }

  categorizeAndSortTasks(tasks: Task[]) {
    this.tasksTodo = tasks.filter((task) => task.status === 'todo');
    this.tasksInProgress = tasks.filter((task) => task.status === 'inProgress');
    this.tasksDone = tasks.filter((task) => task.status === 'done');
    this.tasksBacklog = tasks.filter((task) => task.status === 'backlog');

    this.sortTasksByPriority();
  }

  sortTasksByPriority() {
    const priorityOrder = ['high', 'medium', 'low'];
    const sortByPriority = (task1: Task, task2: Task) =>
      priorityOrder.indexOf(task1.priority) -
      priorityOrder.indexOf(task2.priority);

    this.tasksTodo.sort(sortByPriority);
    this.tasksInProgress.sort(sortByPriority);
    this.tasksDone.sort(sortByPriority);
    this.tasksBacklog.sort(sortByPriority);
  }

  clearDoneTasks() {
    this.taskService.clearDoneColumn();
  }
}
