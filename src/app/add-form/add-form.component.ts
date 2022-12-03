import { Component } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  checkListTitle: string = '';
  checkList: Array<string> = [];
  completeCheckList : Array<string> =[]
  addCheckItem() {
    this.checkListTitle.trim()
    this.checkList.push(this.checkListTitle);
    console.log(this.checkList);
  }
  clearInputField() {
    this.checkListTitle = '';
  }

  addToCompleteList(){
    
  }
}
