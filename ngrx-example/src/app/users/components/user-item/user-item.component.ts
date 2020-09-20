import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent {
  @Input()
  user: User;
}
