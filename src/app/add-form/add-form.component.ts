import { Component } from '@angular/core';

export interface ITask {
  taskTitle: String;
  creationDate: Date;
  isComplete: Boolean;
}

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  taskTitle: String = '';
  creationDate: Date = new Date();
  isComplete: Boolean = false;
  checkList: Array<ITask> = [];

  addTask() {
    const task = {
      taskTitle: this.taskTitle.trim(),
      creationDate: this.creationDate,
      isComplete: this.isComplete,
    };
    this.checkList.push(task);
  }

  clearInput() {
    this.taskTitle = '';
  }
}
