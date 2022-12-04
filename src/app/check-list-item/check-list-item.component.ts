import { Component, Input } from '@angular/core';
import { ITask } from '../add-form/add-form.component';

@Component({
  selector: 'app-check-list-item',
  templateUrl: './check-list-item.component.html',
  styleUrls: ['./check-list-item.component.scss'],
})
export class CheckListItemComponent {
  @Input() checkList: Array<ITask> = [];
  completeCounter: number = 0;

  removeTask(index: number) {
    this.checkList.splice(index, 1);
  }

  clearAll() {
    this.checkList.splice(0);
  }

  markAsComplete(index: number) {
    this.checkList[index].isComplete = true;
    this.checkList.sort((a, b) => Number(a.isComplete) - Number(b.isComplete));
    this.completeCounter++;
  }
}
