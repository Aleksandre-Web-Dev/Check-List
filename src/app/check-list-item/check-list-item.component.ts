import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-list-item',
  templateUrl: './check-list-item.component.html',
  styleUrls: ['./check-list-item.component.scss'],
})
export class CheckListItemComponent {
  @Input() title: string = '';
}
